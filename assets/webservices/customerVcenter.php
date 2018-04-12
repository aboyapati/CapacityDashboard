<?php
header("Access-Control-Allow-Origin: *");
    $data = '[{"date":"4\/10\/2018","time":"4:40 PM","cpu_percent":"0.5","memory_percent":"2"},{"date":"4\/10\/2018","time":"7:20 PM","cpu_percent":"1","memory_percent":"2.5"},{"date":"4\/10\/2018","time":"10:00 PM","cpu_percent":"1.5","memory_percent":"4"},{"date":"4\/11\/2018","time":"12:40 AM","cpu_percent":"0","memory_percent":"2"},{"date":"4\/11\/2018","time":"3:20 AM","cpu_percent":"4","memory_percent":"1"},{"date":"4\/11\/2018","time":"6:00 AM","cpu_percent":"3.5","memory_percent":"5"},{"date":"4\/11\/2018","time":"8:40 AM","cpu_percent":"7","memory_percent":"1.5"},{"date":"4\/11\/2018","time":"11:20 AM","cpu_percent":"4","memory_percent":"0"},{"date":"4\/11\/2018","time":"2:00 PM","cpu_percent":"6","memory_percent":"5"}]';

echo $data;
die();
?>