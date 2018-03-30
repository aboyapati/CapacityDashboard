<?php

header("Access-Control-Allow-Origin: *");

if ($_POST['id']) {
    $id = $_POST['id'];
    if ($id == 1) {
        $data = '[{"id":"1","name":"NEXUS A","type":"","version":"NEXUS","subVersion":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11"},{"id":"2","name":"ASA-1","type":"","version":"ASA","subVersion":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14"},{"id":"3","name":"VCENTER-1","type":"","version":"VCENTER","subVersion":"5-5.0.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.100"},{"id":"4","name":"NEXUS B","type":"","version":"NEXUS","subVersion":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11"},{"id":"5","name":"ASA-2","type":"","version":"","subVersion":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14"}]';
    } else if ($id == 2) {
        $data = '[{"id":"6","name":"ASA-1","type":"","version":"ASA","subVersion":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14"},{"id":"7","name":"VCENTER-1","type":"","version":"VCENTER","subVersion":"5-5.0.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.100"}]';
    } else if ($id == 3) {
        $data = '[{"id":"8","name":"NEXUS B","type":"","version":"75-K","subVersion":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11"},{"id":"9","name":"ASA-1","type":"","version":"ASA","subVersion":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14"}]';
    } else if ($id == 4) {
        $data = '[{"id":"10","name":"ASA-2","type":"","version":"ASA","subVersion":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14"},{"id":"11","name":"NEXUS B","type":"","version":"NEXUS","subVersion":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11"}]';
    }
}

echo $data;
die();
?>