const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('colorsButton');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {

    let hexColor = "#";

    for (i = 0; i < 6; i += 1) {
        hexColor += hexArray[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexArray.length);
 }