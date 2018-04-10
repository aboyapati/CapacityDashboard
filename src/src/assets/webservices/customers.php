<?php
header("Access-Control-Allow-Origin: *");
$key = $_POST['keyword'];
if($key == ''){
    $data = '[{"id":"1","name":"Customer 1","users":"5","datacenters":"3"},{"id":"2","name":"Customer 2","users":"3","datacenters":"2"},{"id":"3","name":"Customer 3","users":"4","datacenters":"4"},{"id":"4","name":"Customer 4","users":"2","datacenters":"1"}]';
}else{
    $data = '[{"id":"1","name":"Customer 1","users":"5","datacenters":"3"},{"id":"2","name":"Customer 2","users":"3","datacenters":"2"}]';
}
echo $data;
die();
?>