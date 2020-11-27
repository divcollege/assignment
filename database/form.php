<?php
require_once "connection.php";
$query="SELECT * FROM students";
$result=mysqli_query($cc,$query);



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

        <div class="col-sm-4">
            <form action="insert.php" method="post">
            <h1>Student details </h1>
            <?php if(isset($_SESSION['error'])) :?>
            <div class="alert alert-danger">
                <?=$_SESSION['error'];
                unset($_SESSION['error']);?>
            </div>
            <?php endif;?>
            <?php if(isset($_SESSION['success'])) :?>
                <div class="alert alert-success">
                    <?=$_SESSION['success'];
                    unset($_SESSION['success']);?>
                </div>
            <?php endif;?>
            <div class="row">
                <label for="name"><strong>Name</strong></label>
                <input class="form-control" type="text" placeholder="Enter your name" name="name">
                <label for="email"><strong>Email</strong></label>
                <input class="form-control" type="email" placeholder="Enter your email" name="email">

                <label for="address"><strong>Address</strong></label>
                <input class="form-control" type="text" placeholder="Enter your address" name="address">
                <label for="gender">Gender:</label><br>
                <label><input type="radio" name="gender" value="male">Male</label>
                <label><input type="radio" name="gender" value="female">Female</label><br>
                <label for="language">Language</label>
                <label><input type="checkbox" name="lang[]" value="nepali">Nepali</label>
                <label><input type="checkbox" name="lang[]" value="french">French</label>
                <label><input type="checkbox" name="lang[]" value="english">English</label>
                <br>
                <button class="btn btn-success">
                    Submit
                </button>
            </form>
            </div>

        </div>

    <div class="col-sm-8">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($result as $key => $student):?>
            <tr>

                    <td><?=++$key;?></td>
                    <td><?=$student['name']?></td>
                    <td><?=$student['email']?></td>
                    <td><?=$student['address']?></td>
                    <td><?=$student['gender']?></td>
                    <td><?=$student['language']?></td>
                    <td>
                        <a href="edit.php?criteria=<?=$student['sid']?>">Edit</a>
                        <a href="delete.php?criteria=<?=$student['sid']?>">Delete</a>
                    </td>

            </tr>
            <?php endforeach;?>
            </tbody>
        </table>
    </div>
</div>
<?=$_SESSION['print']?>




</body>
</html>
