console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  return _.isNil(note) ? console.log('Note was not created') : console.log(`Title: ${note.title} was created!!!`);
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
