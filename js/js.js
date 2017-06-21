function click_cover(th){
	elem=th.firstChild;
	par=th.parentElement.parentElement;
	childs=par.childNodes;
	alert(par.childNodes.length);
	alert(childs[1].childNodes[7].firstChild.className);
	//childs[1].className="fa fa-square-o symb";
	//$("#testas").text("sdsd");
	//alert (elem.className);
	if(elem.className=='fa fa-square-o symb'){
		elem.className="fa fa-check-square-o symb";
		
		return;
		}
}