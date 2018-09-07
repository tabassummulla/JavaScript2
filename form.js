 
 	
	

 	function enter() {
 	

	var nameInput = document.getElementById("name").value;
	var emailInput = document.getElementById("uemail").value;
	var mobileInput = document.getElementById("mobile").value;
	var dateInput = document.getElementById("DOB").value;

	

 		if(nameInput == "" || emailInput == "" || mobileInput == "" || dateInput == ""){

 			alert("Please fill in all required fields");

 		}	

 		

 		}



 		function validateEmail() {

	 	var email = document.getElementById("uemail");

	 	var emailFormat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

				if(!(email.value.match(emailFormat)) ){


 			

 						console.log("Invalid email address ");

 						document.getElementById("uemail").focus();

 						return false;
 					}
 				
		
		else{

 			document.getElementById("output").innerHTML = "Submited"; }
 		}



 		function validateMobile() {
 			

 		var mob = document.getElementById("mobile");

 		var mobileFormat = "/^\d{10}$/";


 		if( !(mob.value.match(mobileFormat)) ) {

		console.log("Invalid mobile number");

 			return false;
 		}

		
		else{

 			document.getElementById("output").innerHTML = "Submited";

 			 }


 		}
 		




//pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

 	