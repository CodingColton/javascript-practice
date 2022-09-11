const inputField = document.getElementById('inputField');
const addToListButton = document.getElementById('addToListButton');
const itemList = document.getElementById('itemList');

addToListButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    itemList.appendChild(paragraph);
    inputField.value = "";
});