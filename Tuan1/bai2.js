const weightMark = 78
const heightMart = 1.69
const weightJohn = 92
const heightJohn = 1.95

const weightMark2 = 95
const heightMart2 = 1.88
const weightJohn2 = 85
const heightJohn2 = 1.76

const calBMI = (weight, height) => (
  weight / (height * height)
)


const BMIMark = calBMI(weightMark, heightMart);
const BMIJohn = calBMI(weightJohn, heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

const BMIMark2 = calBMI(weightMark2, heightMart2);
const BMIJohn2 = calBMI(weightJohn2, heightJohn2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log('BMI của Mark test 1:', BMIMark.toFixed(2));
console.log('BMI của John test 1:', BMIJohn.toFixed(2));


if (markHigherBMI) {
  console.log("BMI của Mark (" + BMIMark.toFixed(2) + ") hơn John (" + BMIJohn.toFixed(2) + ")");
} else {
  console.log("BMI của John (" + BMIJohn.toFixed(2) + ") hơn Mark (" + BMIMark.toFixed(2) + ")");
}


console.log('BMI của Mark test 2:', BMIMark2.toFixed(2));
console.log('BMI của John test 2:', BMIJohn2.toFixed(2));

if (markHigherBMI2) {
  console.log("BMI của Mark (" + BMIMark2.toFixed(2) + ") hơn John (" + BMIJohn2.toFixed(2) + ")");
} else {
  console.log("BMI của John (" + BMIJohn2.toFixed(2) + ") hơn Mark (" + BMIMark2.toFixed(2) + ")");
}

