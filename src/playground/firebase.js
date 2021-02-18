// child_removed
firebase.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
firebase.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
firebase.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// const database = firebase.database();

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses)
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// firebase.ref('expenses').push({
//   description: 'book',
//   note: '',
//   amount: 2200,
//   createdAt: 0
// });
// firebase.ref('expenses').push({
//   description: 'phone',
//   note: '',
//   amount: 1000,
//   createdAt: 0
// });
// firebase.ref('expenses').push({
//   description: 'lap top',
//   note: '',
//   amount: 2200,
//   createdAt: 0
// });

// firebase.ref('notes/key').update({
//   body: 'update body'
// });

// firebase.ref('notes/key').remove();

// database.ref().push({
//   title: 'To do',
//   body: 'Go for the run'
// });

//const firebaseNotes = {
//   notes: {
//     abkdkd: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     dkdkdkdkdkdk: {
//       title: 'Another note',
//       body: 'This is my title'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: 'abcdef',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref('job/title').set('IT manager');

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// fetching data from firebase
// database.ref()  // or specific element .ref('location') or .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });


// database.ref().set({
//   name: 'Bon Huynh',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Olympia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console('Did not remove data', e)
//   });