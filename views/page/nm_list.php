
	<form id="idForm" action=""  style="width:70%; margin:0 auto;">
		<lable>음식검색</lable><input type="text" id="idNm">
		<input type="button" id="idSearchBtn" value="검색"></br></br>
		<div>
			<h4>검색결과 그리드</h4>
			<table id="foodTbl" class="table table-bordered" >
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
		</br>
		</br>
		</br>
		<div><h4>일일음식 섭취 결과 그리드</h4>
		<table id="foodResTbl" class="table table-bordered" >
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
				<th colspan="5" style="text-align:right;white-space:nowrap;">총합 : </th>
				<th id='foodResTbl_result1' style="text-align:center;white-space:nowrap;">00</th>
				<th id='foodResTbl_result2' style="text-align:center;white-space:nowrap;">00</th>
				<th id='foodResTbl_result3' style="text-align:center;white-space:nowrap;">00</th>
				<th id='foodResTbl_result4' style="text-align:center;white-space:nowrap;">00</th>
				</tr>
			</tfoot>
		</table>
		</br>
		</br>
		</br>
		</div></br>
		<input type="button" id="" value="저장"></br></br>
		<lable><input type="text" id='idUsr'> 님이 오늘 섭취한 음식입니다.</lable></br>
		<lable>탄수화물</lable>
		<lable><input type="text" id='idColbo'>g</lable></br>
		<lable>지방</lable>
		<lable><input type="text" id='idFat'>g</lable></br>
		<lable>단백질</lable>
		<lable><input type="text" id='idProt'></label>g</lable></br>
		<lable>칼로리</lable>
		<lable><input type="text" id='idCol'></label>g</lable></br>
	</form>
	</p>
	<div id="errMsg"></div>
	<script src="../application/libraries/js/nm_list.js"></script>

