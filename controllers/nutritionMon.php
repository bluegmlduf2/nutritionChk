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
		$this->load->view('page/nm_form_v', $data);
		$this->load->view('layout/footer', $default_data);
		//$string = $this->load->view('welcome_message', '', true);//해당 화면을 데이터로 저장
	}

	public function list() {
		$default_data=array('title'=> 'member page title',
			'content'=> 'member page test'
		);

		$this->load->view('layout/header', $default_data);
		$this->load->view('page/nm_list_v', $default_data);
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
	}
}
