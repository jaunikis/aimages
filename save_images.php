<?php
require_once ('incl/server.php');
session_start();

define('UPLOAD_DIR', 'img/');
$cover=$_POST['cover'];



	//first image
	$images1 = $_POST['images1'];
	
	$sql = "INSERT INTO test (images1) VALUES ('$images1[0]')";
	$result=sqlconnect($sql);
	$_SESSION['last_id']=$result;
	
	for($i=0;$i<count($images1);$i++){
		$date = new DateTime();$timestamp2=$date->getTimestamp();
		$img=$images1[$i];
		$x='';
		if($i==$cover){$x='cover';}
		//echo $img;
		list($type, $img) = explode(';', $img);
		list(, $img)      = explode(',', $img);
		$data = base64_decode($img);
		$file = UPLOAD_DIR .$timestamp2.'-'. uniqid() . '-'.$i.$x.'.jpg';
		$success = file_put_contents($file, $data);
	}
	
	//second image2
	$images2 = $_POST['images2'];
	for($i=0;$i<count($images2);$i++){
		$date = new DateTime();$timestamp2=$date->getTimestamp();
		$img=$images2[$i];
		$x='';
		if($i==$cover){$x='cover';}
		//echo $img;
		list($type, $img) = explode(';', $img);
		list(, $img)      = explode(',', $img);
		$data = base64_decode($img);
		$file = UPLOAD_DIR .$timestamp2.'-'. uniqid() . '-'.$i.$x.'.jpg';
		$success = file_put_contents($file, $data);
	}
	
	print $success ? $file : 'Unable to save the file.';
?>