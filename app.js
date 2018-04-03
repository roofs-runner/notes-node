console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

console.log('Args command', command);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  return _.isNil(note) ? console.log('Note was not created') : console.log(`Title: ${note.title} was created!!!`);
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  var note = notes.readNote(argv.title);

  debugger;

  console.log('read note', note);
  return note ? console.log(`Here is the note: title: ${note.title}, body: ${note.body}`) : console.log('Error');
} else if (command === 'remove') {
  var isNoteRemoved = notes.removeNote(argv.title);
  var message = isNoteRemoved ? `Note ${argv.title} was successfully removed!` : 'error';
  console.log(message);
} else {
  console.log('Command not recognized');
}
