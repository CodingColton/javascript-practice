const input_field = document.getElementById("password-input");
const submit_button = document.getElementById("submit-button");

let p = new Promise((resolve, reject) => {
    if (submit_button.id == "submit-button") {
        resolve('The correct button loaded.');
    } else {
        reject('The button did not load correctly.');
    }
});

p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});