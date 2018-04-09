<?php
header("Access-Control-Allow-Origin: *"); 
$data = '{"country":[{"value":"US","name":"United States"},{"value":"CA","name":"Canada"},{"value":"IN","name":"India"},{"value":"AU","name":"Australia"}],"timezone":[{"value":"I","name":"IST"},{"value":"A","name":"ATC"},{"value":"C","name":"CNT"},{"value":"I","name":"IST"}]}';
echo $data;
die();
?>