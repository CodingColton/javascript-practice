
const inputField = document.getElementById('inputField');
const addToListButton = document.getElementById('addToListButton');
const itemList = document.getElementById('itemList');

addToListButton.addEventListener('click', addFunction = () => {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    itemList.appendChild(paragraph);
    inputField.value = "";
    return paragraph;
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = inputField.value;
        itemList.appendChild(paragraph);
        inputField.value = "";
        return paragraph;
    }
});

sum = () => {
    return sum(1 + 2);
}

module.exports = addFunction;
module.exports = sum;