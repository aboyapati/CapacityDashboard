<?php

header("Access-Control-Allow-Origin: *");

if ($_POST['id']) {
    $id = $_POST['id'];
    if ($id == 1) {
        $data = '[{"id":"1","name":"NEXUS A","type":"NEXUS","version":"75-K","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Good"},{"id":"2","name":"ASA-1","type":"ASA","version":"5-1.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Alert"},{"id":"3","name":"VCENTER-1","type":"VCENTER","version":"5-5.0.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Alert"},{"id":"4","name":"NEXUS B","type":"NEXUS","version":"75-K","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Bad"},{"id":"5","name":"ASA-2","type":"ASA","version":"5-1.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Good"}]';
    } else if ($id == 2) {
        $data = '[]';
    } else if ($id == 3) {
        $data = '[{"id":"1","name":"NEXUS A","type":"NEXUS","version":"75-K","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Good"},{"id":"2","name":"ASA-1","type":"ASA","version":"5-1.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Alert"}]';
    } else if ($id == 4) {
        $data = '[{"id":"4","name":"NEXUS B","type":"NEXUS","version":"75-K","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Bad"},{"id":"5","name":"ASA-2","type":"ASA","version":"5-1.0","ipAddress":"10.201.124.11","componentUser":"admin","password":"admin","status":"Good"}]';
    }
}

echo $data;
die();
?>