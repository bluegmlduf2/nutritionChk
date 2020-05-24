var page1_list_dt = null;//그리드1의 초기화 객체  
var page2_list_dt = null;//그리드2의 초기화 객체

var userNm="";//사용자 이름
var userAge="";//사용자 나이
var userHeight="";//사용자 키
var userWeight="";//사용자 체중
var userSex=""; //성별 남1 여2
var userPurpose=""; //운동목적 

/**
 * 화면 Onload
 */
	$(function(){

		/**
		 * 사용자 정보 호출
		 */
		userNm=sessionStorage.getItem('userNm');

		$('#idUsr').text(userNm);//사용자명 입력 

		if(userNm!=null){
			userNm=sessionStorage.getItem('userNm');
			userHeight=sessionStorage.getItem('userHeight');
			userWeight=sessionStorage.getItem('userWeight');
			userAge=sessionStorage.getItem('userAge');

			if(sessionStorage.getItem('userSex')=='1'){
				userSex=1;
			}else{
				userSex=2;
			}
			userPurpose=sessionStorage.getItem('userPurpose');
		}else{
			//임시적으로 막음 0518
			// alert('로그인해주세요.');
			// location.replace('http://localhost:8080/nutritionChk/nutritionMon/member');
			// return;
		}

		/**
		 * 1번 그리드 레이아웃 초기화
	     */		
		var col1 =  [
					{ title: "음식 ID", width:100},
					{ title: "음식 CD", width:200},
					{ title: "이름", width:80},
					{ title: "지역", width:50},
					{ title: "종류", width:50},
					{ title: "무게", width:30},
					{ title: "단위", width:5},
					{ title: "열량", width:30},
					{ title: "탄수화물", width:30},
					{ title: "단백질", width:30},
					{ title: "지방", width:30}
				]

		 page1_list_dt=$("#foodTbl").DataTable({
						columns: col1
						//,aLengthMenu: [[15, 50, -1], [15, 50, "전체"]]
						,order:[[0, 'desc']]
						,info: false
						,lengthChange: false //표시 건수기능
						,ordering:true //정렬기능
						,scrollX: '100%'
						 ,scrollY: '200px'
						 ,scrollCollapse: true
						 ,paging: false //페이징기능
						 ,language: {
							"emptyTable": "데이터가 없습니다.",
							"lengthMenu": "페이지당 _MENU_ 개씩 보기",
							"info": "현재 _START_ - _END_ / _TOTAL_건",
							"infoEmpty": "데이터 없음",
							"infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
							"search": "필터 검색: ",
							"zeroRecords": "일치하는 데이터가 없습니다.",
							"loadingRecords": "로딩중...",
							"processing":     "잠시만 기다려 주십시오.",
							"paginate": {
								"next": "다음",
								"previous": "이전"
							}
						}
						,columnDefs: [
							// 1번재 항목 열을 숨김
							{ targets: [0,1], visible: false }
							,{targets: [2,3,4,5,6,7,8,9,10],className: 'dt-body-center'}
						]				
		 }); 


		/**
		 * 2번그리드 레이아웃/값 초기화
		*/
		//JSON객체
		var obj = {
			"mVal": userNm
		}
		
		/* Object JSON을 String 형태로 변환한다.(변환되면서 겹따옴표로 감싸짐)*/
		obj = JSON.stringify(obj);

		 page2_list_dt=$("#foodResTbl").DataTable({
			ajax : {
				method:"post",
				url: "/nutritionChk/nutritionMon/getChoiceList",
				data:{
					param2:obj
				}
			}
			,columns: [
				{ data: "C_ID", width:100},
				{ data: "C_CD", width:200},
				{ data: "C_NM", width:80},
				{ data: "C_PER", width:30},
				{ data: "C_UNIT", width:5},
				{ data: "C_CAL", width:30},
				{ data: "C_CARBO", width:30},
				{ data: "C_PROTEIN", width:30},
				{ data: "C_FAT", width:30},
			]
			//,processing: true
			,order:[[0, 'desc']]
			,info: false
			,lengthChange: false //표시 건수기능
			,ordering:true //정렬기능
			,scrollX: false
			,scrollY: "200px"
			,scrollCollapse: true
			,paging: false //페이징기능
			,searching: false// 검색 기능
			,language: {
				"emptyTable": "데이터가 없습니다.",
				"lengthMenu": "페이지당 _MENU_ 개씩 보기",
				"info": "현재 _START_ - _END_ / _TOTAL_건",
				"infoEmpty": "데이터 없음",
				"infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
				"search": "필터 검색: ",
				"zeroRecords": "일치하는 데이터가 없습니다.",
				"loadingRecords": "로딩중...",
				"processing":     "잠시만 기다려 주십시오.",
				"paginate": {
					"next": "다음",
					"previous": "이전"
				}
			}
			,columnDefs: [
				// 1번재 항목 열을 숨김
				{ targets: [0,1], visible: false }
				,{targets: [2,3,4,5,6,7,8],className: 'dt-body-center'}
			]
			/* Footer에 총합 구하기
			* filtered data 총합만 계산하도록 함.*/
			,"footerCallback":function(){
				var api = this.api(), data;
				var result5 = 0;//열량
				var result6 = 0;//탄수화물
				var result7 = 0;//단백질
				var result8 = 0;//지방
				
				//$(api.column(5).footer()).html(result1.toLocaleString()+'g');
				//api.column(5, {search:'applied'}).data().each(function(data,index){result1 += parseFloat(data);});
				for(var i=5;i<9;i++){
					//총합 구하기 eval(동적변수)
					api.column(i, {search:'applied'}).data().each(function(data,index){
						eval("result"+i+"+="+parseFloat(data));
					});
					//총합 입력
					if(i==5){
						$(api.column(i).footer()).html(eval("result"+i).toLocaleString()+"Kcal");
					}else{
						$(api.column(i).footer()).html(eval("result"+i).toLocaleString()+"g");
					}
				}

				$('#idCol').text(result5); //inputBox 열량
				$('#idColbo').text(result6); //inputBox 탄수화물
				$('#idProt').text(result7); //inputBox 단백질
				$('#idFat').text(result8); //inputBox 지방
				
			}
		 }); 
	});

	/*
	*1번 그리드 음식 조회
	*/
	$('#idSearchBtn').click(function () {
		if($('#idNm').val()==""){
			alert('검색조건을 입력해주세요');
			return;
		}

		/* JSON 형태의 Object*/
		var obj = {
			"sVal": $('#idNm').val()
		}

		/* Object JSON을 String 형태로 변환한다.(변환되면서 겹따옴표로 감싸짐)*/
		obj = JSON.stringify(obj);

		//alert('jquery');
		$.ajax({
			type: "POST",
			url: "/nutritionChk/nutritionMon/getList",
			data: {
				"data": obj
			},
			dataType: "json",
			success: function (result) {
				// $("#idGrd1").html(""); // 태그 초기화
				// $.each(result, function (index, item) {	
				// 	$("#idGrd1").append("<h3>"+item.FD_NM+"</h3></br>"); // 태그 추가
				// });
				var tmp1 = new Array();
				
				i = 0;
				$.each( result, function(key, val){
					tmp1[i] = new Array();
					tmp1[i].push(val.FD_ID);
					tmp1[i].push(val.FD_CD);
					tmp1[i].push(val.FD_NM);
					tmp1[i].push(val.FD_AREA);
					tmp1[i].push(val.FD_KIND);
					tmp1[i].push(val.FD_PER);
					tmp1[i].push(val.FD_UNIT);
					tmp1[i].push(val.FD_CAL);
					tmp1[i].push(val.FD_CARBO);
					tmp1[i].push(val.FD_PROTEIN);
					tmp1[i].push(val.FD_FAT);
					i++;
				});

				if(page1_list_dt){
					//page1_list_dt.column(0,1).visible( false );
					page1_list_dt.clear();
					page1_list_dt.rows.add(tmp1);
					page1_list_dt.draw();
					//console.log(page1_list_dt.rows(0).data());
				}
				else{
					page1_list_dt = $('#foodTbl').DataTable({
						data: tmp1
					});
				}
			},
			error: function (request, status, error) {
				//console.log("code:"+request.status+ ", message: "+request.responseText+", error:"+error);
				alert("code:" + request.status + ", message: " + request.responseText + ", error:" +
					error);
			},
			complete: function () {

			}
		}); //Ajax 통신 End
	});

	/**
	 * 1번 그리드의 행을 클릭시 2번그리드 행 추가
	 */
	$('#foodTbl').on('click','tr',function(){
		var api1=$('#foodTbl').DataTable().rows(this);
		var api2=$('#foodResTbl').DataTable();
		var vId=api1.data()[0][0];//음식 아이디
		var vCd=api1.data()[0][1];//음식 코드
		var vNm=api1.data()[0][2];//이름
		var vGram=api1.data()[0][5];//무게
		var vUnit=api1.data()[0][6];//단위
		var vKcal=api1.data()[0][7];//열량
		var vCalbo=api1.data()[0][8];//탄수화물
		var vProtein=api1.data()[0][9];//단백질
		var vFat=api1.data()[0][10];//지방	

		var inputGram = prompt('섭취한 그람 수를 입력하세요', api1.data()[0][5]); 

		if(inputGram!=null){
			//섭취량/섭취한 총 그람수*100=퍼센트 & 총그람수*퍼센트/100 =>퍼센트에 따른 섭취 그람수  
			var rKcal=ChkDataType(vKcal*(inputGram/vGram*100)/100);
			var rCalbo=ChkDataType(vCalbo*(inputGram/vGram*100)/100);
			var rProtein=ChkDataType(vProtein*(inputGram/vGram*100)/100);
			var rFat=ChkDataType(vFat*(inputGram/vGram*100)/100);

			var rowNode=api2.row.add(
				{"C_ID":vId,
				"C_CD":vCd,
				"C_NM":vNm,
				"C_PER":inputGram,
				"C_UNIT":vUnit,
				"C_CAL":rKcal,
				"C_CARBO":rCalbo,
				"C_PROTEIN":rProtein,
				"C_FAT":rFat}
			).draw().node();

			$( rowNode )
			.css( 'color', 'red' )
			.animate( { color: 'black' } );
		}
		/**
		 * 실수형(소수점1자리이하)와 정수형 구분해서 반환
		 */
		function ChkDataType (args){
			var result= null;
			//alert(typeof(args));
			if (Number.isInteger(args)){
				result=args;
			}else{
				result = args.toFixed(1)//실수형일때 소수점 1자리까지 표기
			}
			return result;
		}

	}); 

	/**
	 * 2번 그리드 클릭시 해당 행 삭제
	 */
	$('#foodResTbl').on( 'click', 'tbody tr', function () {
		if(confirm($(this).children().eq(0).text()+'(을)를 삭제하겠습니까?')){ //여기서 this는 jQuery
			var api1 = $('#foodResTbl').DataTable();
			api1.row(this).remove().draw();	//여기서 this는 Js객체 .. 
			//해당 함수 안에서 this와 $(this)는 둘다 tr을 가리키지만 각자 jQeury/js의 객체로 사용됨
		}
	} );

	/**
	 * 텍스트박스에서 엔터키 입력시 저장버튼 클릭
	 */
	$('#idNm').on('keydown', function(e) {				
		if(e.keyCode==13){		
			$('#idSearchBtn').click()	
		}		
	});				


	/********************영양소의 총합 구하기******************/
	function calTotal(){
		
	
	}