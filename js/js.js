function click_cover(th){
	elem=th.firstChild;
	par=th.parentElement.parentElement;
	childs=par.children;
	//alert(childs.length);
	//alert(childs[1].childNodes[7].firstChild.className);
	childs[0].childNodes[7].firstChild.className='fa fa-square-o symb';
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
	par=th.parentElement;
	par.style.opacity=0;
	par.style.width=0;
	setTimeout(function(){ par.remove(); }, 500);
	
}

function click_turn(th){
	alert('turn');
	
}