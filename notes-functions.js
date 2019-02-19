//Read existing notes from localStorage

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//Genertate the DOM structure for a note
const generateNoteDOM = note => {
  const noteElement = document.createElement("p");
  if (note.title.length > 0) {
    noteElement.textContent = note.title;
  } else {
    noteElement.textContent = "Unnamed note";
  }
  return noteElement;
};

//Render application notes
//match notes to filtered notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  //clear div to get rid of old filtered notes
  document.getElementById("rootNotes").innerHTML = "";

  //add filtered notes to root
  filteredNotes.forEach(note => {
    const noteElement = generateNoteDOM(note);
    document.getElementById("rootNotes").appendChild(noteElement);
  });
};

//save the notes to localStorage
const saveNotes = notes => localStorage.setItem("notes", JSON.stringify(notes));
