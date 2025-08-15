const friends = ['Micheal', 'Steve', 'Peter'];
// push is to add element to the end of an array
const newLength = friends.push('jay');
console.log(friends);

// unshift is to add element to the begining of an array
friends.unshift('john');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// // Remove the fisrt element from the array
friends.shift();
console.log(friends);

console.log(friends.indexOf('steve'));
console.log(friends.indexOf('Bob'));


console.log(friends.includes('steve'));
console.log(friends.includes('Bob'));


const calcTip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
// // arrow function
// const calcTip2 = bills <= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips);



