

// let hasDriversLicense = false;
// const passTest = true;


// if(passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


// const interface = 'Audio';

// function logger(){
//     console.log('My name is juliet!');
// }

// // This is calling, running invoking function
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function juliet(june, may){
//     const birthmonth = `juliet was birth in ${june} and amina was birthed in ${may} samme year!`;
//     return birthmonth;
// }

// const ageJuliet = juliet(6, 8);
// console.log(ageJuliet);


// const gernini = juliet(2,8);
// console.log(gernini);

// // function declearation
// function calAge1(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calAge1(1991);
// console.log(age1)

// function greet(){
//     return "Hello Juliet"
// }
// console.log(greet());

// function firstname(name){
//     return name;
// }

// const lastname = firstname("IRORERE");
// const otherName = firstname("JULIET");
// console.log(lastname, otherName);

// function square(number){
// return number * number;
// }
//  const newNumber = square(7);
//  console.log(newNumber);

// function isEven(number){
//     return number / 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));


// function isEven(number){
//     if(number / 2 === 0){
//         return `${number} is even`;
//     }else {
//         return `${number} is odd`;
//     }
// }

// console.log(isEven(10));
// console.log(isEven(17));
// console.log(isEven(0));

// function maxOfTwo(a, b){
//     return a > b ? a : b;
// }
// console.log(maxOfTwo(20, 80));


// function sumRange(start, end){
//     return (end -start + 1) * (start + end) / 2;
// }
// console.log(sumRange(1, 30));


// function reverseString(str) {
//   let reversed = "";
//   let i = str.length - 1;
//   while (i >= 0) {
//     reversed += str[i];
//     i--; // move to the next character
//   }
//   return reversed;
// }

// console.log(reverseString("Irorere"));

 





// function expression
// const calAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calAge2(1991);
// console.log(age1, age2);

// Arrow functuon
// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearUntilRetirement = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 -age;
//     return retirement;
// }
// console.log(yearUntilRetirement(1991));


// const square = number => number * number;
// const totalNumber = square(10);
// console.log(totalNumber);



// const greet = name => `Hello ${name}`;
// console.log(greet("Juliet"));


// const isEven = n => n / 2 === 0;
// console.log(isEven(8));
// console.log(isEven(15));

// const max = (a, b) => (a >  b ? a : b);

// console.log(max(6, 7));
// console.log(max(17, 20));

// function cutFruitPieces (fruit){
//     return fruit * 4;
// }

// function fruitProcessor (apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces}  pieces of apple and ${orangesPieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// function generatePassword(length) {
//     function getRandomLetter() {
//         const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         return letters[Math.floor(Math.random() * letters.length)];
//     }

//     function getRandomNumber() {
//         const numbers = "0123456789";
//         return numbers[Math.floor(Math.random() * numbers.length)];
//     }

//     function getRandomSymbol() {
//         const symbols = "!@#$%^&*";
//         return symbols[Math.floor(Math.random() * symbols.length)];
//     }

//     let password = "";
//     const generators = [getRandomLetter, getRandomNumber, getRandomSymbol];

//     for (let i = 0; i < length; i++) {
//         // Pick a random generator function
//         const randomGen = generators[Math.floor(Math.random() * generators.length)];
//         password += randomGen();
//     }

//     return password;
// }

// console.log(generatePassword(8)); // Example: a7T@c9L!



const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

const calAge1 = firstName => "Juliet IRORERE";

console.log(calAge1());

