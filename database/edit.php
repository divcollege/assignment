<?php
require_once "connection.php";
$id=$_GET['criteria'];
if(!empty($id)) {
    $query = "SELECT * FROM students WHERE sid={$id}";
    $result = mysqli_query($cc, $query);
    $student = mysqli_fetch_assoc($result);
    $language = explode(',', $student['language']);
}
//    if($result)
//    {
//        $_SESSION['success']="Your data is edited successfully";
//        header("Location:form.php");
//        exit();
//    }else{
//        $_SESSION['error']="There was a problem";
//        header("Location:form.php");
//        exit();
//    }
//}else
//{
//    $_SESSION['error']="No id found";
//    header("Location:form.php");
//    exit();
//}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <h1>Student details </h1>
<form action="update.php" method="post">
    <input type="hidden" name="criteria" value="<?=$student['sid']?>">
    <div class="row">
        <label for="name"><strong>Name</strong></label>
        <input class="form-control" type="text" name="name" value="<?=$student['name']?>">
        <label for="email"><strong>Email</strong></label>
        <input class="form-control" type="email"  name="email" value="<?=$student['email']?>" >

        <label for="address"><strong>Address</strong></label>
        <input class="form-control" type="text" name="address" value="<?=$student['address']?>">
        <label for="gender">Gender:</label><br>
        <label><input type="radio" name="gender" <?=$student['gender']=='female'?'checked':''?> value="male">Male</label>
        <label><input type="radio" name="gender" <?=$student['gender']=='female'?'checked':''?> value="female">Female</label><br>
        <label for="language">Language</label>
        <label><input type="checkbox" name="lang[]" <?=in_array('nepali',$language)?'checked':''?> value="nepali">Nepali</label>
        <label><input type="checkbox" name="lang[]" <?=in_array('nepali',$language)?'checked':''?> value="french">French</label>
        <label><input type="checkbox" name="lang[]" <?=in_array('nepali',$language)?'checked':''?> value="english">English</label>
        <br>
        <button class="btn btn-success">
            Submit
        </button>
</form>
</div>
</body>
</html>
