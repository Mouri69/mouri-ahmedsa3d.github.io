<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize the form data to prevent potential security issues
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // Format the email message
    $email_content = "Name: $name\nEmail: $email\nMessage: $message";

    // Set the recipient email address
    $to = "trident_mazen@outlook.com"; // Replace with your email address

    // Set the email subject
    $email_subject = "New Contact Form Submission";

    // Set additional headers, including MIME version and content type
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Mail sending parameters
    $additional_parameters = "-f" . $email;

    // Send the email
    $mail_sent = mail($to, $email_subject, $email_content, $headers, $additional_parameters);

    // Check if the email was sent successfully
    if ($mail_sent) {
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
}
?>
