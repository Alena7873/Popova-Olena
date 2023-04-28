<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $rating = $_POST['rating'];
    $review = $_POST['review'];

    $data = "$name, $email, $rating звезд, $review\n";
    file_put_contents('отзывы.txt', $data, FILE_APPEND);
  }
?>
