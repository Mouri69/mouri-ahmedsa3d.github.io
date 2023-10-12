<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $content = $_POST["content"];

    // Format the email message
    $message = "Name: $name\nEmail: $email\nSubject: $subject\nContent: $content";

    // Set the recipient email address
    $to = "trident_mazen@outlook.com"; // Replace with your email address

    // Set the email subject
    $email_subject = "New Contact Form Submission";

    // Set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    $mail_sent = mail($to, $email_subject, $message, $headers);

    // Check if the email was sent successfully
    if ($mail_sent) {
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
}
?>
