<?php

header('Access-Control-Allow-Origin: *');

if($_POST['username'] == 'admin' && $_POST['password'] == 'admin') {
	$value = '{"id":"568","username":"Ameeta tekVizion","status":"1"}';
} else {
	$value = '{"id":"1","username":"mathew","status":"0"}';
}

echo $value;
die();
 ?>