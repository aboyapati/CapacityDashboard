<?php
	header("Access-Control-Allow-Origin: *");
	$type = $_POST['typeId'];
	
	if($type == 'NEXUS') {
		$x = '[{"id":"1","name":"75-K"},{"id":"2","name":"5-1.0"},{"id":"3","name":"5-5.0.0"},{"id":"4","name":"80-K"}]';
	} else {
		$x = '[]';
	}
	echo $x;
	die();
 ?>