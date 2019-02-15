let notes = [];

const noteP = document.getElementsByClassName("note");

// document.getElementById("btn-remove").addEventListener("click", () => {
//   console.log("Remove all");
//   document.querySelectorAll(".note").forEach(note => {
//     note.remove();
//   });
// });

const filters = {
  searchText: ""
};
//check for existing saved data
const notesJSON = localStorage.getItem("notes");

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}
// const user = {
//   name: "Ryan",
//   age: 36
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);

// const userJSON = localStorage.getItem("user");
// const user = JSON.parse(userJSON);
// console.log(user.age);

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
    if (note.title.length > 0) {
      noteElement.textContent = note.title;
    } else {
      noteElement.textContent = "Unnamed note";
    }

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

// localStorage.setItem("location", "Virginia");
// console.log(localStorage.getItem("location"));
// localStorage.removeItem("location");
//delete all in local storage
// localStorage.clear();
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

document.getElementById("btn-create").addEventListener("click", e => {
  notes.push({
    title: "",
    body: ""
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  //rerender
  renderNotes(notes, filters);
});
