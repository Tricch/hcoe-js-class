// const person = "Tricch";
// console.log(person);

// const age = prompt("How old are you?"); //String
// console.log(Number(age)); //Type Conversion

// const isValid = confirm("Are you above 18?");
// console.log(isValid);

// const p = prompt("P");
// const t = prompt("T");
// const r = prompt("R");
// let i = (p*t*r)/100;
// alert(`The interest for you principal is ${i}`);

// const gender = prompt("Enter you gender:");
// if(gender === 'm'){
//     alert(`You are male`);
// }else{
//     alert(`You are female`);
// }

// gender === "m"
//     ? alert(`You are male`)
//     : gender === "f"
//         ? alert(`You are female`)
//         : alert(`Others`);



// switch(gender){
//     case "m":
//         alert("You are male");
//         break;
//     case "f":
//         alert("You are female");
//         break;
//     case "o":
//         alert("You are Other");
//         break;
//     default:
//         alert("Invalid Gender");
// }

// const grade = prompt("Enter your grade:");
// switch (true) {
//     case grade > 80:
//         alert("A");
//         break;
//     case grade > 60 && grade < 80:
//         alert("B");
//         break;
//     default:
//         alert("C");
// }

// const user = prompt("Enter username:");
// const pass = prompt("Enter password:");
// (user === "trilok" && pass === "trilok") ? alert(`Welcome ${user}`) : alert("Invalild Credentials");

// let i = 1;
// while (i <= 10) {
//     console.log("13 * " + i + " = " + 13 * i);
//     i++;
// }

// const fname = "trilok";
// const lname = "chaudhary";
// const firstName = fname.slice(0, 1).toUpperCase().concat(fname.slice(1, fname.length));
// console.log(firstName);

// const num1 = prompt("Enter number:");
// const formattedNumber = num1.toLocaleString();
// console.log(formattedNumber);

// const sum = (n1, n2) => {
//     return n1 + n2;
// };
// const result = sum(110, 200)
// console.log(result);



// ################################################## Function #############################################################

// 1. Default function
// const paging = (num = 5) => {
//     console.log(num);
// };
// paging(1); // 1
// paging(); // 5


// 2. Closure function

// 3. IIFE(Immediately Invoked Function Expression)
// (() => {
//     console.log("hello");
// })();

// 4. Explicit function
// const sum = (n1, n2) => {
//     return n1 + n2;
// };
// const result = sum(110, 200)
// console.log(result);

// 5. Implicit Function
// const sum = (n1, n2) => n1 + n2;

// Q1. Write a JS function that reverses a number.
// const reverse = (num) => Number(String(num).split('').reverse().join(''));
// let result = reverse(32243);
// console.log(result);

// Q2. Write a JS program to convert temperature
// const tempConverter = (temp, deg = 'c') =>
//     deg === 'c' ? `${temp}F = ${(temp - 32) * 5 / 9}C` : `${temp}C = ${(temp / 5) * 9 + 32}F`;
// const result = tempConverter(140);
// console.log(result);


// Object
// const laptop = {
//     model: "Apple",
//     name: "M1 Pro",
//     modelYear: 2021,
//     age: () => 2024 - laptop.modelYear,
//     fullName: function () {
//         return this.model + this.name;
//     }
// }
// const laptopModel = laptop.model;
// console.log(laptopModel);

// // Destructure
// const { model, fullName, ...rest } = laptop;
// console.log(rest);


// let prod = {
//     name: "headphones",
//     price: 83.7,
//     discount: "7%"
// };
// const getNewProd = (product) => {
//     const { price, discount, ...rest } = product;
//     const discountAmount = price > 100 ? price - (price * 0.1) : price - (price * 0.07);
//     rest.price = discountAmount;
//     rest.discount = price > 100 ? "10%" : "7%";
//     return rest;
// }
// const newProd = getNewProd(prod);
// console.log(newProd);

// Compare
// let foodA = ['Noodles', 'Pasta', 'Ice-cream'];
// let foodB = ['Fries', 'Ice-cream', 'Pizza'];
// const getCommon = (arrA, arrB) => arrA.filter((item) => arrB.includes(item));
// const result = getCommon(foodA, foodB);
// console.log(result);


// Sort
// const classes = [
//     { name: "Ram", age: 20 },
//     { name: "Sita", age: 15 },
//     { name: "Shyam", age: 40 },
// ];
// const ageSorter = (arr) => {
//     return arr.sort((a, b) => a.age - b.age);
// };
// const result = ageSorter(classes);
// console.log(result);

// largest country by length
// const countries = ["Nepal", "USA", "Australia"];
// // const getLargest = (arr) => arr.sort((a, b) => b.length - a.length)[0];
// const getLargest = (arr) => arr.sort((a, b) => a.length - b.length)[arr.length - 1];
// const result = getLargest(countries);
// console.log(result);

// const largestCountry = (arr) => {
//     let largest = "";
//     arr.map((country) => {
//         if (largest.length > country.length) {
//             return;
//         } else {
//             largest = country;
//         }
//     });
//     return largest;
// }

// // Comapare two roles and return boolean if role matches
// const sysRole = ['admin', 'manager'];
// const userRole = ['user', 'receptionist', 'manager'];
// const roleChecker = (arrA, arrB) => (arrA.some((item) => arrB.includes(item))) ? true : false;
// const result = roleChecker(sysRole, userRole);
// console.log(result);


// Get the total number of characters by eye color
// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];
// const eyeColor = (arr) => {
//     return arr.reduce((a, b) => {
//         const color = b.eye_color;
//         if (a[color]) {
//             a[color]++;
//         } else {
//             a[color] = 1;
//         }
//         return a;
//     }, {});
// };
// const result = eyeColor(characters);
// console.log(result);