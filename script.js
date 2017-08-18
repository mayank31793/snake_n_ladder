setTimeout(function(){document.getElementById('playIn').play();},1000);

var buttonValue;
var namePlayer1;
var namePlayer2;
var clickDice = 0;

function hideDiv(){
	if(buttonValue==undefined || document.getElementById('p1').value==""
 		|| document.getElementById('p2').value=="" || 
 		document.getElementById('p1').value==document.getElementById('p2').value
	){
		window.location.reload();
	}
	namePlayer1 = document.getElementById('p1').value.substring(0,2);
	console.log(namePlayer1);
	namePlayer2 = document.getElementById('p2').value.substring(0,2);
	console.log(namePlayer2);
	document.getElementById('detailsId').style.display = "none";
	console.log("hide");
	document.getElementById('gameId').classList.remove("gameClass1");
	console.log('button value is '+buttonValue);
	document.getElementById('playOut').play();
	for(var i=0;i<buttonValue;i++){	

		if(buttonValue==36){

			if((i+1)%6==0){
				LastGridRow(i);	
			}

			//ladder for 36 grid
			else if(i==4){
				LadderGrid(i," L->21");				
			}

			else if(i==13){
				LadderGrid(i," L->29");								
			}

			//snakes for 36 grid
			else if(i==32){
				SnakeGrid(i," S->8");							
			}

			else if(i==22){
				SnakeGrid(i," S->3");							
			}						

			else{
				GridRow(i);			
			}
		}

		if(buttonValue==64){

			if((i+1)%8==0){
				LastGridRow(i);
			}

			//ladder for 64 grid
			else if(i==10){
				LadderGrid(i," L->29");				
			}

			else if(i==30){
				LadderGrid(i," L->44");				
			}

			else if(i==25){
				LadderGrid(i," L->61");				
			}			

			//snakes for 64 grid
			else if(i==62){
				SnakeGrid(i," S->21");			
			}

			else if(i==38){
				SnakeGrid(i," S->12");				
			}

			else if(i==27){
				SnakeGrid(i," S->1");				
			}			


			else{
				GridRow(i);
			}

		}

		if(buttonValue==100){

			if((i+1)%10==0){
				LastGridRow(i);
			}			

			//ladder for 100 grid
			else if(i==17){
				LadderGrid(i," L->93");				
			}

			else if(i==34){
				LadderGrid(i," L->67");				
			}

			else if(i==57){
				LadderGrid(i," L->84");				
			}

			else if(i==77){
				LadderGrid(i," L->96");				
			}

			else if(i==22){
				LadderGrid(i," L->53");				
			}									

			//snakes for 100 grid
			else if(i==98){
				SnakeGrid(i," S->13");			
			}

			else if(i==65){
				SnakeGrid(i," S->19");				
			}

			else if(i==82){
				SnakeGrid(i," S->36");			
			}

			else if(i==44){
				SnakeGrid(i," S->2");				
			}

			else if(i==37){
				SnakeGrid(i," S->15");				
			}						

			else{
				GridRow(i);
			}
		}				

	}
}

var total1 = 0;
var total2 = 0;
var prev1 = 0;
var prev2 = 0;

