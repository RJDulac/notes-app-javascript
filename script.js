const notes = [
  {
    title: "My Next Trip",
    body: "I would like to go to France"
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better"
  },
  {
    title: "Socialize",
    body: "Go to programming meetups"
  }
];

const noteP = document.getElementsByClassName("note");

document.getElementById("btn-create").addEventListener("click", () => {
  console.log("todo created");
});
// document.getElementById("btn-remove").addEventListener("click", () => {
//   console.log("Remove all");
//   document.querySelectorAll(".note").forEach(note => {
//     note.remove();
//   });
// });

const filters = {
  searchText: ""
};

//match notes to filtered notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  //clear div to get rid of old filtered notes
  document.getElementById("rootNotes").innerHTML = "";

  //add filtered notes to root
  filteredNotes.forEach(note => {
    const noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    document.getElementById("rootNotes").appendChild(noteElement);
  });
};

//call before user interacts
renderNotes(notes, filters);

document.getElementById("search-text").addEventListener("input", e => {
  filters.searchText = e.target.value;
  //call when user interacts
  renderNotes(notes, filters);
});

// document.getElementById("name-form").addEventListener("submit", e => {
//   e.preventDefault();
//   //get form field value

//   const fromInfo = e.target.elements.firstName.value;
//   console.log(fromInfo);
//   e.target.elements.firstName.value = "";
// });
// document.getElementById("for-fun").addEventListener("change", e => {
//   console.log(e.target.checked);
// });
document.getElementById("filter-by").addEventListener("change", e => {
  console.log(e.target.value);
});
