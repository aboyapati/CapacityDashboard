<?php
	header("Access-Control-Allow-Origin: *");
	$x = '[{"id":"1","country":"United States","latitude":"31.9686","longitude":"-99.9018","state":"Texas","city":"Plano","name":"Data Center 1","status":"Good"},{"id":"2","country":"Australia","latitude":"-33.870453","longitude":"151.208755","state":"100 Main Street","city":"Sidney","name":"Data Center 2","status":"Bad"},{"id":"3","country":"Canada","latitude":"43.6532","longitude":"-79.3832","state":"Ontario","city":"Toronto","name":"Data Center 3","status":"Alert"},{"id":"4","country":"India","latitude":"18.1124","longitude":"79.0193","state":"Telangana","city":"Hyderabad","name":"Data Center 4","status":"Alert"}]';
	echo $x;
	die();
 ?>