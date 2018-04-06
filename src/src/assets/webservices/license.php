<?php
header("Access-Control-Allow-Origin: *"); 
$data = '[{"id":"1","type":"HUCM_TelePresenceRoom","consumed":"0"},{"id":"2","type":"HUCM_Essential","consumed":"1"},{"id":"3","type":"HUCM_Foundation","consumed":"5009"},{"id":"4","type":"HUCM_Standard","consumed":"1"},{"id":"5","type":"HUCM_Basic","consumed":"0"}]';
echo $data;
die();
?>