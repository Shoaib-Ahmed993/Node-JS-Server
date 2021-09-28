// const square = {
//     area: (a) => (a * a),
//     perimeter: (a) => (4 * a),
// }

const square = require('./square')

const calcSquare = (a) => {
    console.log(`The value of a is ${a} and the area is ${square.area(a)}`)
    console.log(`The value of a is ${a} and the perimeter is ${square.perimeter(a)}`)
}

// console.log(__filename);
// console.log(__dirname)

calcSquare(5)