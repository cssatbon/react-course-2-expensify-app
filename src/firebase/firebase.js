import * as firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// }, (e) => {
//   console.log('Error fetching data', e)
// })

// child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'phone bill',
//   note: '',
//   amount: 195,
//   createdAt: 0
// })

// database.ref().set({
//   name: 'Bon H',
//   age: 54,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Olympia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// remove
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed.')
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e)
//   })

// Change stressLevel to 9
// Change job.company to Amazon
// Change location.city to Seattle
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// fetch data - using once we get data a single time
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

  // using on will refresh data
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//   console.log('Error fetching data', e)
// })
  
// setTimeout(() => {
//   database.ref('age').set(58)
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(59)
// }, 10500);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// })