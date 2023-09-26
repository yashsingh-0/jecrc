<?php
 $regnum = $_POST['regnum'];
 $pass = $_POST['passc'];
    if($regnum == "22BCON320" && $pass == "2004-04-18") {
        header("Location: student_manager.php");
    }
    else {
        header('location: index.php?error=UserNotFound');
    }
?>