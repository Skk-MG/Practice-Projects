const btns = document.querySelectorAll('.button')
const numberCounter = document.querySelector('.number');
let count = 0;

btns.forEach( function(btn) {
    btn.addEventListener('click', function(evt) {

        const counter = evt.currentTarget.classList;

        if (counter.contains('increase')) {
            count += 1;
        } else if (counter.contains('decrease')) {
            count -= 1;
        } else {
            count = 0;
        }

        if (count > 0) {
            numberCounter.style.color = "green";
        } else if (count < 0) {
            numberCounter.style.color = "red";
        } else {
            numberCounter.style.color = "#222";
        }

        numberCounter.textContent = count;
    })
})