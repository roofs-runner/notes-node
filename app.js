console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();

var filteredArray = _.uniq();

console.log(values);

// var res = notes.addNote();
// console.log(res);

// fs.appendFile('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
