<?php
require_once "connection.php";
if(!empty($_POST) && $_SERVER['REQUEST_METHOD']=="POST") {
    $name= $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $gender = $_POST['gender'??''];
    $language = isset($_POST['lang']) ?? implode(',',$_POST['lang']);
    if(empty($name)){
        $_SESSION['error']="Name is required";
        header("Location: form.php");
        exit();

    }
    $query="INSERT INTO students(name, email, address, gender, language) 
            VALUES ('$name','$email','$address','$gender','$language')";
}
$result=mysqli_query($cc, $query);
if($result){
    $_SESSION['print']=$query;
    $_SESSION['success']="Success";
    header("Location: form.php");
    exit();
}else
{
    $_SESSION['error']="Forbidden Access";
    header("Location: form.php");
    exit();
}
