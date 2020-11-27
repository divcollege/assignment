<?php
require_once "connection.php";
if (!empty($_POST) && $_SERVER['REQUEST_METHOD'] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $gender = $_POST['gender' ?? ''];
    $language = isset($_POST['lang']) ?? implode(',', $_POST['lang']);
    $id = $_POST['criteria'];
    if (empty($name)) {
        $_SESSION['error'] = "Name is required";
        header("Location: edit.php");
        exit();

    }
    $query = "UPDATE students SET name='$name', email='$email', address='$address', gender='$gender', language='$language' WHERE sid={$id}";

}
$result = mysqli_query($cc, $query);
if ($result)
{
    $_SESSION['success']="Students data successfully updated";
    header("Location:form.php");
    exit();
}
