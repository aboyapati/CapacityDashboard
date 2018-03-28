<?php
header("Access-Control-Allow-Origin: *");
$response = '{"name":"BGP PEERS","report":[{"month":"January","value":"900"},{"month":"February","value":"700"},{"month":"March","value":"600"},{"month":"April","value":"850"},{"month":"May","value":"800"},{"month":"June","value":"500"},{"month":"July","value":"200"},{"month":"August","value":"650"},{"month":"September","value":"750"},{"month":"October","value":"600"},{"month":"November","value":"200"},{"month":"December","value":"500"}]}';
echo $response;
die();
?>