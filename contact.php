<?php

if (isset($_POST['submit'])) {  
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "olli@ozemail.com.au";
    $headers = "From: ".$mailFrom;
    $txt = "Email from ".$name." via Tritona website.\n\n".$message;

    mail($mailTo, $subject,$txt,$headers); 
    header("Location: index.php?mailsend");
}