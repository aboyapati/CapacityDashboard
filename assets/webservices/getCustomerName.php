<?php

header("Access-Control-Allow-Origin: *");

if ($_POST['customerId']) {
    $customerId = $_POST['customerId'];
    if ($customerId == 1) {
        $data['id'] = '1';
		$data['customerName'] = 'Customer 1';
    } else if ($customerId == 2) {
        $data['id'] = '2';
		$data['customerName'] = 'Customer 2';
    } else if ($customerId == 3) {
        $data['id'] = '3';
		$data['customerName'] = 'Customer 3';
    } else if ($customerId == 4) {
        $data['id'] = '4';
		$data['customerName'] = 'Customer 4';
    } else {
        $data['id'] = '5';
		$data['customerName'] = 'Customer 5';
    } 
}

echo json_encode($data);
die();
?>