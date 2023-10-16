const evaluateObj = {
    vals: [""],
    operations: [],
    lastMoveSelectOperation: false,
    currentIndex: 0,
}

function appendNumber(event) {
    if (evaluateObj.vals.length < evaluateObj.currentIndex + 1) {
        evaluateObj.vals.push("");
    }
    evaluateObj.vals[evaluateObj.currentIndex] += event.target.value;
    evaluateObj.lastMoveSelectOperation = false;
}

function appendOperation(event) {
    if (evaluateObj.lastMoveSelectOperation) {
        evaluateObj.operations[evaluateObj.operations.length - 1] = event.target.value;
        return
    }

    evaluateObj.operations.push(event.target.value);
    evaluateObj.vals[evaluateObj.currentIndex] = +evaluateObj.vals[evaluateObj.currentIndex];
    evaluateObj.currentIndex++;
    evaluateObj.lastMoveSelectOperation = true;
}

function evaluateResult() {
    if (evaluateObj.operations.length === 0) {
        alert("operation wasn't selected");
        return
    }

    evaluateObj.vals[evaluateObj.vals.length - 1] = +evaluateObj.vals[evaluateObj.vals.length - 1];

    let accumulator = evaluateObj.vals[0];
    let operationIndex = 0;
    for (let i = 1; i < evaluateObj.vals.length; i++) {
        switch (evaluateObj.operations[operationIndex]) {
            case '+':
                accumulator += evaluateObj.vals[i];
                break;
            case '-':
                accumulator -= evaluateObj.vals[i];
                break;
            case '*':
                accumulator *= evaluateObj.vals[i];
                break;
            case '/':
                accumulator /= evaluateObj.vals[i];
                break;
        }

        operationIndex++;
    }

    alert(accumulator);

    evaluateObj.vals = [""];
    evaluateObj.lastMoveSelectOperation = false;
    evaluateObj.operations = [];
    evaluateObj.currentIndex = 0;
}