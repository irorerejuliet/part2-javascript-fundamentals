

let hasDriversLicense = false;
const passTest = true;


if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');


const interface = 'Audio';

function logger(){
    console.log('My name is juliet!');
}

// This is calling, running invoking function
logger()
logger()
logger()

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function juliet(june, may){
    const birthmonth = `juliet was birth in ${june} and amina was birthed in ${may} samme year!`;
    return birthmonth;
}

const ageJuliet = juliet(6, 8);
console.log(ageJuliet);


const gernini = juliet(2,8);
console.log(gernini);

// function declearation
function calAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1)

function greet(){
    return "Hello Juliet"
}
console.log(greet());

function firstname(name){
    return name;
}

const lastname = firstname("IRORERE");
const otherName = firstname("JULIET");
console.log(lastname, otherName);

function square(number){
return number * number;
}
 const newNumber = square(7);
 console.log(newNumber);

function isEven(number){
    return number / 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));


function isEven(number){
    if(number / 2 === 0){
        return `${number} is even`;
    }else {
        return `${number} is odd`;
    }
}

console.log(isEven(10));
console.log(isEven(17));
console.log(isEven(0));

function maxOfTwo(a, b){
    return a > b ? a : b;
}
console.log(maxOfTwo(20, 80));


function sumRange(start, end){
    return (end -start + 1) * (start + end) / 2;
}
console.log(sumRange(1, 30));


function reverseString(str){
    let reversed = "";
    let i = str.length - 1;
    while (i >=0){
        reversed +=str[i]
    }
    return reversed;
}
 console.log(reverseString("Irorere"));
 
 





// function expression
const calAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calAge2(1991);
console.log(age1, age2);

// Arrow functuon
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);


 const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
 }


