const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of note',
  demand  : true,
  alias   : 't'
}

const bodyOption = {
  describe: 'Body of note',
  demand  : true,
  alias   : 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List note')
  .command('read', 'Read a note', {
    title: titleOption
  })
  .command('remove', 'Remove a note', {
    title: titleOption
  })
  .help()
  .argv;
const command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  return _.isNil(note) ? console.log('Note was not created') : console.log(`Title: ${note.title} was created!!!`);
} else if (command === 'list') {
  var allNotes = notes.listNotes();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => console.log(note.title));
} else if (command === 'read') {
  var note = notes.readNote(argv.title);
  
  console.log('read note', note);
  return note ? console.log(`Here is the note: title: ${note.title}, body: ${note.body}`) : console.log('Error');
} else if (command === 'remove') {
  var isNoteRemoved = notes.removeNote(argv.title);
  var message = isNoteRemoved ? `Note ${argv.title} was successfully removed!` : 'error';
  console.log(message);
} else {
  console.log('Command not recognized');
}
