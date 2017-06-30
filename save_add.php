<?php
require_once ('incl/server.php');
session_start();
 echo('save_add');
 $txt=$_POST['txt'];
 $last_id=$_SESSION['last_id'];
 $ad_id=$_SESSION['ad_id'];
 echo '<p>text: '.$txt.'</p>';
 echo '<p>last id: '.$last_id.'</p>';
 
 $sql="SELECT * FROM test WHERE ad_id=$ad_id";
 $result=sqlconnect($sql);
 $x='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
 while ($row = $result->fetch_assoc()) {
				$id=$row['id'];
				$images1=$row['images1'];
				
				//$images2=base64_decode(substr($images1,23));
				
		//echo '<p id="namas">'.$images1.'</p>';	
		//echo '<p>'.$id.' - '.$images1;
		//header("Content-type: image/jpeg");	
		echo '<img width="250" src="'.$images1.'">';
 }

 
 
?>
<p><a href="index.html"> Back to index.html </a></p>
<button onclick="button()"> spausk </button>
<img id="img"></img>

<script>
 function button(){
	 var im=document.getElementById('namas').innerHTML;
	 //alert(im);
	 document.getElementById('img').src=im;
 }
</script>