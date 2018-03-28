<?php
header("Access-Control-Allow-Origin: *");
$response = '{"id":"1","name":"Data Center 1","components":[{"id":"1","name":"NEXUS A","type":"NEXUS","version":"NEXUS","subVersion":"75-K","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin"},{"id":"2","name":"ASA-1","type":"ASA","version":"ASA","subVersion":"5-1.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin"},{"id":"3","name":"VCENTER-1","type":"VCENTER","version":"VCENTER","subVersion":"5-5.0.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin"},{"id":"4","name":"NEXUS B","type":"NEXUS","version":"NEXUS","subVersion":"75-K","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin"},{"id":"5","name":"ASA-2","type":"ASA","version":"ASA","subVersion":"5-1.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin"}]}';
echo $response;
die();
?>