const noteCreate = document.querySelector(".note-creater");
const noteContainer = document.querySelector(".input-space");
let notes = document.querySelectorAll(".input");
let deleteIcon = document.querySelector(".input img");


function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

function createNote() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src="delete-images.png";
    inputBox.classList.add("input");
    inputBox.setAttribute("contenteditable", "true");
    noteContainer.appendChild(inputBox).appendChild(img);
};

noteCreate.addEventListener("click", () => {
    createNote();
});

noteContainer.addEventListener("click", (e) => {
    if(e.target.nodeName === "IMG") {
        let par = e.target.parentElement;
        par.remove();
        updateStorage();
    } else if(e.target.nodeName === "P") {
        notes = document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


