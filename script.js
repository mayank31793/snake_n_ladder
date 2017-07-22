console.log("hi");

var total = 0;
var prev = 0;

function diceRoll(){
	var random = Math.floor((Math.random() * 6) + 1);
    document.getElementById("randomResult").innerHTML = random;
    total+= random;
    prev = total - random;
    // document.getElementsByClassName('col')[total-1].style.backgroundColor = "black";

    // document.getElementsByClassName('col')[11].setAttribute("val", 7);

    function colorChange(){
	   	if(prev%2==0){
			document.getElementsByClassName('col')[i].style.backgroundColor = "#AEF387";
		}
		else{
			document.getElementsByClassName('col')[i].style.backgroundColor = "#F09378";
		}
    }

    for(var i=0;i<36;i++){
    	if(total==document.getElementsByClassName('col')[i].getAttribute('val')){
    		document.getElementsByClassName('col')[i].style.backgroundColor = "#50E9D2";
    		// prev = document.getElementsByClassName('col')[i].getAttribute('val') - random;
    		// console.log(prev);
    	}
    	if(prev==document.getElementsByClassName('col')[i].getAttribute('val')){
    		colorChange();
    	}
    	if(total==36){
    		console.log("You Win");
    		document.getElementById('gameoverAudio').play();
    		document.getElementsByClassName('col')[30].style.backgroundColor = "black";
    		break;
    	}
    }

	if(total==2){
		total=15;
		document.getElementsByClassName('col')[14].style.backgroundColor = "#05F826";
		colorChange();
	}

	if(total==5){
		total=27;
		document.getElementsByClassName('col')[26].style.backgroundColor = "#05F826";
		colorChange();
	}

	if(total==21){
		total=12;
		document.getElementsByClassName('col')[6].style.backgroundColor = "#E8300B";
		colorChange();
	}

	if(total==35){
		total=3;
		document.getElementsByClassName('col')[2].style.backgroundColor = "#E8300B";
		colorChange();
	}	

	if(total>36){
		total = total - random;
		console.log("total is more than 36,back to "+total);
	}			
}

