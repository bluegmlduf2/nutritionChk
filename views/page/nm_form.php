<?php
/*
foreach ($members as $row)
{
        echo $row->M_CD;
		echo $row->M_NM;
		echo "</br>";
}*/
?>
	<header>
		<img src="../application/libraries/img/logo-nutrimon.png" alt="영양몬">	
	</header>
	<div class="nm-form-wrap">
		<form action="" id="idForm">
			<ul>
				<li>
					<label for="idNm">닉네임</label>
					<input type="text" id="idNm">
				</li>
				<li class="nm-col2">
					<div class="nm-col">
						<label for="idHeight">키</label>
						<input type="text" id="idHeight" maxlength="3" numberonly="true">	
					</div>
					<div class="nm-col">
						<label for="idWeight">체중</label>
						<input type="text" id="idWeight" maxlength="3" numberonly="true">
					</div>
				</li>
				<li class="nm-col2">
					<div class="nm-col">
						<label for="idAge">나이</label>
						<input type="text" id="idAge" maxlength="3" numberonly="true">
					</div>
					<div class="nm-col">
						<span>성별</span>
						<div class="nm-radio">
							<input type="radio" value="idSex1" id='idSex1' name='nmSex' checked><label for="idSex1">남</label>
							<input type="radio" value="idSex2" id='idSex2' name='nmSex'><label for="idSex2">여</label>
						</div>
					</div>
				</li>
				<li>
					<label for="idPurpose">운동목적</label>
					<select id="idPurpose">
						<option value="" selected="selected">선택해주세요</option>
						<option value="weightUp" name=''>체중유지</option>
						<option value="fatDown">체지방 감소</option>
						<option value="muscleUp">근육 증가</option>
					</select>
				</li>
			</ul>
			<p id="errMsg">&nbsp;</p>
			<div class="nm-btn-wrap">
				<button id="regBtn" type="submit">저장</button>
				<button id="newBtn">다시입력</button>
			</div>
		</form>
	</div>
	<!--
	<form id="idForm" action="">
		<label>닉네임</label><input type="text" id="idNm"></br>
		<label>키</label><input type="text" id="idHeight" maxlength="3" numberonly="true"></br>
		<label>체중</label><input type="text" id="idWeight" maxlength="3" numberonly="true"></br>
		<label>나이</label><input type="text" id="idAge" maxlength="3" numberonly="true"></br>
		<label>성별</label>
		<ul style="list-style:none">
			<li style="float: left">
				<input type="radio" value="idSex1" id='idSex1' name='nmSex' checked>남
			</li>
			<li style="float: left">
				<input type="radio" value="idSex2" id='idSex2' name='nmSex'>여
			</li>
		</ul></br>
		<label>운동목적</label>
		<select id="idPurpose">
			<option value="" selected="selected">선택해주세요</option>
			<option value="weightUp" name=''>체중유지</option>
			<option value="fatDown">체지방 감소</option>
			<option value="muscleUp">근육 증가</option>
		</select>
		</br>
		</br>
		<input type="button" id="regBtn" value="등록">&nbsp;
		<input type="button" id="newUpd" value="수정" onclick="enableFunc(false)">&nbsp;
		<input type="button" id="newBtn" value="새로입력">
	</form>
	
	<div id="errMsg"></div>
	-->
	<script src="../application/libraries/js/nm_form.js"></script>
</body>