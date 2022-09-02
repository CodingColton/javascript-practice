const main_number = document.getElementById("main-number");
const main_button = document.getElementById("main-button");

main_button.onclick = increaseNumber = () => {
    number = main_number.innerHTML;
    number++;
    main_number.innerHTML = number;
};