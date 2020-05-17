<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Member_model extends CI_Model {
 
    public function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    // ...... GetMembers method
    public function GetMembers()
    {
        $result = $this->db->query("SELECT M_CD, M_NM FROM FOOD_MEMBER")->result();
        $this->db->close();

        return $result;
    }
}
