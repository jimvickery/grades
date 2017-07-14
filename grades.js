console.log("this is the grades.js")

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

//variables to hole grade count
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;
//variables to hold lowest and highest
var highGrade = 0;
var lowGrade = 100;


for (let i = 0; i < scores.length;  i++) {
	let score = scores[i];

	if (score > 90) {
		gradeA++;
	} else if (score > 80 && score < 91) {
		gradeB++;
	}  else if (score > 70 && score < 80) {
		gradeC++;
	}  else if (score > 60 && score < 70) {
		gradeD++;
	} else {
		 gradeF++;
	}
	
	//checks to find highest grade
	if (highGrade < score){
		highGrade = score;
	}
	//checks to find lowest grade
	if  (lowGrade > score ) {
		lowGrade = score;
	}

}
console.log("Number of A:", gradeA);
console.log("Number of B:", gradeB);
console.log("Number of C:", gradeC);
console.log("Number of D:", gradeD);
console.log("Number of F:", gradeF);
console.log("Highest Grade", highGrade);
console.log("Lowest Grade", lowGrade);





