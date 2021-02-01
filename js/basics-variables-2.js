const userNumber = prompt("Give me a number!")

const userSquare = userNumber * userNumber

const userCircle = userSquare * Math.PI

console.log(userCircle)

const squareStatement = `The area of a square with a side length of ${userNumber} would have an area of  ${userSquare}`

const circleStatement = `The area of a circle with a radius of ${userNumber} would have an area of  ${userCircle}`

document.querySelector('h1').innerHTML = squareStatement

document.querySelector('h2').innerHTML = circleStatement