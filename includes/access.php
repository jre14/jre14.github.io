<?php

if($_GET['type'] == 'login'){
    $data = file_get_contents('data.json');
    $dataSession = json_decode($data, true);

    $dataUser = $dataSession['dataUser']['user'];
    $dataPass = $dataSession['dataUser']['pass'];

    $user = $_POST["user"];
    $pass = $_POST["pass"];

    if($dataUser == $user && $dataPass == $pass){
        session_start();
        $dataNameUser = $dataSession['dataUser']['nameUser'];
        $_SESSION["userLogin"] = $dataNameUser;
        header("Location:dashboard.php");
    } else {
    header("Location:/login.php?error=notlogin");
    }
}

if($_GET['type'] == 'logout'){
    session_start();
    session_destroy();
    header("Location:/login.php");
}

//echo $dataUser;
//echo $dataPass;




//echo $user;
//echo $pass; 
?>