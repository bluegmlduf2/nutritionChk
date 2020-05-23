<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Member_model extends CI_Model {
 
    public function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    /***
    * 회원아이디 중복체크
    */
    public function ChkMembers($memObj)
    {
        $result = $this->db->query("
        SELECT COUNT(M_NM) AS CNT
        FROM FOOD_MEMBER
        WHERE M_NM='".$memObj['vName']."';")->result();
    

        $this->db->close();
        return $result;
    }

    /***
    * 회원정보출력
    */
    public function GetMembers($memObj)
    {
        $result=null;

        if(!empty($memObj['vSession'])){
            $result = $this->db->query("
            SELECT M_CD, M_SSESION,M_NM,M_HEIGHT,M_WEIGHT,M_AGE,M_SEX,M_PURPOSE,M_LIFESTYLE
            FROM FOOD_MEMBER
            WHERE M_SSESION='".$memObj['vSession']."';")->result();
        }

        $this->db->close();
        return $result;
    }

    /***
    * 회원정보입력
    */
    public function SetMembers($memObj)
    {
        try{
            $session_id=null;
            log_message("error","***********아규먼트테스트**********");
            log_message("error",$memObj['vName']);

            $result = $this->db->query(
            "INSERT INTO FOOD_MEMBER(M_SSESION,M_NM,M_HEIGHT,M_WEIGHT,M_AGE,M_SEX,M_PURPOSE) 
            VALUES('".session_id()."','".$memObj['vName']."',".$memObj['vHeight'].",".$memObj['vWeight'].",".$memObj['mArg'].",".$memObj['vSex'].",'".$memObj['vPurpose']."')");
            
            if($this->db->insert_id()!=0){
                $session_id=session_id();
            }
           
            $this->db->close();

            log_message("error",$session_id);
            session_destroy();
            return $session_id;

            //throw new Exception();
        }catch (Exception $e) {
            log_message("error","오류발생..");
            echo $e->getMessage();
        }
    }


     /***
    * 회원정보수정
    */
    public function UpdateMembers($memObj)
    {
        try{
            $session_id=null;
            log_message("error","***********아규먼트테스트**********");
            log_message("error",$memObj['vName']);

            $result = $this->db->query(
            "UPDATE FOOD_MEMBER SET M_HEIGHT='".$memObj['vHeight']."',M_WEIGHT='".$memObj['vWeight']."',M_AGE='".$memObj['mArg']."',M_SEX='".$memObj['vSex']."',M_PURPOSE='".$memObj['vPurpose']."'
            WHERE M_SSESION='".$memObj['vSession']."'");

        }catch (Exception $e) {
            log_message("error","오류발생..");
            echo $e->getMessage();
        }
    }
}
