class Student{

	static count=0;

	constructor(name,age,phone,marks){

		this.name = name;
		this.age = age;
		this.phone = phone;
		this.marks = marks;
		Student.count++;

	}

	ifEligible(marks){

		if(this.marks>=40) {
			console.log('Eligible');
			}
			else {
			console.log('Not Eligible');
			}
	}

	static studentsCount(){
	console.log(this.count);
	}

	eligibleForPlacements(minMarks){
		
		return (minAge) => {
			if(this.age>minAge && this.marks>minMarks){
				console.log("Eligible for placement");
			}
			else{
				console.log("Not eligible for the placement");
			}
		}

	}
}

let ram = new Student('ram',20,2314425,100);
let shyam = new Student('shyam',21,12345,39);
let sita = new Student('sita',22,54321,41);
let laxman = new Student('laxman',23,23455,40);
let bharat = new Student('bharat',24,75532,80);
ram.eligibleForPlacements(60)(21);
shyam.eligibleForPlacements(60)(21);
sita.eligibleForPlacements(60)(21);
laxman.eligibleForPlacements(60)(21);
bharat.eligibleForPlacements(60)(21);
