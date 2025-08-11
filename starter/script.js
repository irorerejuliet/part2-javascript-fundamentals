

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


