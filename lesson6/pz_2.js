function addMark(id) {
    const marks = document.getElementsByClassName("marks");
    const markToAdd = prompt("");
    setTimeout(() => {
        marks[id].innerHTML += " " + markToAdd;
    }, 1000);
}