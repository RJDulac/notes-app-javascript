const notes = getSavedNotes();

const noteP = document.getElementsByClassName("note");

const filters = {
  searchText: ""
};
//call before user interacts
renderNotes(notes, filters);

document.getElementById("search-text").addEventListener("input", e => {
  filters.searchText = e.target.value;
  //call when user interacts
  renderNotes(notes, filters);
});

document.getElementById("filter-by").addEventListener("change", e => {
  console.log(e.target.value);
});

document.getElementById("btn-create").addEventListener("click", e => {
  notes.push({
    title: "",
    body: ""
  });
  saveNotes(notes);
  //rerender
  renderNotes(notes, filters);
});
