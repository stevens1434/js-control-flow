// var grade = 86;

// 	if (grade >= 90) {
// 		console.log("You got an A");
// 	} else if (grade >=80) {
// 		console.log("you got a B");
// 	} else if (grade >=70) {
// 		console.log("You got a C");
// 	} else if (grade >=60) {
// 	  console.log("You got a D");
// 	} else if (grade >=50) {
// 	  console.log("You got an E");
// 	} else {
// 		console.log("You're an idiot");
// }

// grade();


// var grade = 89;

// switch(grade) {
// 	case 100:
// 		console.log("you got an a");
// 		break;
// 	case 90:
// 		console.log("you got a b");
// 		break;
// 	case 80:
// 		console.log("you got a c");
// 		break;
// 	case 70:
// 		console.log("you got a d");
// 		break;
// 	case 60:
// 		console.log("you got an e");
// 		break;
// 	default:
// 		console.log("you got an f");
// 		break;
// }


var grade = 78;

switch(true){
	case grade <=100 && grade >=90:
		console.log("A");
		break;
	case grade <= 89 && grade >=80:
		console.log("B");
		break;
	case grade <= 79 && grade >=70:
		console.log("C");
		break;
	case grade <= 69 && grade >=60:
		console.log("D");
		break;
	case grade <= 59 && grade >=50:
		console.log("E");
		break;
	case grade <= 59 && grade >=50:
		console.log("F");
		break;
	default:
		console.log("you suck");
		break;
}