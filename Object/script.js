// const julietArray = [
//     'juliet', 'Irorere', 2027 - 1991, 'teacher', ['Micheal', 'peter', 'Steven']
// ];

// const juliet = {
//   firstName: "Juliet",
//   lastName: "Irorere",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Micheal", "peter", "Steven"],
// };
// console.log(juliet);

// // How to change and retrieve data
// // dot notation
// console.log(juliet.lastName);
// // bracket notation
// console.log(juliet['lastName']);

// const nameKey = 'Name';
// console.log(juliet['first' + nameKey]);
// console.log(juliet['last' + nameKey]);


// const interestedIn = prompt('What do you want to know abouth Juliet? Choose betweem firstName, lastName, age, job, and friends');


// if (juliet[interestedIn]){
//     console.log(juliet[interestedIn]);
// }else{
//     console.log('Wroung request! Choose between firstName, lastName, age, job, and friends');
// }

// // how to use dot notaion and bracket notation to add value to an object
// juliet.location = 'Nigeria';
// juliet['twitter'] = '@rorerejuliet';
// juliet.address = '23, Aruagbon street off upper sokponba road benin city';
// console.log(juliet);

// // challengejob = Juliet has 3 friends and the best friend is called micheal
// console.log(`${juliet.firstName} has ${juliet.friends.length} friends, and his bestfriend is called ${juliet.friends[0]}`);


const juliet = {
  firstName: "Juliet",
  lastName: "Irorere",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "peter", "Steven"],
  hasDriverLicense: true,

  //   calcAge: function (birthYear){
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   }

  calcAge: function () {
    this.age = 2037 -this.birthYear
    return this.age;
  },

   getSummary: function () {
return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
}
};

console.log(juliet.calcAge());

console.log(juliet.age);

// challenge
// Juliet is a 46-years old teacher, and has a drivers lience

console.log(juliet.getSummary());


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMi: function (){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMi()
john.calcBMi();
console.log(mark.bmi, john.bmi);


// JOHN SMITH'S BMI (28. 3) IS HIGHER THAN MARK MILLER'S (23.9)

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
}else if (john.bmi > mark.bmi){
    console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
    );
}

