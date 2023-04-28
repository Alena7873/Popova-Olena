<?php
// Получаем значения полей из формы и обрабатываем их
$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
$mas = htmlspecialchars($_POST['mas'], ENT_QUOTES);

// Устанавливаем адрес, на который будут приходить письма
$to = 'masah7727427@gmail.com';

// Устанавливаем тему письма
$subject = 'Запрос на бронирование массажа';

// Формируем тело письма
$message = "Имя: $name \nТелефон: $phone \nМассаж: $mas";

// Устанавливаем заголовки для письма
$headers = "From: <masah7727427@gmail.com>\r\nReply-To: <masah7727427@gmail.com>\r\nX-Mailer: PHP/" . phpversion();

// Отправляем письмо
if (mail($to, $subject, $message, $headers)) {
    // Если письмо успешно отправлено, выводим сообщение об успехе
    echo 'Спасибо за ваш запрос, мы свяжемся с вами в ближайшее время!';
} else {
    // Если письмо не удалось отправить, выводим сообщение об ошибке
    echo 'Произошла ошибка при отправке письма, попробуйте еще раз позже.';
}
?>