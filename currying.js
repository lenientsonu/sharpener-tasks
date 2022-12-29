//function currying using bind

let multiply = function (x,y){
	console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(23);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(9);

//function currying using closures

let multiply = function(x){
	return function(y){
		console.log(x*y);
	}
}

let multiplyByTwo = multiply(2);
multiplyByTwo(30);

let multiplyByThree = multiply(3);
multiplyByThree(3);
