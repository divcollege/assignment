<?php
session_start();
$cc=mysqli_connect('localhost','root','','php');
if(!$cc){
    die("database not connected" . mysqli_error($cc));
}



