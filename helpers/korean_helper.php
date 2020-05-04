<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
if ( ! function_exists('kdate')){ //전역메서드이기때문에 중복을 막기 위해 사용
    function kdate($stamp){
        return date('o년 n월 j일, G시 i분 s초', $stamp);
    }
}