function Person(name) {
 this.name = name;
}

Person.prototype.prefixName = function (arr) {
	return arr.map((character) => {
		return this.name + character;
	});
};

//***********************************************

var user= {
	firstName: "Bradley",
	lastName: "Cooper",
	dob : "5th Jan 1975"
};

var {firstName: myFirstName ,lastName:myLastName , dob: myDOB}=user;

var printUser = function(){
	console.log(myFirstName + " " + myLastName + " : " + myDOB);
};

printUser(user);

//***********************************************

var myArray = ["Kristen Morrison", "Natalie Todd"];
var [Friend1,Friend2]=myArray;
for(let x of myArray){
console.log(x);
}
// console.log(Friend1); Also prints the respective value Kristen Morrison
// console.log(Friend2);


//***********************************************


var myFunc = function() { 
let food = 'Meow Mix'; 
console.log(food);
} ;
myFunc();// Outputs Meow Mix
console.log(food); //Reference Error 