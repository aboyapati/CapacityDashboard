<?php

header("Access-Control-Allow-Origin: *");
$id = $_POST['id'];
if($id == 1) {
	$data = '[{"type":"ASA","components":[{"id":"1","name":"ASA1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"80-k","type":"ASA"}]},
{"type":"VCENTER","components":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER "}]}]';
}
if($id == 2) {
	$data = '[{"type":"NEXUS","components":[{"id":"1","name":"NEXUS 1","version":"75-k","type":"NEXUS"},{"id":"2","name":"NEXUS 2","version":"80-k","type":"NEXUS"}]},
{"type":"VCENTER","components":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER "}]}]';
}
if($id == 3) {
	$data = '[{"type":"NEXUS","components":[{"id":"1","name":"NEXUS 1","version":"75-k","type":"NEXUS"},{"id":"2","name":"NEXUS 2","version":"80-k","type":"NEXUS"}]},
{"type":"ASA","components":[{"id":"1","name":"ASA1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"80-k","type":"ASA"}]},
{"type":"VCENTER","components":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER "}]}]';
}
if($id == 4) {
	$data = '[{"type":"NEXUS","components":[{"id":"1","name":"NEXUS 1","version":"75-k","type":"NEXUS"},{"id":"2","name":"NEXUS 2","version":"80-k","type":"NEXUS"}]},
{"type":"ASA","components":[{"id":"1","name":"ASA1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"80-k","type":"ASA"}]}]';
}
if($id == 5) {
	$data = '[{"type":"NEXUS","components":[{"id":"1","name":"NEXUS 1","version":"75-k","type":"NEXUS"},{"id":"2","name":"NEXUS 2","version":"80-k","type":"NEXUS"}]},
{"type":"ASA","components":[{"id":"1","name":"ASA1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"80-k","type":"ASA"}]},
{"type":"VCENTER","components":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER "}]}]';
}
echo $data;
die();
?>