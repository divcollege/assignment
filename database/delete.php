<?php
require_once "connection.php";
$id=$_GET['criteria'];
if(!empty($id))
{
    $query="DELETE FROM students WHERE sid={$id}";
    $result=mysqli_query($cc,$query);
    if($result)
    {
        $_SESSION['success']="Your data is deleted successfully";
        header("Location:form.php");
        exit();
    }else{
        $_SESSION['error']="There was a problem";
        header("Location:form.php");
        exit();
    }
}else
{
    $_SESSION['error']="No id found";
    header("Location:form.php");
    exit();
}