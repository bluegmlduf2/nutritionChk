<?php defined('BASEPATH') OR exit('No direct script access allowed');

class nutritionMon extends CI_Controller {

	private $responseType = 'json'; // json or jsonp
	/**
	 * onload
	 */
	public function __construct()
    {
        parent::__construct();
		$this->load->database();
		
	}

	public function member() {
		$this->load->model('Member_model');
        
        $data['members'] = $this->Member_model->GetMembers();

		$default_data=array('title'=> 'member page title',
			'content'=> 'member page test'
		);

		$this->load->view('layout/header', $default_data);
		$this->load->view('page/nm_form', $data);
		$this->load->view('layout/footer', $default_data);
		//$string = $this->load->view('welcome_message', '', true);//해당 화면을 데이터로 저장
	}

	public function list() {

		$default_data=array('title'=> 'member page title',
			'content'=> 'member page test'
		);

		//$data['list'] = '';

		$this->load->view('layout/header', $default_data);
		$this->load->view('page/nm_list' );
		$this->load->view('layout/footer', $default_data);
	}

	public function getList() {
	//모델로드
	  $this->load->model('List_model');
	  
	//클라이언트에서 Json String 유형으로 받아서 php배열 $data로 저장.
	  $data = $this->input->post('data', true);
	  //print_r($data);

	  //JSON 문자열을 받아서 PHP OBJECT 또는 연관 배열로 변환 한다.
	  //두번째 인자가 TRUE이면 연관 배열로 변환한다.FALSE이면 객체로 받음
	  $json_object = json_decode( $data, true );

	  //데이터처리 $obj->{'foo-bar'}
	  log_message("error",$json_object[sVal]);
	  $json_object = $this->List_model->GetFoodList($json_object['sVal']);

	  //VALUE의 JSON 표현을 가지는 문자열을 반환합니다.
	  //성공시에 JSON 인코드 STRING을 반환합니다.
	  $json_output = json_encode($json_object, JSON_UNESCAPED_UNICODE);
	  echo $json_output;
	}

	public function getChoiceList() {
		//모델로드
		  $this->load->model('List_model');
		  
		//클라이언트에서 Json String 유형으로 받아서 php배열 $data로 저장.
		  $data = $this->input->post('data', true);

		  //JSON 문자열을 받아서 PHP OBJECT 또는 연관 배열로 변환 한다.
		  //두번째 인자가 TRUE이면 연관 배열로 변환한다.FALSE이면 객체로 받음
		  $json_object = json_decode( $data, true );
	
		  //데이터처리 $obj->{'foo-bar'}
		  log_message("error",$json_object[mVal]);
		  $json_object = $this->List_model->GetChoiceList($json_object['mVal']);
	
		  //VALUE의 JSON 표현을 가지는 문자열을 반환합니다.
		  //성공시에 JSON 인코드 STRING을 반환합니다.
		  $json_output = json_encode(array('data' => $json_object), JSON_UNESCAPED_UNICODE);
		  log_message("error","$$$$$$$$$$$$$$$$$$$$$$$$$$"); 
		  log_message("error",$json_output);
		   
		  echo $json_output;
	}


}
