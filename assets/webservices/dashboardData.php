<?php
	header("Access-Control-Allow-Origin: *");
	$x = '[{"country":"United States","country_code":"US","state":"Texas","city":"Plano","name":"DC 1","total_calls":"14761","concurrent_calls":"1031","status":"Good"},{"country":"Australia","country_code":"AU","state":"100 Main Street","city":"Sidney","name":"DC 2","total_calls":"14761","concurrent_calls":"1031","status":"Bad"},{"country":"Canada","country_code":"CA","state":"Ontario","city":"Toronto","name":"DC 3","total_calls":"14761","concurrent_calls":"1031","status":"Alert"},{"country":"India","country_code":"IN","state":"Telangana","city":"Hyderabad","name":"DC 4","total_calls":"14762","concurrent_calls":"1031","status":"Alert"}]';
	echo $x;
	die();
 ?>