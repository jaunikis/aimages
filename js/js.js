function click_cover(th){
	elem=th.firstChild;
	par=th.parentElement.parentElement;
	childs=par.children;
	//alert(childs.length);
	//alert(childs[1].childNodes[7].firstChild.className);
	//childs[0].childNodes[7].firstChild.className='fa fa-square-o symb';
	//childs[1].className="fa fa-square-o symb";
	//$("#testas").text("sdsd");
	//alert (elem.className);
	if(elem.className=='fa fa-square-o symb'){
		for(i=0;i<childs.length-1;i++){
			childs[i].childNodes[7].firstChild.className='fa fa-square-o symb';
		}
		elem.className="fa fa-check-square-o symb";
		return;
		}
}

function click_remove(th){
	//alert('remov');
	grand=th.parentElement.parentElement;
	par=th.parentElement;
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

function click_turn(th){
	alert('turn');
	
}