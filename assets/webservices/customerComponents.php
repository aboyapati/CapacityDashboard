<?php

header("Access-Control-Allow-Origin: *");
$data = '{"nexus":[{"id":"1","name":"NEXUS 1","version":"75-k"},{"id":"2","name":"NEXUS 2","version":"80-k"},{"id":"3","name":"NEXUS 3","version":"5.0.0"},{"id":"4","name":"NEXUS 4","version":"70-k"}],"vcenter":[{"id":"1","name":"VCENTER 1","version":"75-k"},{"id":"2","name":"VCENTER 2","version":"80-k"},{"id":"3","name":"VCENTER 3","version":"5.0.0"}],"sbc":[{"id":"1","name":"SBC 1","version":"75-k"},{"id":"2","name":"SBC 2","version":"80-k"}],"asa":[{"id":"1","name":"ASA 1","version":"75-k"},{"id":"2","name":"ASA 2","version":"80-k"},{"id":"3","name":"ASA 3","version":"5.0.0"},{"id":"4","name":"ASA 4","version":"70-k"}]}';
echo $data;
die();
?>