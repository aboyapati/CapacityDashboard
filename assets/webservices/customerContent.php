<?php
header("Access-Control-Allow-Origin: *");
$sub = $_POST['subComponentName'];

if($sub == 'VRF') {
	$data = '["VRF contents Line 1 Data","VRF contents Line 2 Data","VRF contents Line 3 Data","VRF contents Line 4 Data"]';
} else {
	$data = '["VRF contents Line 5 Data","VRF contents Line 6 Data","VRF contents Line 7 Data","VRF contents Line 8 Data"]';
}

echo $data;
die();
?>