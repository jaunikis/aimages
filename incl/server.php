<?php
function sqlconnect($sql){
$servername = "localhost";
$username = "adsuietm_ds4u";
$password = "Joklmnas2";
$dbname = "adsuietm_ds4u";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_errno) {
    echo "Sorry, this website is experiencing problems.";
    exit;
}
//if connection ok, check query


$result = $conn->query($sql);

$pieces = explode(" ", $sql);
if($pieces[0]=="INSERT"){
	$result=$conn->insert_id;
}    
 

//$last_id=$conn->insert_id;

return $result;
}
?>