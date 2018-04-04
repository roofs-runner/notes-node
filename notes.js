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
  return fetchNotes();
}

var readNote = (title) => {
  var notes = fetchNotes();

  var noteToRead = notes.filter((note) => note.title === title);
  return noteToRead[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  readNote: readNote,
  removeNote: removeNote
}
