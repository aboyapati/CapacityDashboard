<?php
header("Access-Control-Allow-Origin: *");
$key = $_POST['keyword'];
if($key == ''){
    $data = '[{"id":"1","name":"Customer 1","location":"USA","datacenters":"3"},{"id":"2","name":"Customer 2","location":"USA","datacenters":"2"},{"id":"3","name":"Customer 3","location":"USA","datacenters":"4"},{"id":"4","name":"Customer 4","location":"USA","datacenters":"1"}]';
}else{
    $data = '[{"id":"1","name":"Customer 1","location":"USA","datacenters":"3"},{"id":"2","name":"Customer 2","location":"USA","datacenters":"2"}]';
}
echo $data;
die();
?>