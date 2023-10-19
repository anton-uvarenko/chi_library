let tasks = ["task1", "task2","task3"];
console.log(tasks.length);

console.log(tasks.pop());

tasks.unshift("task0")
console.log(tasks)

localStorage.setItem("tasks", JSON.stringify(tasks));

let storedTasks = JSON.parse(localStorage.getItem("tasks"))
console.log(storedTasks);

storedTasks[0] = "task0 + 0";
localStorage.setItem("tasks", JSON.stringify(storedTasks));

localStorage.removeItem("tasks");