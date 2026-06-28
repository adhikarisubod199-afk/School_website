<?php

$conn = mysqli_connect("localhost","roots","","roots");

if(!$conn)
{
    die("Connection Failed: ".mysqli_connect_error());
}

$fullname = $_POST['fullname'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$class = $_POST['class'];
$email = $_POST['email'];
$fathername = $_POST['fathername'];
$mothername = $_POST['mothername'];
$reason = $_POST['reason'];

$sql = "INSERT INTO scl_detail
(fullname,address,phone,gender,class,email,fathername,mothername,reason)
VALUES
('$fullname','$address','$phone','$gender','$class','$email','$fathername','$mothername','$reason')";

if(mysqli_query($conn,$sql))
{
    echo "Admission Form Submitted Successfully!";
}
else
{
    echo "Error: ".mysqli_error($conn);
}

mysqli_close($conn);

?>