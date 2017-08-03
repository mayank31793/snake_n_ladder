setTimeout(function(){document.getElementById('playIn').play();},1000);

var buttonValue;
var namePlayer1;
var namePlayer2;
var clickDice = 0;

function gridSelect(val){
	buttonValue = val.value;
	console.log('val '+buttonValue);
}

function hideDiv(){
	if(buttonValue==undefined || document.getElementById('p1').value==""
 		|| document.getElementById('p2').value=="" || 
 		document.getElementById('p1').value==document.getElementById('p2').value
	){
		window.location.reload();
	}
	namePlayer1 = document.getElementById('p1').value;
	console.log(namePlayer1);
	namePlayer2 = document.getElementById('p2').value;
	console.log(namePlayer2);
	document.getElementById('detailsId').style.display = "none";
	console.log("hide");
	document.getElementById('gameId').classList.remove("gameClass1");
	console.log('button value is '+buttonValue);
	document.getElementById('playOut').play();
	for(var i=0;i<buttonValue;i++){	

		if(buttonValue==36){

			if((i+1)%6==0){
				var elem = document.createElement('div');
				var elemBr = document.createElement('br');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
				document.getElementById('gameId').appendChild(elemBr);
			}

			//ladder for 36 grid
			else if(i==4){
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1+" L->21");
				elem.appendChild(text);				
				elem.className = "elemStyleLadder";
				document.getElementById('gameId').appendChild(elem);				
			}

			else if(i==13){
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1+" L->29");
				elem.appendChild(text);				
				elem.className = "elemStyleLadder";
				document.getElementById('gameId').appendChild(elem);				
			}

			//snakes for 36 grid
			else if(i==32){
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1+" S->8");
				elem.appendChild(text);				
				elem.className = "elemStyleSnake";
				document.getElementById('gameId').appendChild(elem);				
			}

			else if(i==22){
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1+" S->3");
				elem.appendChild(text);				
				elem.className = "elemStyleSnake";
				document.getElementById('gameId').appendChild(elem);				
			}						

			else{
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
			}
		}

		if(buttonValue==64){

			if((i+1)%8==0){
				var elem = document.createElement('div');
				var elemBr = document.createElement('br');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
				document.getElementById('gameId').appendChild(elemBr);
			}

			else{
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);				
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
			}

		}

		if(buttonValue==100){

			if((i+1)%10==0){
				var elem = document.createElement('div');
				var elemBr = document.createElement('br');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
				document.getElementById('gameId').appendChild(elemBr);
			}						

			else{
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
			}
		}				

	}
}

var total1 = 0;
var total2 = 0;
var prev = 0;

function DiceRoll(){
	clickDice+=1;

	var random = Math.floor((Math.random() * 6) + 1);
	document.getElementById('diceRollValue').innerHTML = random;

	if(clickDice%2==0){
		total1+=random;
		prev = total1 - random;
	
		if(total1>buttonValue){
			total1 = total1 - random;
			document.getElementsByClassName('elemStyle')[total1-1].style.backgroundColor="#59EA1A";
			document.getElementsByClassName('elemStyle')[prev-1].style.backgroundColor="#A0DBB4";
			console.log("total is more, back to total1 "+total1);
		}

		if(total1==buttonValue){
			document.getElementsByClassName('elemStyle')[buttonValue-1].style.backgroundColor="black";
			console.log("p1 win");
		}				


		//for 36 grid ladder
		if(buttonValue==36 && total1==5){
			total1=23;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==36 && total1==5){
			total1=21;
			console.log("ladder jump "+total1);
		}			


		//for 36 grid snake
		if(buttonValue==36 && total1==33){
			total1=8;
			console.log("snake jump "+total1);
		}

		if(buttonValue==36 && total1==23){
			total1=3;
			console.log("snake jump "+total1);
		}				

		console.log("p1 "+total1);
		document.getElementById('playerTurn').innerHTML = "Turn: "+document.getElementById('p1').value;
		document.getElementsByClassName('elemStyle')[total1-1].style.backgroundColor="#59EA1A";
		document.getElementsByClassName('elemStyle')[prev-1].style.backgroundColor="#A0DBB4";	

	}

	else{
		total2+=random;
		prev = total2 - random;
		console.log("p2 "+total2);
	
		if(total2>buttonValue){
			total2 = total2 - random;
			document.getElementsByClassName('elemStyle')[total2-1].style.backgroundColor="#CA2A08";
			document.getElementsByClassName('elemStyle')[prev-1].style.backgroundColor="#CA2A08";
			console.log("total is more, back to total2 "+total2);
		}

		if(total2==buttonValue){
			document.getElementsByClassName('elemStyle')[buttonValue-1].style.backgroundColor="black";
			console.log("p2 win");
		}


		//for 36 grid ladder
		if(buttonValue==36 && total2==5){
			total2=23;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==36 && total1==5){
			total2=21;
			console.log("ladder jump "+total2);
		}			


		//for 36 grid snake
		if(buttonValue==36 && total2==33){
			total2=8;
			console.log("snake jump "+total2);
		}

		if(buttonValue==36 && total2==23){
			total2=3;
			console.log("snake jump "+total2);
		}	



		document.getElementById('playerTurn').innerHTML = "Turn: "+document.getElementById('p2').value;
		document.getElementsByClassName('elemStyle')[total2-1].style.backgroundColor="#CA2A08";
		document.getElementsByClassName('elemStyle')[prev-1].style.backgroundColor="#A0DBB4";
	}
}