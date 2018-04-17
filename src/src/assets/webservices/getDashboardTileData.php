<?php
header("Access-Control-Allow-Origin: *"); 
$data['reportCount'] = 8;
$data['usersCount'] = 6381;
$data['customersCount'] = 132;
echo json_encode($data);
die();
?>