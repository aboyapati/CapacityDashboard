<?php

header("Access-Control-Allow-Origin: *");

$data = '[{"date":"2018-10-10 00:50AM","memory_percent":"2","cpu_percent":"0.5"},{"date":"2018-10-10 02:00AM","memory_percent":"2","cpu_percent":"1.5"},{"date":"2018-10-10 04:30AM","memory_percent":"3.2","cpu_percent":"3.7"},{"date":"2018-10-10 08:15AM","memory_percent":"5.3","cpu_percent":"9.5"},{"date":"2018-10-10 09:25AM","memory_percent":"12","cpu_percent":"25.56"},{"date":"2018-10-10 10:05AM","memory_percent":"10.2","cpu_percent":"15.3"},{"date":"2018-10-10 10:30AM","memory_percent":"35.1","cpu_percent":"6.2"},{"date":"2018-10-10 12:00PM","memory_percent":"48.1","cpu_percent":"42.1"},{"date":"2018-10-10 12:20PM","memory_percent":"48.1","cpu_percent":"32.2"},{"date":"2018-10-10 02:40PM","memory_percent":"30.25","cpu_percent":"24.35"},{"date":"2018-10-10 03:55PM","memory_percent":"35.12","cpu_percent":"14.89"},{"date":"2018-10-10 06:42PM","memory_percent":"30.2","cpu_percent":"10.67"},{"date":"2018-10-10 07:35PM","memory_percent":"19.5","cpu_percent":"5.5"}]';

echo $data;
die();

?>