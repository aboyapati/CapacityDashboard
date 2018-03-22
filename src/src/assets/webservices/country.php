<?php
header("Access-Control-Allow-Origin: *"); 
$data = '{"country":[{"value":"US","name":"United States"},{"value":"CA","name":"Canada"},{"value":"IN","name":"India"},{"value":"AU","name":"Australia"}],"timezone":[{"value":"IST","name":"IST"},{"value":"ATC","name":"ATC"},{"value":"CNT","name":"CNT"},{"value":"IST","name":"IST"}]}';
echo $data;
die();
?>