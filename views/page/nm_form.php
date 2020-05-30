<?php
/*
foreach ($members as $row)
{
        echo $row->M_CD;
		echo $row->M_NM;
		echo "</br>";
}*/
?>
<body class="nm-form">
	<header>
		<img src="../application/libraries/img/logo-nutrimon.png" alt="영양몬">
	</header>
	<div class="nm-form-wrap">
			<div class="nm-form-container">
				<ul>
					<li>
						<label for="idNm">닉네임</label>
						<input type="text" id="idNm">
						<button class="nm-id-check" id="idCheck">중복확인</button>
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
								<input type="radio" value="idSex1" id='idSex1' name='nmSex' checked>
								<label for="idSex1">남</label>
								<input type="radio" value="idSex2" id='idSex2' name='nmSex'>
								<label for="idSex2">여</label>
							</div>
						</div>
					</li>
					<li>
						<label for="idLifeStyle">일일 활동량</label>
						<select id="idLifeStyle">
							<option value="" selected="selected">선택해주세요</option>
							<option value="verLight">아주 적음 (회사원,학생)</option>
							<option value="light">적음 (선생님,판매원)</option>
							<option value="moderate">보통 (청소,조경,2시간운동)</option>
							<option value="heavy">많음 (건설업,운동선수,4시간운동)</option>
							<option value="veryHeavy">매우 많음 (8시간운동)</option>
						</select>
					</li>
					<li>
						<label for="idPurpose">운동목적</label>
						<select id="idPurpose">
							<option value="" selected="selected">선택해주세요</option>
							<option value="weightUp" name=''>체중유지</option>
							<option value="fatDown">체지방 감소</option>
							<option value="muscleUp">근육 증가</option>
							<option value="typeValue">직접 선택</option>
						</select>
						<ul class="nm-purpose-inputs">
							<li>
								<label for="typeCarb">탄수화물</label>
								<input type="text" id="typeCarb" disabled='true' maxlength="2" numberonly="true">
							</li>
							<li>
								<label for="typeProt">단백질</label>
								<input type="text" id="typeProt" disabled='true' maxlength="2" numberonly="true">
							</li>
							<li>
								<label for="typePat">지방</label>
								<input type="text" id="typePat" disabled='true' maxlength="2" numberonly="true">
							</li>
						</ul>

					</li>
				</ul>
				<p id="errMsg">&nbsp;</p>
			</div>
			<div class="nm-btn-wrap">
				<button id="regBtn" type="submit">저장</button>
				<button id="newBtn">다시입력</button>
				<button id="moveBtn">화면이동</button>
			</div>
	</div>
	<script src="../application/libraries/js/nm_form.js"></script>
