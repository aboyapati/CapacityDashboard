<?php
header("Access-Control-Allow-Origin: *"); 
$data = '[{"id":"1","name":"DC 4","alert":"CPU utilization high on host-01","time":"12:12 PM","status":"Alert"},{"id":"1","name":"DC 2","alert":"Datastore threshold crossed SAN-01","time":"2:17 AM","status":"Bad"},{"id":"1","name":"DC 2","alert":"CPU count on the VMs exceed the total cores on host-02","time":"12:12 PM","status":"Bad"},{"id":"1","name":"DC 3","alert":"CPU utilization high on host-01","time":"2:17 PM","status":"Alert"},{"id":"1","name":"DC 1","alert":"Datastore threshold crossed SAN-01","time":"12:12 PM","status":"Bad"}]';
echo $data;
die();
?>