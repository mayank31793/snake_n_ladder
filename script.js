console.log("hi");

var total = 0;

function diceRoll(){
	var random = Math.floor((Math.random() * 6) + 1);
    document.getElementById("randomResult").innerHTML = random;
    total+= random;
    // document.getElementsByClassName('col')[total-1].style.backgroundColor = "#50E9D2";

    // document.getElementsByClassName('col')[11].setAttribute("val", 7);

    for(var i=0;i<36;i++){
    	if(total==document.getElementsByClassName('col')[i].getAttribute('val')){
    		document.getElementsByClassName('col')[i].style.backgroundColor = "#50E9D2";
    	}
    }
	if(total==2){
		total=15;
		document.getElementsByClassName('col')[14].style.backgroundColor = "#50E9D2";
	}
}

