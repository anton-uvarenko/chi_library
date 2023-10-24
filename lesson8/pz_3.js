function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    fetch(`https://http.dog/${data.status}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementsByTagName('img')[0].src = data.message
        })
        .catch(error => console.error(error))
}