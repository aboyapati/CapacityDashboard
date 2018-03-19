<?php
	header("Access-Control-Allow-Origin: *");
	$x = '[{"country":"United States","latitude":"31.9686","longitude":"99.9018","state":"Texas","city":"Plano","name":"DC 1","status":"Good"},{"country":"Australia","latitude":"-33.870453","longitude":"151.208755","state":"100 Main Street","city":"Sidney","name":"DC 2","status":"Bad"},{"country":"Canada","latitude":"51.2538","longitude":"85.3232","state":"Ontario","city":"Toronto","name":"DC 3","status":"Alert"},{"country":"India","latitude":"18.1124","longitude":"79.0193","state":"Telangana","city":"Hyderabad","name":"DC 4","status":"Alert"}]';
	echo $x;
	die();
 ?>