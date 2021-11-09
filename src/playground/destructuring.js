// const person = {
//   name: 'Bon Huynh',
//   age: 22,
//   location: {
//     city: 'Olympia',
//     temp: 55
//   }
// }

// //const { name, age } = person

// // set default value
// // const { name = 'Anonymous', age } = person

// // rename and set default value
// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// // const { city, temp } = person.location
// // if (city && temp) {
// //   console.log(`It's ${temp} in ${city}`)
// // }

// // rename object variables
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)

//
// Array destructuring
//
const address = ['1234 14th Ave SW', 'Olympia', 'Washington', '98502']

//console.log(`You're in ${address[1]} ${address[2]}.`)

//const [street, city, state, zip] = address // it matches up by position

// I don't want to destructure all items i can skip it
const [, city, state] = address
console.log(`You're in ${city} ${state}.`)
