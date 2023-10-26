function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData);

    const requestObject = {
        name: dataObj.name,
        data: {
            year: dataObj.year,
            price: +dataObj.price,
        }
    }
    console.log(requestObject);
    fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        body: JSON.stringify(requestObject),
    })
        .then((res) => res.json())
        .then((res) => {
            const span =document.getElementsByTagName("span")[0];
            span.innerHTML = res.createdAt;
        })
}