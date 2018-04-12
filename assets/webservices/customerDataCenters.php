<?php

header("Access-Control-Allow-Origin: *");
$data = '[{"id":"1","name":"Data Center 1","country":"United States","state":"Texas","city":"Plano","timezone":"IST"},{"id":"2","name":"Data Center 2","country":"Australia","state":"Victoria","city":"Melbourne","timezone":"ATC"},{"id":"3","name":"Data Center 3","country":"Canada","state":"Ontario","city":"Toronto","timezone":"CNT"},{"id":"4","name":"Data Center 4","country":"India","state":"Telangana","city":"Hyderabad","timezone":"IST"},{"id":"5","name":"Data Center 5","country":"India","state":"Telangana","city":"Hyderabad","timezone":"IST"}]';
echo $data;
die();
?>