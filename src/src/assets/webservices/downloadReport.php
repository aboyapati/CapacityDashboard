<?php
header("Access-Control-Allow-Origin: *");
$response = '[{"Name":"chassis1blade7.tekvizion.com","Datacenter":"DataCenter 1","Cluster":"Cluster3","ConnectionState":"Connected","Status":"red","Power":"PoweredOn","CPUTotalMHz":"67040","CPUUsageMHz":"3247","CPUFreeMHz":"63793","MemoryTotalMB":"524016.87","MemoryUsageMB":"23331","MemoryFreeMB":"500685.87","Cores":"32","NICcount":"8","Uptime_Days":"20.53","VMs":"10"},{"Name":"chassis1blade6.tekvizion.com","Datacenter":"DataCenter 2","Cluster":"Cluster4","ConnectionState":"Connected","Status":"green","Power":"PoweredOn","CPUTotalMHz":"54040","CPUUsageMHz":"4047","CPUFreeMHz":"70793","MemoryTotalMB":"304016.87","MemoryUsageMB":"35331","MemoryFreeMB":"380685.87","Cores":"25","NICcount":"19","Uptime_Days":"11.53","VMs":"22"}]';
echo $response;
die();
?>