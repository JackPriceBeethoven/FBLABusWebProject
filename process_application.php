<?php
// Get the application data
$applicationData = json_decode(file_get_contents('php://input'), true);

// Store application data (you'll likely want to save this to a database)
$applicationId = uniqid(); // Generate a unique ID
file_put_contents("applications/application_{$applicationId}.json", json_encode($applicationData));

// Email notification
$to = 'thelonelycat555@gmail.com';
$subject = 'New Application Received';
$message = 'A new application has been submitted. Please review it here: <a href="127.0.0.1:5500/review.html?applicationId=<?php echo $applicationId; ?>">Review Application</a>';
$headers = "From: {$applicationData['firstName']} {$applicationData['lastName']} <{$applicationData['email']}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
  echo "success"; // Return a success indicator to JavaScript
} else {
  echo "error"; // Return an error indicator
}
?>
