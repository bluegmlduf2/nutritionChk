var idChk=false; //아이디중복체크 확인여부

/**
 *ONLOAD초기화
 */
$(document).ready(function(){
    var lsSession=localStorage.getItem('lsSession');

    if(lsSession!=null&&lsSession!='null'&&lsSession!=''){

        var obj ={"vSession": lsSession};
        obj = JSON.stringify(obj);

        $.ajax({
            type: "POST",
            url: "/nutritionChk/nutritionMon/getMember",
            data: {
                "data": obj
            },
            async: false,
            dataType: "json",
            success: function (result) {

                $('#idNm').val(result[0].M_NM);
                $('#idHeight').val(result[0].M_HEIGHT);
                $('#idWeight').val(result[0].M_WEIGHT);
                $('#idAge').val(result[0].M_AGE);
                $('#idPurpose').val(result[0].M_PURPOSE);
                $('#idLifeStyle').val(result[0].M_LIFESTYLE);

                sessionStorage.setItem('userNm', result[0].M_NM);
                sessionStorage.setItem('userHeight', result[0].M_HEIGHT);
                sessionStorage.setItem('userWeight', result[0].M_WEIGHT);
                sessionStorage.setItem('userAge', result[0].M_AGE);
                sessionStorage.setItem('userSex', result[0].M_SEX);
                sessionStorage.setItem('userLifestyle', result[0].M_LIFESTYLE);
                sessionStorage.setItem('userPurpose', result[0].M_PURPOSE);

                if(result[0].M_PURPOSE=='typeValue'){
                    $('#typeCarb,#typeProt,#typePat').attr('disabled',false);
                    $('#typeCarb').val(result[0].M_CARB);
                    $('#typeProt').val(result[0].M_PROTEIN);
                    $('#typePat').val(result[0].M_FAT);
                    sessionStorage.setItem('userTypeCarb', result[0].M_CARB);
                    sessionStorage.setItem('userTypeProt', result[0].M_PROTEIN);
                    sessionStorage.setItem('userTypePat', result[0].M_FAT);
                    //$('#foodResTbl>tfoot>tr').find('th').eq(1).text(vCal);//제이쿼리 여러 선택자 사용
                }else{
                    $('#typeCarb,#typeProt,#typePat').attr('disabled',true);
                    $('#typeCarb,#typeProt,#typePat').val('');
                    sessionStorage.setItem('userTypeCarb', '');
                    sessionStorage.setItem('userTypeProt', '');
                    sessionStorage.setItem('userTypePat','');
                }

                if(result[0].M_SEX=='1'){
                    $('input:radio[id="idSex1"]').attr("checked", true);//'태그:타입[id&name='id&name명'].
                }else{
                    $('input:radio[id="idSex2"]').attr("checked", true);
                }

                $('#idNm').attr('disabled',true);
            },
            error: function (request, status, error) {
                //console.log("code:"+request.status+ ", message: "+request.responseText+", error:"+error);
                alert("code:" + request.status + ", message: " + request.responseText + ", error:" +
                    error);
            },
            complete: function () {
            }
        });
    }
});


/**
 *아이디중복확인
 */
$('#idCheck').on('click', function () {
      //저장정보
      var obj ={
        "vName": $('#idNm').val(),
        };
    
        obj = JSON.stringify(obj);//json객체 -> json문자열

        $.ajax({
            type: "POST",
            url: "/nutritionChk/nutritionMon/chkMember",
            data: {
                "data": obj
            },
            async: false,
            dataType: "json",
            success: function (result) {
                if(result[0].CNT==0){
                    idChk=true;
                    alert('사용 가능한 아이디입니다');
                    $('#idHeight').focus();
                    
                }else{
                    alert('이미 사용중인 아이디입니다');
                    $('#idNm').val('').focus();

                }
            },
            error: function (request, status, error) {
                //console.log("code:"+request.status+ ", message: "+request.responseText+", error:"+error);
                alert("code:" + request.status + ", message: " + request.responseText + ", error:" +
                    error);
            },complete: function () {
            }
        });
        return false; //Ajax새로고침 막기
});

/**
 *등록 (저장)버튼
 */
