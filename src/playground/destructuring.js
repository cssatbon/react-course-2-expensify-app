// Object destructuring

// const person = {
//   name: 'Bon',
//   age: 33,
//   location: {
//     city: 'Olympia',
//     temp: 54
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age} years old.`);

// setup default value
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age} years old.`);

// if (person.location.city && person.location.temp)
//   console.log(`It's ${person.location.temp} in ${person.location.city}`);

// const { city, temp } = person.location;
// if (city && temp)
//   console.log(`It's ${temp} in ${city}`);

// rename local variables
// rename temp to temperature
// const { city, temp: temperature } = person.location;
// if (city && temperature)
//   console.log(`It's ${temperature} in ${city}`);
  
// //--------------------------------

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// Array destructuring

const address = ['2322 14th Ave SW', 'Olympia', 'Washington', '33222'];

const [, city, state = 'New York'] = address;

console.log(`You're in ${city} ${state}`);

const item = ['Coffee (cold)', '$2.00', '$10.33', '$2.75'];
const [a, , cost] = item;

console.log(`${a} costs ${cost}`);

