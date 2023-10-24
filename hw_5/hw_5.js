const tableData = [];

const spans = document.getElementsByTagName('span');
let index = 0;
for (const span of spans) {
    tableData.push(span.innerHTML);
    switch (span.className) {
        case "time":
            span.addEventListener("click", () => activateInput(span, index, timeValidation));
            break;
        default:
            span.addEventListener("click", () => activateInput(span, index, () => true));
            break;
    }
    index++;
}

function timeValidation(str) {
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function activateInput(elem, index, validation) {
    const data = elem.innerHTML;
    elem.innerHTML = "";
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.value = data;
    input.addEventListener("blur", () => {
        if (validation(input.value)) {
            elem.innerHTML = input.value;
            tableData[index] = input.value;
            return;
        }

        elem.innerHTML = data;
    })
    input.style.border = "none";
    elem.appendChild(input)
    input.focus();
}


function addLesson() {
    const table = document.getElementsByClassName("table-body")[0];
    if (!table) {
        console.log("no table");
        return;
    }
    const tr = document.createElement("tr");
    tr.insertCell();
    tr.insertCell();
    tr.insertCell();
    tr.insertCell();
    tr.insertCell();
    for (let cell of tr.cells) {
        const id = table.children.length * 5 + cell.cellIndex;
        const tableDataId = table.children.length * 10 + cell.cellIndex;
        const subject = document.createElement("span");
        subject.addEventListener("click", () => activateInput(subject, tableDataId,  () => true));
        subject.innerHTML = "subject"
        tableData.push(subject.innerHTML);

        cell.appendChild(subject);
        const time = document.createElement("span");
        time.addEventListener("click", () => activateInput(time, tableDataId + 1, timeValidation));
        time.className = "time";
        time.innerHTML="time";
        cell.appendChild(time);
        tableData.push(time.innerHTML);

        const button = document.createElement("button");
        button.addEventListener("click", () => deleteCellInformation(id));
        button.innerHTML = "X";
        cell.appendChild(button);
    }
    table.appendChild(tr);
}

function deleteCellInformation(cellId) {
    console.log(cellId);
    const td = document.getElementsByTagName('td')[cellId];
    for (let child of td.children) {
        if (child.tagName === "SPAN") {
            child.innerHTML = "subject";
        }
        if (child.tagName === "SPAN" && child.className === "time") {
            child.innerHTML = "time";
        }
    }
}

function addToCache() {
    const data = JSON.stringify(tableData);
    localStorage.setItem("tableData", data);
}

function clearCache() {
    localStorage.clear();
}

function printCache() {
    console.log(localStorage.getItem("tableData"));
}