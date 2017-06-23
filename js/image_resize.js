images1=[];
images2=[];
var nr=0;
function resize(th){
	//alert(th);
	var files=th.files;
	//alert(files.length);
	for (var i = 0; i < files.length; i++) {
		
		//alert(files[i].name);
		var file=files[i];
		// a seed img element for the FileReader
      var img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;

      // get an image file from the user
      // this uses drag/drop, but you could substitute file-browsing
      var reader = new FileReader();
      reader.onload = (function(image) {
        return function(e) {
          image.onload = function() { 
			var	width = image.width;if(width<200){ alert('Image too small!');return;}
			var	height = image.height;
              
              //alert(aImg.width);
			  //bkctx.clearRect(0, 0, canvas.width, canvas.height);
			 var canvas = document.createElement('canvas');
				canvas.width=600;
				canvas.height=450;
				
			if(width>height){
				var ratio=width/height;
				height=canvas.height;
				width=Math.round(height*ratio);
		}
			if(height>width){
				var ratio=height/width;
				width=canvas.width;
				height=Math.round(canvas.width*ratio);
		}
              //alert('width: '+width+'   height: '+height+image);
			  //alert('canvas width: '+canvas.width+'   canvas height: '+canvas.height);
			  ctx = canvas.getContext("2d");
			  ctx.save();
			  ctx.translate(canvas.width/2,canvas.height/2);
			  ctx.drawImage(image,-width/2,-height/2,width,height);
			  ctx.restore();
				ctx.font = "bold 18pt Arial";
				ctx.fillStyle = "rgba(100, 100, 150, 0.3)";
				ctx.fillText("Easyads.ie",canvas.width-130,canvas.height-10);

			
			canvas.toBlob(function (blob) {
				images1.push(blob);
				//alert(images1[i-1]);
			}, 'image/jpeg', 0.8);
			 
		//second image
			var	width = image.width;
			var	height = image.height;
			var canvas = document.createElement('canvas');
				canvas.width=1280;
				canvas.height=960;
			
			if(width>canvas.width){
				var ratio=width/height;
				width=canvas.width;
				height=Math.round(width/ratio);
		}
			if(height>canvas.height){
				var ratio=height/width;
				height=canvas.height;
				width=Math.round(height/ratio);
		}
			canvas.width=width;
			canvas.height=height;
              //alert('width: '+width+'   height: '+height);
			  //alert('canvas width: '+canvas.width+'   canvas height: '+canvas.height);
			  ctx = canvas.getContext("2d");
			  ctx.save();
			  ctx.translate(canvas.width/2,canvas.height/2);
			  ctx.drawImage(image,-width/2,-height/2,width,height);
			  ctx.restore();
				ctx.font = "bold 18pt Arial";
				ctx.fillStyle = "rgba(100, 100, 150, 0.3)";
				ctx.fillText("Easyads.ie",canvas.width-130,canvas.height-10);
			  var imag2=document.getElementById("images-div");
			  		
			
			canvas.toBlob(function (blob) {
				images2.push(blob);
				//alert(images2[i-1]);
			}, 'image/jpeg', 0.8);
			
			var dataurl=canvas.toDataURL('image/jpeg', 0.8);
		
			var img_div=document.createElement('div');
			img_div.className="img-div";
			img_div.id=nr;
			
			var mygt_left=document.createElement('div');
			mygt_left.className="mygt mygt-left";
			mygt_left.onclick=function() { click_rotate(this); };
			mygt_left.innerHTML='<i class="fa fa-refresh symb" aria-hidden="true"></i>';
			
			var mygt_right=document.createElement('div');
			mygt_right.className="mygt mygt-right";
			mygt_right.onclick=function() { click_remove(this); };
			mygt_right.innerHTML='<i class="fa fa-times symb" aria-hidden="true"></i>';
			//alert(nr);
			var mygt_left_bottom=document.createElement('div');
			mygt_left_bottom.className="mygt mygt-left-bottom";
			mygt_left_bottom.onclick=function() { click_cover(this); };
			var pazymetas="";
			if(nr==0){pazymetas="check-";}
			mygt_left_bottom.innerHTML='<i class="fa fa-'+pazymetas+'square-o symb" aria-hidden="true"></i>';
			
			var img=document.createElement('img');
			img.src=dataurl;
			img.id=nr;
			img.className="img";
			img.onclick=function() { rotate(this); };
			
			imag2.insertBefore(img_div,imag2.children[imag2.children.length-1]);
			img_div.appendChild(img);
			img_div.appendChild(mygt_left);
			img_div.appendChild(mygt_right);
			img_div.appendChild(mygt_left_bottom);
			
			nr++;
            }
            // e.target.result is a dataURL for the image
          image.src = e.target.result;
		  //window.location.href=aImg.src;
        };
      })(img);
      reader.readAsDataURL(file);
	}//for
}


function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

function save(){
	$("ol").empty();
	//alert(images1.length);
	for(i=0;i<images1.length;i++){
		blobToDataURL(images1[i], function(dataURL){
			$("ol").append('<li><img src="'+dataURL+'" width="100"></img></li>');
		});
		
	}
	
}