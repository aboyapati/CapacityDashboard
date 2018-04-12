<?php

header("Access-Control-Allow-Origin: *");
$data = '[{"type":"1","type_id":"11","name":"VRF"},{"type":"2","type_id":"22","name":"BGP"},{"type":"3","type_id":"33","name":"VLAN"},{"type":"4","type_id":"44","name":"HSRP"},{"type":"5","type_id":"55","name":"STATIC ROUTES"}]';
echo $data;
die();
?>