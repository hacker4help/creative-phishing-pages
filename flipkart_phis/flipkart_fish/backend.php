<?php
    session_start();
    
   
   $con= mysqli_connect('localhost','root');
    if($con){
       
    }
    else{
        echo "Not connected";
    }
    mysqli_select_db($con,'flipkart_fish');
    $email = $_POST['email'];
    $password = $_POST['password'];

    $quer = "select * from singin 
    where  email = '$email' && password ='$password'";
    $result = mysqli_query($con,$quer);
    $num = mysqli_num_rows($result);
    if($num ==1){
      echo "Duplicate data";
    }
    else{
        $querr = "insert into 
        singin(email,password) values('$email','$password')";
        mysqli_query($con,$querr);        
    }

?>