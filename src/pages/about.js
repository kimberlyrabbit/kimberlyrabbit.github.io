// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
//
// class theMostBeautifulGirlInTheWorld {
//   constructor() {
//     this.firstName = 'Kimberly';
//     this.lastName = 'Rabideau';
//     this.id = 666;
//     this.fullName = function() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   }
// }
//
// const babe = new theMostBeautifulGirlInTheWorld();
//
// console.log(babe.fullName());
//
// idExponent = babe.id.toExponential();
// idString = babe.id.toString();
// console.log(idExponent);
// console.log(idString);
//
// class Today {
//   constructor() {
//     this.date = new Date();
//   }
// }
//
// const time = new Today();
// let hours = time.date.getHours();
// hoursExponent = hours.toExponential();
// hoursFixed = hours.toFixed(3);
// timeEnglish = time.date.toLocaleString('en-GB', { timeZone: 'UTC' });
// timeKorean = time.date.toLocaleString('ko-GB', { timeZone: 'UTC' });
// hoursPrecision = hours.toPrecision(3);
// timeString = time.date.toString();
// console.log(hoursExponent);
// console.log(hoursFixed);
// console.log(timeEnglish);
// console.log(timeKorean);
// console.log(hoursPrecision);
// console.log(timeString);
// filter()
//
// const randomNumbers = [375, 200, 3.14, 7, 13, 852];
//
// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter(num => {
//   return num < 250;
// });
//
// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
//
//
// // Call .filter() on favoriteWords below
// const longFavoriteWords = favoriteWords.filter(word => {
//   return word.length > 7;
// })
