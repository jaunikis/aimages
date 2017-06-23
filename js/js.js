function click_cover(th){
	elem=th.firstChild;
	//alert(elem.className);
	par=th.parentElement;
	gran=th.parentElement.parentElement;
	childs=gran.children;
	
	//perstumia cover i pirma vieta
	//gran.insertBefore(par,gran.firstChild);
	
	if(elem.className=='fa fa-square-o symb'){
		for(i=0;i<childs.length-1;i++){
			childs[i].children[3].firstChild.className='fa fa-square-o symb';
		}
		elem.className="fa fa-check-square-o symb";
		return;
		}
}

function click_remove(th){
	//alert('remov');
	
	grand=th.parentElement.parentElement;
	par=th.parentElement;
	var num=par.previousSibling;
	var i = 0;
	while(num.className != null ){i++;num=num.previousSibling;}
	//alert(i);
	//if(num.className!=null){alert('okk');}
	images1.splice(i,1);
	childs=par.children;
	checked=childs[3].firstChild.className;
	elem=th.firstChild;
	par.style.opacity=.3;
	par.style.width=0;
	par.style.marginLeft=0;
	par.style.marginRight=0;
	par.style.padding=0;
	//alert(checked);
	if(checked=='fa fa-check-square-o symb'){
		//alert('checked');
		var add=true;
	}
	setTimeout(function(){
		par.remove(); 
		if(add==true){
			//alert(grand.children[1].children[3].firstChild.className);
			grand.children[0].children[3].firstChild.className="fa fa-check-square-o symb";
			}
		}, 500);
	
}

function click_rotate(th){
	grand=th.parentElement.parentElement;
	par=th.parentElement;
	var num=par.previousSibling;
	var i = 0;
	while(num.className != null ){i++;num=num.previousSibling;}
	//alert(i);
	blobToDataURL(images1[i], function(dataURL){
			$("ol").append('<li><img src="'+dataURL+'" width="100"></img></li>');
		});
	var canvas = document.createElement('canvas');
	canvas.style.border = '1px solid #000';
	ctx = canvas.getContext("2d");
			  ctx.save();
			  ctx.translate(canvas.width/2,canvas.height/2);
			  ctx.drawImage(images1[i],-width/2,-height/2,width,height);
			  ctx.restore();
	document.body.appendChild(canvas);
	
}