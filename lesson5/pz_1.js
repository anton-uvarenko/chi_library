function createStudent(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades,
    }
}

function printData(student) {
    console.log("name: ", student.name);
    console.log("age: ", student.age);
    console.log("grades: ", calculateAverageGrade(student.grades))
}

function calculateAverageGrade(grades) {
    if (grades.length < 3) {
        console.log("not enough grades")
        return;
    }

    let sum = 0;
    for (let grade of grades) {
        sum += +grade;
    }

    return sum/grades.length;
}

let student = createStudent("anton", 19, [2, 3, 4, 5]);
printData(student);