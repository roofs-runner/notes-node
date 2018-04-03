console.log('Starting notes.js...');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes.json');
    return JSON.parse(notesString);
  } catch (error) {
    console.log('Error happened', error);
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  
  var notes = fetchNotes();
  
  var note = {
    title,
    body
  }
  
  var duplicateNotes = notes.filter((note) => note.title === title);
  
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var listNotes = () => {
  console.log('Listing existing notes');
}

var readNote = (title) => {
  console.log('Reading note', title);
}

var removeNote = (title) => {
  console.log('Removing note', title);
}

module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  readNote: readNote,
  removeNote: removeNote
}
