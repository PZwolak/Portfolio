<?php
$to      = 'p.zwolak.93@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';
mail($to, $subject, $message, $headers);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title>Wiadomość wysłana</title>
</head>

<body>
  <header>
    <div class="hi">
      <p>wiadomość wysłana!</p>
      <a href="http://www.patrykzwolak.com.pl"><button>wróć do strony głównej</button></a>
    </div>
    <img src="img/about-me3.png" alt="Picture Patryk Zwolak">
  </header>
</body>

</html>
