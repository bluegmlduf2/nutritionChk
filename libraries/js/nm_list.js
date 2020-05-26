var page1_list_dt = null;//그리드1의 초기화 객체  
var page2_list_dt = null;//그리드2의 초기화 객체

var lsName="";//사용자 이름
var lsAge="";//사용자 나이
var idHeight="";//사용자 키
var idWeight="";//사용자 체중
var lsSex=""; //성별 남1 여2
var lsPurpose=""; //운동목적 -->코드화 필요

// 화면 초기화 메서드
	$(function(){
		/********************사용자 정보 초기화 ******************/
		lsName=localStorage.getItem('lsName');

		$('#idUsr').text(lsName);//사용자명 입력 

		if(lsName!=null){
			 lsAge=localStorage.getItem('lsAge');
			 idHeight=localStorage.getItem('idHeight');
			 idWeight=localStorage.getItem('idWeight');
			 lsAge=localStorage.getItem('lsAge');

			if(localStorage.getItem('lsSex')=='idSex1'){
				lsSex=1;
			}else{
				lsSex=2;
			}
			lsPurpose=localStorage.getItem('lsPurpose');
		}else{
			//임시적으로 막음 0518
			// alert('로그인해주세요.');
			// location.replace('http://localhost:8080/nutritionChk/nutritionMon/member');
			// return;
		}

		/********************1번 그리드 레이아웃 초기화 ******************/
		var col1 =  [
					{ title: "음식 ID", width:100},
					{ title: "음식 CD", width:200},
					{ title: "이름", width:80},
					{ title: "지역", width:50},
					{ title: "종류", width:50},
					{ title: "무게", width:30},
					{ title: "단위", width:5},
					{ title: "열량", width:30},
					{ title: "단백질", width:30},
					{ title: "지방", width:30},
					{ title: "탄수화물", width:30}
				]

		 page1_list_dt=$("#foodTbl").DataTable({
						columns: col1
						//,aLengthMenu: [[15, 50, -1], [15, 50, "전체"]]
						,order:[[0, 'desc']]
						,info: false
						,lengthChange: false //표시 건수기능
						,ordering:true //정렬기능
						,scrollX: false
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


		/********************2번그리드 레이아웃/값 초기화*********************** */
				//JSON객체
				var obj = {
					"mVal": lsName
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

							$('#idCol').val(result5); //inputBox 열량
							$('#idColbo').val(result6); //inputBox 탄수화물
							$('#idProt').val(result7); //inputBox 단백질
							$('#idFat').val(result8); //inputBox 지방
							
						}
		 }); 
	});

	/********************1번 그리드 음식 조회******************/
	$('#idSearchBtn').click(function () {
		if($('#idNm').val()==""){
			alert('검색조건을 입력해주세요');
			return;
		}

		/* JSON 형태의 Object*/
		var obj = {
			"sVal": $('#idNm').val()  //20200522 손창 디자인 작업위해 막음
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
					tmp1[i].push(val.FD_PROTEIN);
					tmp1[i].push(val.FD_FAT);
					tmp1[i].push(val.FD_CARBO);
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

	/********************영양소의 총합 구하기******************/
	function calTotal(){
		
	
	}