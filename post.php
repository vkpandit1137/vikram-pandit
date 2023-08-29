<?php
if(isset($_POST['data']))
{
    parse_str($_POST['data'], $searcharray);
    $data = array(
        "username"   => $searcharray['username'],
        "email" => $searcharray['email'],
        "subject" => $searcharray['subject'],
        "message" => $searcharray['message']


    );
    $response=array(
        "success" => "Thank You, We will get back to you soon!!",
        "error" => "Something Went Wrong"
    );
    // echo json_encode($data);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
                       //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'vkpandit1909@gmail.com';                     //SMTP username
    $mail->Password   = 'yeclotwowlpajbzz';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('techluminix@gmail.com', 'TechLuminix Admin');
    $mail->addAddress('vkpandit1909@gmail.com', 'Vikram Pandit');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
   

    //Attachments
      //Optional name
    $message= json_encode($data);
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New form submission';
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo  json_encode($response['success']);
} catch (Exception $e) {
    echo  json_encode($response['error']);
}

?>