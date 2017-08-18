function gridSelect(val){
	buttonValue = val.value;
	console.log('val '+buttonValue);
}

function LadderGrid(node,str){
	var elem = document.createElement('div');
	var text = document.createTextNode(node+1+str);
	elem.appendChild(text);				
	elem.className = "elemStyle";
	document.getElementById('gameId').appendChild(elem);
}

function SnakeGrid(node,str){
	var elem = document.createElement('div');
	var text = document.createTextNode(node+1+str);
	elem.appendChild(text);				
	elem.className = "elemStyle";
	document.getElementById('gameId').appendChild(elem);
}

function LastGridRow(node){
	var elem = document.createElement('div');
	var elemBr = document.createElement('br');
	var text = document.createTextNode(node+1);
	elem.appendChild(text);
	elem.className = "elemStyle";
	document.getElementById('gameId').appendChild(elem);
	document.getElementById('gameId').appendChild(elemBr);
}

function GridRow(node){
	var elem = document.createElement('div');
	var text = document.createTextNode(node+1);
	elem.appendChild(text);
	elem.className = "elemStyle";
	document.getElementById('gameId').appendChild(elem);
}