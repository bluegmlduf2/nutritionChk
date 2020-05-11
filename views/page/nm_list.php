<!--<body>-->
<!--현재 줄 테스트임 현재 페이지 내용 삭제해도됨-->
<div>로컬스토리지 test페이지</div>

<form action="">
    <input type="text" id="id1">
	<input type="text" id="id2"></br>
    <input type='button' value='test제출' id='sub1'>
    <input type='button' value='value조회' id='sub2'>
    <input type='button' value='로컬스토리지클리어' id='sub4'>
</form>

<script>
	$('#sub1').on('click', function () {
		localStorage.setItem('name', $('#id1').val());
		localStorage.setItem('pass', $('#id2').val());
        location.reload();

	});
    $('#sub2').on('click', function (event) {
		alert(localStorage.getItem('name'));
		alert(localStorage.getItem('pass'));
	});

    $('#sub4').on('click', function (event) {
        localStorage.clear();
	});
    


</script>
<!--</body>-->
