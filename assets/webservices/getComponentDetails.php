<?php

header("Access-Control-Allow-Origin: *");

if ($_POST['componentId']) {
    $componentId = $_POST['componentId'];
    if ($componentId == 1) {
        $data = '{"id":"1","name":"NEXUS A","type":"NEXUS","version":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 2) {
        $data = '{"id":"2","name":"ASA-1","type":"ASA","version":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 3) {
        $data = '{"id":"3","name":"VCENTER-1","type":"version","version":"5-5.0.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.100","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 4) {
        $data = '{"id":"4","name":"NEXUS B","type":"NEXUS","version":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 5) {
        $data = '{"id":"5","name":"ASA-2","type":"ASA","version":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 6) {
        $data = '{"id":"6","name":"ASA-1","type":"ASA","version":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 7) {
        $data = '{"id":"7","name":"VCENTER-1","type":"VCENTER","version":"5-5.0.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.100","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 8) {
        $data = '{"id":"8","name":"NEXUS B","type":"NEXUS","version":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 9) {
        $data = '{"id":"9","name":"ASA-1","type":"ASA","version":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 10) {
        $data = '{"id":"10","name":"ASA-2","type":"ASA","version":"5-1.0","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.14","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    } else if ($componentId == 11) {
        $data = '{"id":"11","name":"NEXUS B","type":"NEXUS","version":"75-K","componentUser":"admin","password":"admin","enablePassword":"","ipAddress":"10.201.124.11","vrfWarnStart":"25","vrfWarnEnd":"50","vrfMax":"80","bgpPeersWarnStart":"10","bgpPeersWarnEnd":"45","bgpPeersMax":"75","vlanWarnStart":"15","vlanWarnEnd":"50","vlanMax":"70","hsrpWarnStart":"20","hsrpWarnEnd":"60","hsrpMax":"90","staticRoutesWarnStart":"25","staticRoutesWarnEnd":"65","staticRoutesMax":"85","vrrpWarnStart":"10","vrrpWarnEnd":"20","vrrpMax":"30"}';
    }
}

echo $data;
die();
?>