function DiceRoll(){
	clickDice+=1;

	var random = Math.floor((Math.random() * 6) + 1);
	document.getElementById('diceRollValue').innerHTML = random;

	if(clickDice%2==0){
		total1+=random;
		prev1 = total1 - random;
		console.log(prev1);
	
		if(total1>buttonValue){
			total1 = total1 - random;
			// document.getElementsByClassName('elemStyle')[total1-1].style.backgroundColor="#59EA1A";
			// document.getElementsByClassName('elemStyle')[prev1-1].style.backgroundColor="#A0DBB4";
			document.getElementsByClassName('elemStyle')[total1-1].appendChild(playerNameSpan);
			// document.getElementsByClassName('elemStyle')[prev1-1].removeChild(playerNameSpan);
			console.log("total is more, back to total1 "+total1);
		}

		if(total1==buttonValue){
			document.getElementsByClassName('elemStyle')[buttonValue-1].style.backgroundColor="black";
			console.log("p1 win");
			document.getElementById('winner').innerHTML = namePlayer1+" wins";
		}	

		// 36 grid			

		//for 36 grid ladder
		if(buttonValue==36 && total1==5){
			total1=21;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==36 && total1==14){
			total1=29;
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

		//64 grid

		//for 64 grid ladder
		if(buttonValue==64 && total1==11){
			total1=29;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==64 && total1==26){
			total1=61;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==64 && total1==31){
			total1=44;
			console.log("ladder jump "+total1);
		}	

		//for 64 grid snake
		if(buttonValue==64 && total1==28){
			total1=1;
			console.log("snake jump "+total1);
		}

		if(buttonValue==64 && total1==39){
			total1=3;
			console.log("snake jump "+total1);
		}

		if(buttonValue==64 && total1==63){
			total1=3;
			console.log("snake jump "+total1);
		}

		//100 grid

		//for 100 grid ladder
		if(buttonValue==100 && total1==18){
			total1=93;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==100 && total1==23){
			total1=53;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==100 && total1==35){
			total1=67;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==100 && total1==58){
			total1=84;
			console.log("ladder jump "+total1);
		}

		if(buttonValue==100 && total1==78){
			total1=96;
			console.log("ladder jump "+total1);
		}					

		//for 100 grid snake
		if(buttonValue==100 && total1==38){
			total1=15;
			console.log("snake jump "+total1);
		}

		if(buttonValue==100 && total1==45){
			total1=2;
			console.log("snake jump "+total1);
		}

		if(buttonValue==100 && total1==66){
			total1=19;
			console.log("snake jump "+total1);
		}

		if(buttonValue==100 && total1==83){
			total1=36;
			console.log("ladder jump "+total1);
		}		

		if(buttonValue==100 && total1==99){
			total1=13;
			console.log("ladder jump "+total1);
		}


		console.log("p1 "+total1);
		document.getElementById('playerTurn').innerHTML = "Turn: "+document.getElementById('p1').value;
		var playerNameSpan = document.createElement('span');
		var playerOneName = document.createTextNode(" "+namePlayer1);
		playerNameSpan.appendChild(playerOneName);
		playerNameSpan.setAttribute('id','spanPlayer1');
		document.getElementsByClassName('elemStyle')[total1-1].appendChild(playerNameSpan);
		document.getElementsByClassName('elemStyle')[prev1-1].removeChild(document.getElementById('spanPlayer1'));
		// document.getElementsByClassName('elemStyle')[total1-1].style.backgroundColor="#59EA1A";
		// document.getElementsByClassName('elemStyle')[prev-1].style.backgroundColor="#A0DBB4";

	}

	else{
		total2+=random;
		prev2 = total2 - random;
		console.log("p2 "+total2);
		console.log(prev2);
	
		if(total2>buttonValue){
			total2 = total2 - random;
			document.getElementsByClassName('elemStyle')[total2-1].appendChild(playerNameSpan);
			document.getElementsByClassName('elemStyle')[prev2-1].removeChild(playerNameSpan);
			// document.getElementsByClassName('elemStyle')[total2-1].style.backgroundColor="#CA2A08";
			// document.getElementsByClassName('elemStyle')[prev2-1].style.backgroundColor="#CA2A08";
			console.log("total is more, back to total2 "+total2);
		}

		if(total2==buttonValue){
			document.getElementsByClassName('elemStyle')[buttonValue-1].style.backgroundColor="black";
			console.log("p2 win");
			document.getElementById('winner').innerHTML = namePlayer2+" wins";
		}

		//36 grid

		//for 36 grid ladder
		if(buttonValue==36 && total2==5){
			total2=23;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==36 && total2==5){
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

		//64 grid

		//for 64 grid ladder
		if(buttonValue==64 && total2==11){
			total2=29;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==64 && total2==26){
			total2=61;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==64 && total2==31){
			total2=44;
			console.log("ladder jump "+total2);
		}	

		//for 64 grid snake
		if(buttonValue==64 && total2==28){
			total2=1;
			console.log("snake jump "+total2);
		}

		if(buttonValue==64 && total2==39){
			total2=3;
			console.log("snake jump "+total2);
		}

		if(buttonValue==64 && total2==63){
			total2=3;
			console.log("snake jump "+total2);
		}

		//100 grid

		//for 100 grid ladder
		if(buttonValue==100 && total2==18){
			total2=93;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==100 && total2==23){
			total2=53;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==100 && total2==35){
			total2=67;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==100 && total2==58){
			total2=84;
			console.log("ladder jump "+total2);
		}

		if(buttonValue==100 && total2==78){
			total2=96;
			console.log("ladder jump "+total2);
		}					

		//for 100 grid snake
		if(buttonValue==100 && total2==38){
			total2=15;
			console.log("snake jump "+total2);
		}

		if(buttonValue==100 && total2==45){
			total2=2;
			console.log("snake jump "+total2);
		}

		if(buttonValue==100 && total2==66){
			total2=19;
			console.log("snake jump "+total2);
		}

		if(buttonValue==100 && total2==83){
			total2=36;
			console.log("ladder jump "+total2);
		}		

		if(buttonValue==100 && total2==99){
			total2=13;
			console.log("ladder jump "+total2);
		}		

		document.getElementById('playerTurn').innerHTML = "Turn: "+document.getElementById('p2').value;
		var playerNameSpan = document.createElement('span');
		var playerTwoName = document.createTextNode(" "+namePlayer2);
		playerNameSpan.appendChild(playerTwoName);		
		playerNameSpan.setAttribute('id','spanPlayer2')
		document.getElementsByClassName('elemStyle')[total2-1].appendChild(playerNameSpan);
		document.getElementsByClassName('elemStyle')[prev2-1].removeChild(document.getElementById('spanPlayer2'));
	// 	document.getElementsByClassName('elemStyle')[total2-1].style.backgroundColor="#CA2A08";
	// 	document.getElementsByClassName('elemStyle')[prev-1].style.backgroundColor="#A0DBB4";
	}
}