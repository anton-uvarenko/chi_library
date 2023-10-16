const evluateObj = {
    vals: [],
    operation: "+",
}

function handleBlur(event, index) {
    evluateObj.vals[index] = +event.target.value;
}

function handleChooseOperation(event) {
    evluateObj.operation = event.target.value;
}

function handleEvaluate() {
    switch (evluateObj.operation) {
    case "+":
        alert(evluateObj.vals.reduce((a, b) => a + b));
        break;
    case "-":
        alert(evluateObj.vals.reduce((a, b) => a - b));
        break;
    case "*":
        alert(evluateObj.vals.reduce((a, b) => a * b));
        break;
    case "/":
        alert(evluateObj.vals.reduce((a, b) => a / b));
        break;
    default:
        alert("unsupported operation");
    }
}
