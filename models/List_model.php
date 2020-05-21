<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class List_model extends CI_Model {
 
    public function __construct()
    {
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }
   
    public function GetFoodList($fdNm)
    {
        log_message("error","model ##############");
        $result = $this->db->query(
            'SELECT 
                FD_ID,/*음식 ID*/ 
                FD_CD,/*음식 CD*/
                FD_NM,/*음식 이름*/
                FD_AREA,/*음식 지역*/
                FD_KIND,/*음식 종류*/
                FD_PER,/*음식 무게*/
                FD_UNIT,/*음식 단위*/
                FD_CAL,/*음식 열량*/
                FD_CARBO, /*음식 탄수화물*/
                FD_PROTEIN,/*음식 단백질*/
                FD_FAT /*음식 지방*/
            FROM FOOD_LIST WHERE FD_NM LIKE "%'.$fdNm.'%"')->result();
            // FROM FOOD_LIST WHERE FD_NM LIMIT 100')->result()
        log_message('error', $this->db->last_query());
        log_message("error","model End##############");
        $this->db->close();
        return $result;
    }

    public function GetChoiceList($memNm)
    {
        //log_message("error","model ##############");
        $result = $this->db->query(
            'SELECT 
                C_ID,/*음식 ID*/ 
                C_CD,/*음식 CD*/
                C_NM,/*음식 이름*/
                C_PER,/*음식 무게*/
                C_UNIT,/*음식 단위*/
                C_CAL,/*음식 열량*/
                C_CARBO, /*음식 탄수화물*/
                C_PROTEIN,/*음식 단백질*/
                C_FAT /*음식 지방*/
            FROM FOOD_MEMBER AS M
            JOIN FOOD_CHOICE AS C ON M.M_CD=C.M_CD
            WHERE M.M_NM = "'.$memNm.'"')->result();
        log_message('error', $this->db->last_query());
        log_message("error","model End##############");
        $this->db->close();
        return $result;
    }
}
