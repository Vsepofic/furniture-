<?php

/* https://api.telegram.org/bot2072772528:AAG-IjiDL9ya9qO4EJphdX8aGN4Y4e03DrE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['userName2'];
$phone = $_POST['userPhone2'];
// $email = $_POST['user_email'];
// $sex = $_POST['user_sex'];
// $login = $_POST['user_login'];
// $pass = $_POST['user_pass'];
// токен нашего бота из botFather
$token = "2072772528:AAG-IjiDL9ya9qO4EJphdX8aGN4Y4e03DrE";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-779708651";
$arr = array(
  'Цель: ' => 'Заказ специалиста',
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
  // 'Email: ' => $email,
  // 'Пол: ' => $sex,
  // 'Логин: ' => $login,
  // 'Пароль: ' => $pass
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
