<?php
	header("Access-Control-Allow-Origin: *");
	$x = '[{"id":"1","name":"Data Center 1","status":"Good","components":[{"id":"1","name":"NEXUS A"},{"id":"2","name":"ASA-1"},{"id":"3","name":"VCENTER-1"},{"id":"4","name":"NEXUS B"},{"id":"5","name":"ASA-2"}]},{"id":"2","name":"Data Center 2","status":"Bad","components":[{"id":"6","name":"ASA-1"},{"id":"7","name":"VCENTER-1"}]},{"id":"3","name":"Data Center 3","status":"Alert","components":[{"id":"8","name":"NEXUS B"},{"id":"9","name":"ASA-1"}]},{"id":"4","name":"Data Center 4","status":"Alert","components":[{"id":"10","name":"ASA-2"},{"id":"11","name":"NEXUS B"}]}]';
	echo $x;
	die();
 ?>