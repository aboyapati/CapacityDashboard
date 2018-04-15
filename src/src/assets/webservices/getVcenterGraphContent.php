<?php

header("Access-Control-Allow-Origin: *");

$data = '[{"date":"2018-10-10 00:50PM","cpu_percent":7.0,"memory_percent":3.9},{"date":"2018-10-10 1:50PM","cpu_percent":90,"memory_percent":9},{"date":"2018-10-10 2:50PM","cpu_percent":9.5,"memory_percent":5.7},{"date":"2018-10-10 3:50PM","cpu_percent":85,"memory_percent":8},{"date":"2018-10-10 4:50PM","cpu_percent":99,"memory_percent":11.9},{"date":"2018-10-10 5:50PM","cpu_percent":3.5,"memory_percent":15.2},{"date":"2018-10-10 6:50PM","cpu_percent":21.5,"memory_percent":17.0},{"date":"2018-10-10 7:50PM","cpu_percent":25.2,"memory_percent":16.6},{"date":"2018-10-10 8:50PM","cpu_percent":26.5,"memory_percent":14.2},{"date":"2018-10-10 9:50PM","cpu_percent":23.3,"memory_percent":10.3},{"date":"2018-10-10 10:50PM","cpu_percent":18.3,"memory_percent":6.6},{"date":"2018-10-10 11:50PM","cpu_percent":13.9,"memory_percent":4.8}]';

echo $data;
die();

?>