<?php
header("Access-Control-Allow-Origin: *");
    $data = '[{"id":"1","name":"vCenter Cluster Report","componentId":"11"},{"id":"2","name":"Nexus A Detailed Report","componentId":"22"},{"id":"3","name":"vCenter Host Report","componentId":"33"},{"id":"4","name":"vCenter Memory Report","componentId":"44"}]';

echo $data;
die();
?>