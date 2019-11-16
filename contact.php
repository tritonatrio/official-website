<?php

if (isset($_POST['submit'])) {  
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "TritonaTrio^gmail.com".replace('^','@');
    $headers = "From: ".$mailFrom;
    $txt = "Email from: ".$name."\n\n Tritona website\n\n".$message;

    mail($mailTo, $subject,$txt,$headers) or die("There was an error please try again!"); 
    echo "Thankyou for getting in touch!"
}
