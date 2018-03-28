<?php
header("Access-Control-Allow-Origin: *");
$response = '{"id":"1","name":"NEXUS B 1","subcomponents":[{"name":"VRF","type":"NEXUS","type_id":"1","available":"400","consumed":"600","total":"1000","status":"Good"},{"name":"BGP PEERS","type":"ASA","type_id":"2","available":"200","consumed":"800","total":"1000","status":"Alert"},{"name":"VLAN","type":"VCENTER","type_id":"3","available":"200","consumed":"800","total":"1000","status":"Alert"},{"name":"HSRP","type":"NEXUS","type_id":"4","available":"100","consumed":"900","total":"1000","status":"Bad"},{"name":"STATIC ROUTES","type":"ASA","type_id":"5","available":"400","consumed":"600","total":"1000","status":"Good"}]}';
echo $response;
die();
?>