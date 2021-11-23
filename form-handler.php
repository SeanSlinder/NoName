<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'info@noname.com';

$email_submission = 'New Form Submission';

$email_body = "Username: $name \n".
               "Username: $visitor_email \n".
                "Username: $message .\n";

$to = 'seanslinder@gmail.com';

$headers = 'From: $email_from \r\n';

$headers .= 'Reply-To: $visitor_email \r\n';

mail($to, $email_subject, $email_body, $headers);

header('Location: contact.html');

?>