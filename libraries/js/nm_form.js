$(function(){
    var lsName=localStorage.getItem('lsName');
    
    if(lsName!=null){
        $('#idNm').val(localStorage.getItem('lsName'));
        $('#idHeight').val(localStorage.getItem('lsHeight'));
        $('#idWeight').val(localStorage.getItem('lsWeight'));
        $('#idAge').val(localStorage.getItem('lsAge'));

        if(localStorage.getItem('lsSex')=='idSex1'){
            $('input:radio[id="idSex1"]').attr("checked", true);//'태그:타입[id&name='id&name명'].
        }else{
            $('input:radio[id="idSex2"]').attr("checked", true);
        }
        $('#idPurpose').val(localStorage.getItem('lsPurpose'));

        $('#idNm').attr('disabled',true);
    }
});

//등록 (저장)버튼
$('#regBtn').on('click', function () {
    var vName = $('#idNm').val(); //닉네임
    var vHeight = $('#idHeight').val(); //키
    var vWeight = $('#idWeight').val(); //체중
    var vAge = $('#idAge').val(); //나이
    var vSex = $('input[name="nmSex"]:checked').val(); //성별
    var vPurpose = $("#idPurpose option:selected").val(); //운동목적

    //유효성 검사를 위한 배열값
    var chkVal = [
        {value1: '닉네임',value2: vName},
        {value1: '키',value2: vHeight},
        {value1: '체중',value2: vWeight},
        {value1: '나이',value2: vAge},
        {value1: '성별',value2: vSex},
        {value1: '운동목적',value2: vPurpose}
    ];
    //유효성 검사
    if (validationChk(chkVal)) {
        var cVal = confirm('등록 하시겠습니까?');
        if (cVal) {
            localStorage.setItem('lsName', vName);
            localStorage.setItem('lsHeight', vHeight);
            localStorage.setItem('lsWeight', vWeight);
            localStorage.setItem('lsAge', vAge);
            localStorage.setItem('lsSex', vSex);
            localStorage.setItem('lsPurpose', vPurpose);
            location.reload();
        }
    }	
});

//새로입력 버튼
$('#newBtn').on('click', function (event) {
    var cVal = confirm('정말 초기화 하시겠습니까?');
    if (cVal) {
        localStorage.clear();
        location.reload();
    }
});

/**
 *유효성검사
 */
function validationChk(args) {
    var chk = true;
    var output = "";

    //공백확인
    $.each(args, function (index, item) {
        if (item.value2 == "") {
            //$("#idNm").focus(); 
            output += item.value1 + ",";
            chk = false;
        }
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