const elems = document.getElementsByTagName('li');

for (let elem of elems) {
    elem.style.cursor = "pointer";
    elem.addEventListener("click", (event) => {
        if (elem.style.textDecoration === 'none' || elem.style.textDecoration === '') {
            elem.style.textDecoration = 'line-through';
            elem.style.color = "grey";
            return;
        }

        elem.style.textDecoration = 'none';
        elem.style.color = "black";
    })
}