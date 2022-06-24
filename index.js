//Starting with simple javascript calc

 const value1 = parseInt(prompt("Please enter your first number"));
 const symbol = prompt("please input opertor of choice (* / + -)");
 const value2 = parseInt(prompt("Please enter second number"));

 if(symbol == "+"){
     alert(value1 + value2)
 }
 else if(symbol == "-"){
     alert(value1 - value2)
 }
 else if(symbol == "*"){
     alert(value1 * value2)
 }
 else if(symbol == "/"){
     alert(value1 / value2)
 }
 else{
     alert("Please input valid characters!!!")
 }

 //Kindly refresh the page to execute another calc==