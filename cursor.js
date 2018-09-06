
	var T;
		var S;
		var fontSize = 10;

		function  move() {

			T = window.document.getElementById("mtxt");

			S = window.document.getElementById("sp");
	
			S.style.top = window.event.clientY + "px" ;
			console.log(S.style.top);

			S.style.left = window.event.clientX + "px";

			if(event.ctrlKey) {

				fontSize++;

			} else if(event.altKey){

				fontSize --;
			}

			S.style.fontSize = fontSize;
		}




		function moveOver() {



			if(T.value!="") {

			

			var c = document.getElementById("sp");
			var b = document.getElementById('mtxt').value ;

			var d = c.value;

			document.getElementById("mtxt").value = d;
			document.getElementById("sp").value = b;
			
	  		

		}
}

