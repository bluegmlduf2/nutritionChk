<body class="nm-list">	
	<div class="nm-list-wrap">
		<header>
			<figure><img src="../application/libraries/img/logo-nutrimon.png" alt="영양몬"></figure>
		</header>
		<div class="nm-list-container">
			<div class="nm-search">
				<span>
					<label for="idNm">음식검색</label><input type="text" id="idNm" placeholder="검색어를 입력해주세요"><button id="idSearchBtn">검색</button>
				</span>
			</div>
			<div class="nm-food-search-result">
				<h2>검색결과</h2>
				<table id="foodTbl" class="table table-bordered hover row-border">
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

			<div class="nm-food-daily-result">
				<h2>일일음식 섭취 결과 그리드</h2>
				<table id="foodResTbl" class="table table-bordered hover row-border">
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
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tfoot>
				</table>
			</div>
			<div class="nm-list-save">
				<button id='btnSave'>저장</button>
				<button id='btnMoveBack'>뒤로가기</button>
			</div>
			<p class="nm-user-info">
				<span id='idUsr'></span>님이 오늘 섭취한 음식입니다.
			</p>
			<ul class="nm-data-detail">
				<li>
					<p>탄수화물</p>
					<div class="nm-data01">
						<span id='idColbo' class="nm-num">0</span>
						<b>/</b>
						<span id='idTotColbo' class="nm-num2">0</span>
						<i class="nm-unit">g</i>
					</div>
				</li>
				<li>
					<p>단백질</p>
					<div class="nm-data03">
						<span id='idProt' class="nm-num">0</span>
						<b>/</b>
						<span id='idTotProt' class="nm-num2">0</span>
						<i class="nm-unit">g</i>
					</div>
				</li>
				<li>
					<p>지방</p>
					<div class="nm-data02">
						<span id='idFat' class="nm-num">0</span>
						<b>/</b>
						<span id='idTotFat' class="nm-num2">0</span>
						<i class="nm-unit">g</i>
					</div>
				</li>
				<li>
					<p>칼로리</p>
					<div class="nm-data01">
						<span id='idCol' class="nm-num">0</span>
						<b>/</b>
						<span id='idTotCol' class="nm-num2">0</span>
						<i class="nm-unit">Kcal</i>
					</div>
				</li>
			</ul>
			<div id="errMsg"></div>
		</div>	
	</div>
	
	<script src="../application/libraries/js/nm_list.js"></script>

