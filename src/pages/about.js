// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"


// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About</title>
      <h1>About</h1>
      <p>
        I'll be the roundabout
        The words will make you out-and-out
        I spend the day your way
        Call it morning driving through the sound and in and out the valley

        The music dance and sing
        They make the children really ring
        I spend the day your way
        Call it morning driving through the sound and in and out the valley

        In and around the lake
        Mountains come out of the sky and they stand there
        One mile over, we'll be there and we'll see you
        Ten true summers, we'll be there and laughing, too
        Twenty-four before my love, you'll see I'll be there with you

        I will remember you
        Your silhouette will charge the view
        Of distant atmosphere
        Call it morning driving through the sound and even in the valley

        In and around the lake
        Mountains come out of the sky and they stand there
        One mile over, we'll be there and we'll see you
        Ten true summers, we'll be there and laughing, too
        Twenty-four before my love, you'll see I'll be there with you

        Along the drifting cloud, the eagle searching down on the land
        Catching the swirling wind, the sailor sees the rim of the land
        The eagle's dancing wings create as weather spins out of hand
        Go closer, hold the land feel partly no more than grains of sand
        We stand to lose all time, a thousand answers by in our hand
        Next to your deeper fears, we stand surrounded by a million years
        I'll be the roundabout, the words will make you out-and-out
        I'll be the roundabout, the words will make you out-and-out

        In and around the lake
        Mountains come out of the sky, they stand there
        Twenty-four before my love and I'll be there
      </p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
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
