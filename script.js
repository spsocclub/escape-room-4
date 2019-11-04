var CODE = 0811; // CODE FOR THE ESCAPE ROOM

$(document).ready(function() {
  $(".myPinCode input").jqueryPincodeAutotab();
});

$(".myPinCode input").jqueryPincodeAutotab({
  prevElement:null,
  nextElement:null,
  defaultFlow:true
});


function submitCode(){
	var userCode = document.getElementById("code-input-1").value.toString() + document.getElementById("code-input-2").value.toString()  + document.getElementById("code-input-3").value.toString()  + document.getElementById("code-input-4").value.toString() ;

	if(userCode == CODE){
		document.getElementById("body").innerHTML = "<div id='container-3'><div class='main-text'>Congrats! You keyed in the correct code</div><button id='submit' onclick='goBack()''>GO BACK</button></div>";
	} else {
		document.getElementById("body").innerHTML = "<div id='container-2'><div class='main-text'>WRONG CODE</div><button id='submit' onclick='goBack()'>GO BACK</button></div>";
	}
}

function goBack(){
	document.getElementById("body").innerHTML = "<div id='container-1'><form onsubmit='submitCode()'><div class='main-text'>ENTER THE CODE</div><div class='myPinCode'><input type='tel' maxlength='1' class='pin' id='code-input-1'><input type='tel' maxlength='1' class='pin' id='code-input-2'><input type='tel' maxlength='1' class='pin' id='code-input-3'><input type='tel' maxlength='1' class='pin' id='code-input-4'></div><button id='submit' onclick='submitCode()'>ENTER</button></form></div>";
	$(".myPinCode input").jqueryPincodeAutotab();
}