$('#regBtn').on('click', function () {
    //저장정보
    var obj ={
    "vSession": localStorage.getItem('lsSession'),
    "vName": $('#idNm').val(),
    "vHeight": $('#idHeight').val(),
    "vWeight": $('#idWeight').val(),
    "mArg": $('#idAge').val(),
    "vSex":  $('input:radio[id="idSex1"]').is(":checked")==true?1:2,
    "vLifeStyle": $("#idLifeStyle option:selected").val(),
    "vPurpose": $("#idPurpose option:selected").val(),
    "vCarb": $("#typeCarb").val(),
    "vProtein": $("#typeProt").val(),
    "vFat": $("#typePat").val()
    };

    obj = JSON.stringify(obj);//json객체 -> json문자열

    //유효성 검사
    if (validationChk(obj)) {
        var lsSession=localStorage.getItem('lsSession');
        //세션有->등록 , 세션無->수정
        if(lsSession==null||lsSession=='null'||lsSession==''){
            //아이디중복확인여부
            if(idChk){
                    //등록
                if (confirm('등록 하시겠습니까?')) {
                    $.ajax({
                        type: "POST",
                        url: "/nutritionChk/nutritionMon/setMember",
                        data: {
                            "data": obj
                        },
                        async: false,
                        dataType: "json",
                        success: function (result) {
                            localStorage.setItem('lsSession', result);
                        },
                        error: function (request, status, error) {
                            //console.log("code:"+request.status+ ", message: "+request.responseText+", error:"+error);
                            alert("code:" + request.status + ", message: " + request.responseText + ", error:" +
                                error);
                        },
                        complete: function () {
                            alert('등록하였습니다');
                            location.reload();
                        }
                    });
                }
            }else{
                alert('아이디 중복체크해주세요');
            }
        }else{
            //수정
            if (confirm('수정 하시겠습니까?')) {
                $.ajax({
                    type: "POST",
                    url: "/nutritionChk/nutritionMon/updateMember",
                    data: {
                        "data": obj
                    },
                    async: false,
                    dataType: "json",
                    success: function (result) {
                        
                    },
                    error: function (request, status, error) {
                        //console.log("code:"+request.status+ ", message: "+request.responseText+", error:"+error);
                        alert("code:" + request.status + ", message: " + request.responseText + ", error:" +
                            error);
                    },
                    complete: function () {
                        alert('수정하였습니다');
                        location.reload();
                    }   
                });
            }else{
                return false;
            }
        }
    }	
});

/**
 *새로입력 버튼
 */
$('#newBtn').on('click', function (event) {
    if($('#idNm').val()==''){
        alert('다시 입력할 정보가 없습니다');
        return;
    }
    var cVal = confirm('기존데이터가 삭제됩니다 진행 하시겠습니까?');
    if (cVal) {
        sessionStorage.clear();
        localStorage.clear();
        location.reload();
        
        alert('삭제되었습니다.');
    }
});

/**
 *유효성검사
 */
function validationChk(obj) {
    var chk = true;
    var output = "";
    var outPer = "";
    var arrCol=['닉네임','키','체중','나이','성별','생활습관','운동목적','탄수화물','단백질','지방'];
    var contact = JSON.parse(obj);//json문자열 ->js객체
    var i=-1;
    
    //공백확인
    $.each(contact, function (index, item) {
        if(i==7)return false;
        if (item == ""&&index != 'vSession') {
            //$("#idNm").focus(); 
            output += arrCol[i] + ",";
            chk = false;
        }
        i++;
    });

    //셀렉트 박스 직접선택시 비율이 100% 확인  
    if(contact['vPurpose']=='typeValue'){
        var selChk=Number(contact['vCarb'])+Number(contact['vProtein'])+Number(contact['vFat']);
        if(selChk!=100){
            outPer= "<br> [탄수화물 단백질 지방]의 비율";
            chk = false;
        }
    }

    //에러메세지 출력
    if (output != ""||outPer!= "") {
        
        var lastStr = output.lastIndexOf(",");
        var outputFin = output.substring(0, lastStr);
            outputFin+=outPer;
        $('#errMsg').html('');
        $('#errMsg').append(outputFin + "을 확인해주세요.<br>");
        //$('#errMsg').append(outPer);
        $('#errMsg').css("color", "red");
        $('#errMsg').css("fontSize", 18);
    }

    return chk;
}

/**
 *문자입력막기
 */
$(document).on("keyup", "input:text[numberOnly]", function () {
    $(this).val($(this).val().replace(/[^0-9]/gi, ""));
});

/**
 *운동목적 선택 selectBox
 */
$('#idPurpose').change(function(event){
    
    if($(this).val()=='typeValue'){
        $('#typeCarb').val(sessionStorage.getItem('userTypeCarb'));
        $('#typeProt').val(sessionStorage.getItem('userTypeProt'));
        $('#typePat').val(sessionStorage.getItem('userTypePat'));
        $('#typeCarb,#typeProt,#typePat').attr('disabled',false);
    }else{
        $('#typeCarb,#typeProt,#typePat').val('');
        $('#typeCarb,#typeProt,#typePat').attr('disabled',true);
    }
});

/**
 * 텍스트박스에서 엔터키 입력시 저장버튼 클릭
 */
$('#idNm,#idWeight,#idHeight,#idAge,#typeCarb,#typeProt,#typePat').on('keydown', function(e) {				
    if(e.keyCode==13){		
        $('#regBtn').click()	
    }		
});				

/**
 * 이동버튼 클릭
 */
$('#moveBtn').click(function(){
    location.replace('/nutritionChk/nutritionMon/list');
});