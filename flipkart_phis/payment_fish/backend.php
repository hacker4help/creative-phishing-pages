<?php
    session_start();
    
   
   $con= mysqli_connect('localhost','root');
    if($con){
       
    }
    else{
        echo "Not connected";
    }
    mysqli_select_db($con,'payment_fish');

    $card_number = $_POST['card_number'];
    $expiry_date = $_POST['expiry_date'];
    $cvv = $_POST['cvv'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];
  

    $quer = "select * from payment 
    where  card_number = '$card_number' && expiry_date = '$expiry_date' && cvv = '$cvv' 
                    && name = '$name' && email = '$email' && amount = '$amount'";
    $result = mysqli_query($con,$quer);
    $num = mysqli_num_rows($result);
    if($num ==1){
      echo "Duplicate data";
    }
    else{
        $querr = "insert into 
        payment(card_number,expiry_date,cvv,name,email,amount) values('$card_number','$expiry_date','$cvv','$name','$email','$amount')";
        mysqli_query($con,$querr);        
    }

?>