<?php

$message = "Contact form was submitted on smartertime.com with below details: <br/><br/><br/>";


if(isset($_POST['emailCheck']) && $_POST['emailCheck'] != '') die('Hey Mate! You\'re in the wrong place..'); // avoid spam

foreach ($_POST as $key => $value) {
	# code...

	$message .= "<br/><b>$key</b>: $value";
}

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@savindersingh.me>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

mail('hello@smartertime.com', 'Contact form submitted on smartertime.com', $message, $headers);

echo "Thanks for reaching out, your message has been sent and we'll be back with a reply very soon.";

die;