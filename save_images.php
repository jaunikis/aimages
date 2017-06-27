<?php
//echo'dfdf ';
//$images1=$_POST['images1'];
//$images2=$_POST['images2'];

//for($i=0;$i<count($images1);$i++){
	//echo $images1[$i];
//}
//echo count($images1);
//echo $images1;

define('UPLOAD_DIR', 'img/');
	$img = $_POST['images1'];
	//echo $img;
	list($type, $img) = explode(';', $img);
	list(, $img)      = explode(',', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.jpg';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.';
?>