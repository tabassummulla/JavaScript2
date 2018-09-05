	
		
		var display = "This is my JavaScript Worksheet";
		var hi = "hello";

		document.write(display);
		console.log(hi);
		alert("Hi");

		document.write("<br>");
		document.write("<br>");
		
		var input;
		function square(input) {


			return input*input;

		}

		document.write(square(5));

		document.write("<br>");
		document.write("<br>");


		var number1;
		var number2;
		var number3;


		function sum(number1, number2, number3){

			return number1 + number2 + number3;


		}

		document.write(sum(4,3,2));


		var person = {

			name : "Tabassum" ,
			age: 21 ,
			occupation : "Software Engineer"

		} ;


		document.write("<br>");
		document.write("<br>");


	document.write(person.name + " , " + person.age + " , " + person.occupation);



		var person = {

			name : "Aman" ,
			age: 21 ,
			occupation : "Software Engineer"

		} ;

		document.write("<br>");
		document.write("<br>");


		document.write(person.name + " , " + person.age + " , " + person.occupation);



		function increaseAge() {

		person.age += 1;

		document.getElementById("incage").innerHTML = person.age;




		}



		function createPerson() {

		person.name = document.getElementById("InputName").value ;

		person.age = document.getElementById("InputAge").value;

		person.occupation = document.getElementById("InputOccupation").value;

		document.getElementById("personObj").innerHTML = person.name + " , " + person.age + " , " + person.occupation;

		}



		var caps= "He Said 'My Name is Elliott'";


		function capitalise(caps) {

		caps = caps.toUpperCase();

		document.getElementById("capp").innerHTML = caps; 


		}




		function concat() {

		var str = "My Birthday Is On June...."

		var num = 8;

		var str2 = "th" ;

		document.getElementById("cat").innerHTML = "<strong>" + str + num + str2 + "</strong>";


		}



		function add() {

		var one = parseInt(document.getElementById("value1").value);
		var two = parseInt(document.getElementById("value2").value);

		if (document.getElementById("value1").value == "" ){

					document.getElementById("value1").focus();
						alert("Please Enter Value");
}
		else if (document.getElementById("value2").value == "") {

				document.getElementById("value2").focus();
						alert("Please Enter Value");

		}  else {
		document.getElementById("result").innerHTML = one + two; 

		}
		
}

		function subtract() {

		var one = parseInt(document.getElementById("value1").value);
		var two = parseInt(document.getElementById("value2").value);		
			

			if (document.getElementById("value1").value == "" ){

					document.getElementById("value1").focus();
						alert("Please Enter Value");
}
		else if (document.getElementById("value2").value == "") {

				document.getElementById("value2").focus();
						alert("Please Enter Value");

		}
			 else {
		document.getElementById("result").innerHTML = one - two; 
		}

		}



		function multiply() {

		var one = parseInt(document.getElementById("value1").value);
		var two = parseInt(document.getElementById("value2").value);
 
		if (document.getElementById("value1").value == "" ){

					document.getElementById("value1").focus();
						alert("Please Enter Value");
}
		else if (document.getElementById("value2").value == "") {

				document.getElementById("value2").focus();
						alert("Please Enter Value");

		} else {
		document.getElementById("result").innerHTML = one * two; 


		}
		}


		function divide() {

		var one = parseInt(document.getElementById("value1").value);
		var two = parseInt(document.getElementById("value2").value);

	if (document.getElementById("value1").value == "" ){

					document.getElementById("value1").focus();
						alert("Please Enter Value");
}
		else if (document.getElementById("value2").value == "") {

				document.getElementById("value2").focus();
						alert("Please Enter Value");

		}
		else {
		document.getElementById("result").innerHTML = one / two; 


		}
		}

		var arrayOne = ["Apple", "Banana" , "Pear"];


		function printArray() {


		document.getElementById("arrayp").innerHTML = arrayOne;
		}





		function addToArray() {


		arrayOne.push("Strawberry");

		document.getElementById("arrayq").innerHTML = arrayOne;
		}



		function removeLast() {

		arrayOne.pop();

		document.getElementById("arrayr").innerHTML = arrayOne;


		}


		function checkAge(person) {

			if(person.age <= 40 && person.age >= 20) {

				document.getElementById("checkage").innerHTML = "True";

			}

			else {

				document.getElementById("checkage").innerHTML = "False";
			}

	}



			function forLoop() {

				text = "<strong>" + "Numbers are...." + "</strong>" + "<br>";

				for(i=0; i<=10; i++){

				 text = text + i + "<br>";

			}

			document.getElementById("loop1").innerHTML = text;

			}


			

			function divisibleBy2(){

 				var output = " ";

					for(i=0;i<=10; i++){


						if(i%2 ==0){

				    output = output + "<br>" + i;

						}

					}
		document.getElementById("loop2").innerHTML = output;
			}
			



			


			
				var max = 100;
				var DivisibleByThree = "Fizz";
				var DivisibleByFive = "Buzz";

				function fizzBuzz(max, DivisibleByFive,DivisibleByThree){

				var text = "";
				var i;

				for(i=1; i<=max; i++){

				if(i%5==0 && i%3==0){
				     text += DivisibleByThree + DivisibleByFive   + "<br>";
				}
				else if(i%3==0) {
				     text += DivisibleByThree + "<br>";
				    }
				else if(i%5==0){
				     text += DivisibleByFive + "<br>";
				}
				else {
				    text+= "Number is :" + i + "<br>";
				}
				document.getElementById("fizzbuzz").innerHTML = text;
				}
}

		




		function itfour() {
		
		var res = "";

		var inputNo = parseInt(document.getElementById("iterfour").value);



			if (document.getElementById("iterfour").value == "" ){

					document.getElementById("iterfour").focus();
						alert("Please Enter Value");

				} else {

				 if(inputNo%3==0){


 					res = "	Number can be divided by 3 , the answer is  = " + inputNo/3 ;

			} else {


				if (inputNo == 1) {

					res = " Sorry Not Possible...";
				} else{


					var newNo = inputNo+=1;

						if(newNo %3==0){


				res = "Number cannot be divided by 3, until 1 added  " + "<br>" + "New Number is  " +newNo +  "<br>" +  "This divided by 3 is  " + newNo/3;
		
						
						}

						else{

							newNo = inputNo-2;

							res = "Number cannot be divided by 3, until - 1 " + "<br>" +"New Number is  "+  newNo + "<br>" +  "This divided by 3 is  "
					+ newNo/3;	
						}

				}
			
		}

		}

		document.getElementById("it4").innerHTML = res;

		}




			function tripleCount() {


				var textInput = document.getElementById("string").value ;
				var triple = 0;
				var total = "";
			
				for(i=0; i<textInput.length; i++) {

				//var check = textInput.substring(i,i+2);

				if(textInput.charAt(i) == textInput.charAt(i+1) && textInput.charAt(i+1) == textInput.charAt(i+2)) {

							 triple= triple+1 ; 

						total =  triple ;
				}

				}

				document.getElementById("pattern").innerHTML = total ;
			}
