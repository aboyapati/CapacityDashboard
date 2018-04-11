<?php
header("Access-Control-Allow-Origin: *"); 
$id = $_POST['id'];
if($id == 2) {
    $data = '[{"type":"HUCM_TelePresenceRoom","prod_type":"Type 1","consumed":"0"},{"type":"HUCM_Essential","prod_type":"Type 2","consumed":"1"},{"type":"HUCM_Foundation","prod_type":"Type 3","consumed":"5009"},{"type":"HUCM_Standard","prod_type":"Type 4","consumed":"1"},{"type":"HUCM_Basic","prod_type":"Type 5","consumed":"0"}]';
}
else if ($id == 3) {
    $data = '[]';
}
else{
    $data = '[{"type":"HUCM_TelePresenceRoom","prod_type":"Type 1","consumed":"0"},{"type":"HUCM_Essential","prod_type":"Type 2","consumed":"1"}]';
}
echo $data;
die();
?>