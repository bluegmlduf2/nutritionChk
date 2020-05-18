
	<form id="idForm" action="">
		<lable>음식검색</lable><input type="text" id="idNm"><input type="button" id="idSearchBtn" value="검색">

		<div>
			<h4>검색결과 그리드</h4>
			<table id="foodTbl" class="table table-bordered hover nowrap row-border" >
			<thead>
				<tr>
					<th>음식ID</th>
					<th>음식CD</th>
					<th>이름</th>
					<th>지역</th>
					<th>종류</th>
					<th>무게</th>
					<th>단위</th>
					<th>열량</th>
					<th>탄수화물</th>
					<th>단백질</th>
					<th>지방</th>
				</tr>
			</thead>
			</table>
		</div>
		<div><h4>일일음식 섭취 결과 그리드</h4>
			<table id="foodResTbl" class="table table-bordered hover nowrap row-border" >
				<thead>
					<tr>
						<th>음식ID</th>
						<th>음식CD</th>
						<th>이름</th>
						<th>무게</th>
						<th>단위</th>
						<th>열량</th>
						<th>탄수화물</th>
						<th>단백질</th>
						<th>지방</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
					<th colspan="5">총합 : </th>
					<th id='foodResTbl_result1'>00</th>
					<th id='foodResTbl_result2'>00</th>
					<th id='foodResTbl_result3'>00</th>
					<th id='foodResTbl_result4'>00</th>
					</tr>
				</tfoot>
			</table>
		</div>
		<input type="button" id="" value="저장">
		<lable><input type="text" id='idUsr'> 님이 오늘 섭취한 음식입니다.</lable>
		<lable>탄수화물</lable>
		<lable><input type="text" id='idColbo'>g</lable>
		<lable>지방</lable>
		<lable><input type="text" id='idFat'>g</lable>
		<lable>단백질</lable>
		<lable><input type="text" id='idProt'>g</lable>
		<lable>칼로리</lable>
		<lable><input type="text" id='idCol'>g</lable>
	</form>

	<div id="errMsg"></div>
	<script src="../application/libraries/js/nm_list.js"></script>

