const main_number = document.getElementById("main-number");

const increaseNumber = function() {
    number = main_number.innerHTML;
    number++;
    main_number.innerHTML = number;
};