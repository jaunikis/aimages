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
$cover=$_POST['cover'];

	//first image
	$images1 = $_POST['images1'];
	for($i=0;$i<count($images1);$i++){
		$img=$images1[$i];
		$x='';
		if($i==$cover){$x='cover';}
		//echo $img;
		list($type, $img) = explode(';', $img);
		list(, $img)      = explode(',', $img);
		$data = base64_decode($img);
		$file = UPLOAD_DIR .$i.' - '.$x.' '. uniqid() . '.jpg';
		$success = file_put_contents($file, $data);
	}
	
	//second image2
	$images2 = $_POST['images2'];
	for($i=0;$i<count($images2);$i++){
		$img=$images2[$i];
		//echo $img;
		list($type, $img) = explode(';', $img);
		list(, $img)      = explode(',', $img);
		$data = base64_decode($img);
		$file = UPLOAD_DIR .$i.'b - '. uniqid() . '.jpg';
		$success = file_put_contents($file, $data);
	}
	
	print $success ? $file : 'Unable to save the file.';
?>