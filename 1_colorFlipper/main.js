const colorsArray = ["Red", "Green", "Rgba(133,122,200)", "#19191f"];

const btn = document.getElementById('colorsButton');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorsArray[randomNumber];
    color.textContent = colorsArray[randomNumber];
});

function getRandomNumber() {
   return Math.floor(Math.random() * colorsArray.length);
}