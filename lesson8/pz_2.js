function delayedGreeting(duration, message) {
    return new Promise((resolve, reject) => {
        if (duration > 10_000) {
            return reject("Duration is too long");
        }
        setTimeout(() => {
            resolve(message)
        }, duration)
    })
}

function handleSubmit(event) {
    console.log(event.elements);
    const data = new FormData(event.target);
    delayedGreeting(Number(data.get("delay")), data.get("message"))
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.log(`error: ${error}`);
        });
}