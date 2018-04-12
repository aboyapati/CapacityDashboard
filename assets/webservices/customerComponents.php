<?php

header("Access-Control-Allow-Origin: *");
$id = $_POST['id'];
if($id == 1) {
	$data = '{"nexus":[{"id":"1","name":"NEXUS 1","version":"75-k","type":"NEXUS"},{"id":"2","name":"NEXUS 2","version":"80-k","type":"NEXUS"},{"id":"3","name":"NEXUS 3","version":"5.0.0","type":"NEXUS"},{"id":"4","name":"NEXUS 4","version":"70-k","type":"NEXUS"},{"id":"5","name":"NEXUS 5","version":"90-k","type":"NEXUS"}],"vcenter":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER"},{"id":"2","name":"VCENTER 2","version":"80-k","type":"VCENTER"},{"id":"3","name":"VCENTER 3","version":"5.0.0","type":"VCENTER"}],"sbc":[{"id":"1","name":"SBC 1","version":"75-k","type":"SBC"},{"id":"2","name":"SBC 2","version":"80-k","type":"SBC"}],"asa":[{"id":"1","name":"ASA 1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"5.0.0","type":"ASA"},{"id":"4","name":"ASA 4","version":"70-k","type":"ASA"}]}';
}
if($id == 2) {
	$data = '{"nexus":[],"vcenter":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER"},{"id":"2","name":"VCENTER 2","version":"80-k","type":"VCENTER"},{"id":"3","name":"VCENTER 3","version":"5.0.0","type":"VCENTER"}],"sbc":[],"asa":[{"id":"1","name":"ASA 1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"5.0.0","type":"ASA"},{"id":"4","name":"ASA 4","version":"70-k","type":"ASA"}]}';
}
if($id == 3) {
	$data = '{"nexus":[],"vcenter":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER"},{"id":"2","name":"VCENTER 2","version":"80-k","type":"VCENTER"},{"id":"3","name":"VCENTER 3","version":"5.0.0","type":"VCENTER"}],"sbc":[{"id":"1","name":"SBC 1","version":"75-k","type":"SBC"},{"id":"2","name":"SBC 2","version":"80-k","type":"SBC"}],"asa":[{"id":"1","name":"ASA 1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"5.0.0","type":"ASA"},{"id":"4","name":"ASA 4","version":"70-k","type":"ASA"}]}';
}
if($id == 4) {
	$data = '{"nexus":[],"vcenter":[{"id":"1","name":"VCENTER 1","version":"75-k","type":"VCENTER"},{"id":"2","name":"VCENTER 2","version":"80-k","type":"VCENTER"},{"id":"3","name":"VCENTER 3","version":"5.0.0","type":"VCENTER"}],"sbc":[{"id":"1","name":"SBC 1","version":"75-k","type":"SBC"},{"id":"2","name":"SBC 2","version":"80-k","type":"SBC"}],"asa":[]}';
}
if($id == 5) {
	$data = '{"nexus":[{"id":"1","name":"NEXUS 1","version":"75-k","type":"NEXUS"},{"id":"2","name":"NEXUS 2","version":"80-k","type":"NEXUS"},{"id":"3","name":"NEXUS 3","version":"5.0.0","type":"NEXUS"},{"id":"4","name":"NEXUS 4","version":"70-k","type":"NEXUS"}],"vcenter":[],"sbc":[{"id":"1","name":"SBC 1","version":"75-k","type":"SBC"},{"id":"2","name":"SBC 2","version":"80-k","type":"SBC"}],"asa":[{"id":"1","name":"ASA 1","version":"75-k","type":"ASA"},{"id":"2","name":"ASA 2","version":"80-k","type":"ASA"},{"id":"3","name":"ASA 3","version":"5.0.0","type":"ASA"},{"id":"4","name":"ASA 4","version":"70-k","type":"ASA"}]}';
}
echo $data;
die();
?>