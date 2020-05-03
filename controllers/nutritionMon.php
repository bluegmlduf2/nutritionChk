<?php defined('BASEPATH') OR exit('No direct script access allowed');

class nutritionMon extends CI_Controller {

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

		$this->load->view('layout/header', $default_data);
		$this->load->view('page/nm_list', $default_data);
		$this->load->view('layout/footer', $default_data);
	}

	public function test(){
	/*	//로그
	    log_message("error", "Error Message");
        log_message("debug", "Debug Message");
        log_message("info", "Informational Message");
	*/
	/*JSON 반환
	        $result = array(
            array(
                'name' => 'Edward',
                'age' => 30
            ),
            array(
                'name' => 'Alex',
                'age' => 25
            )
        );

        $this->output->set_content_type('text/json');
        $this->output->set_output(json_encode($result));

	*/
	/*
	파라미터 전달 예제
	http://ooo2.org/index.php/topic/get/1
	-->function get($id){echo '$id' //1 }
		printf("URI Segment 1 : %s <br/>", $this->uri->segment(1));//클래스
		printf("URI Segment 2 : %s <br/>", $this->uri->segment(2));//메서드
		printf("URI Segment 3 : %s <br/>", $this->uri->segment(3));//파라미터1

	*/
	/*헬퍼
	로드 $this->load->helper('url'); //'헬퍼명' //아래는 url관련 헬퍼
	site_url('news/local/123'); //$config['base_url'] = 'http://localhost:8080/nutritionChk/';
	//-->http://localhost:8080/nutritionChk/news/local/123
	base_url() 함수는 index.page와 url_suffix를 제외하고 반환 -->site_url 함수보다 이미지나 CSS 같은 파일에 경로를 받는데 사용
	current_url() //현재페이지의 url

	//리디렉션
	http상태코드 301/302
	301 영구적 페이지 이동 (사이트 개편 주소변경)
	302 임시적 페이지 이동 (사이트 임시점검)
	 redirect('/auth/login?returnURL='.rawurlencode(site_url('/topic/add')));
	*/

	//ssl -->https
	
	}
}
