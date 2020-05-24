var idChk=false; //아이디중복체크 확인여부

//OnLoad 초기화
$(function(){
    var lsSession=localStorage.getItem('lsSession');
    
    if(lsSession!=null){
        var obj ={"vSession": localStorage.getItem('lsSession')};
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
                //$('#vlifeStyle').val(result[0].M_LIFESTYLE);

                sessionStorage.setItem('userNm', result[0].M_NM);
                sessionStorage.setItem('userHeight', result[0].M_HEIGHT);
                sessionStorage.setItem('userWeight', result[0].M_WEIGHT);
                sessionStorage.setItem('userAge', result[0].M_AGE);
                sessionStorage.setItem('userSex', result[0].M_SEX);
                sessionStorage.setItem('userPurpose', result[0].M_PURPOSE);

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

//아이디 중복확인
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
                    $('#idNm').val('');
                    $('#idNm').focus();
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

//등록 (저장)버튼
$('#regBtn').on('click', function () {
    funcRegMem();
});

//새로입력 버튼
$('#newBtn').on('click', function (event) {
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
    var arrCol=['닉네임','키','체중','나이','성별','운동목적'];
    var contact = JSON.parse(obj);//json문자열 ->js객체
    var i=0;
    
    //공백확인
    $.each(contact, function (index, item) {
        if (item == "") {
            //$("#idNm").focus(); 
            output += arrCol[i] + ",";
            chk = false;
        }
        i++
    });

    //에러메세지 출력
    if (output != "") {
        var lastStr = output.lastIndexOf(",");
        var outputFin = output.substring(0, lastStr);
        $('#errMsg').html(outputFin + "을 입력해주세요");
        $('#errMsg').css("color", "red");
        $('#errMsg').css("fontSize", 18);
    }

    return chk;
}


//문자 입력 막기
$(document).on("keyup", "input:text[numberOnly]", function () {
    $(this).val($(this).val().replace(/[^0-9]/gi, ""));
});

/**
 *사용자 등록/수정
 */
function funcRegMem() {
    //저장정보
    var obj ={
    "vName": $('#idNm').val(),
    "vHeight": $('#idHeight').val(),
    "vWeight": $('#idWeight').val(),
    "mArg": $('#idAge').val(),
    "vSex":  $('input:radio[id="idSex1"]').is(":checked")==true?1:2,
    "vPurpose": $("#idPurpose option:selected").val(),
    "vSession": localStorage.getItem('lsSession')
    };

    obj = JSON.stringify(obj);//json객체 -> json문자열

    //유효성 검사
    if (validationChk(obj)) {
        if(localStorage.getItem('lsSession')==null){
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
            }
        }
    }	
}

/**
 * 텍스트박스에서 엔터키 입력시 저장버튼 클릭
 */
// $('#idNm,#idWeight,#idHeight,#idHeight,#idAge').on('keydown', function(e) {				
//     if(e.keyCode==13){		
//         $('#regBtn').click()	
//     }		
// });				
