const student = {
    name: "",
    speciality: "",
}

function handleBlurName(event) {
    student.name = event.target.value;
}

function handleBlurSpeciality(event) {
    student.speciality = event.target.value;
}

function handleClick() {
    alert(student.name + " " + student.speciality);
}