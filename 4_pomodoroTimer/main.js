const timer = document.getElementById('timer');
const timerStart = document.getElementById('btnStart');
const timerStop = document.getElementById('btnStop');
const timerReset = document.getElementById('btnReset');

let interval;
let timeLeft = 1500;
let isRunning = false;

function updateTimer() {

    let seconds = timeLeft % 60;
    let minutes = Math.floor( timeLeft / 60 );
    let actualTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

    timer.innerHTML = actualTime;
};

function startTimer() {

    if (isRunning === false) {
        interval = setInterval( () => {
            timeLeft -= 1;
            isRunning = true;
            updateTimer();
    
            if (timeLeft === 0) {
                clearInterval(interval);
                Swal.fire({
                    title: "Time's Up!",
                    text: "Click the Reset Button to Restart",
                    background: "#fff",
                    icon: "warning"
                });
                timeLeft = 0;
                isRunning = false;
                updateTimer();
            }
        }, 1000)
    } 
};

function resetTimer() {

    Swal.fire({
        title: "Reset?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#26ba33",
        cancelButtonColor: "#bb2525",
        confirmButtonText: "Yes"

      }).then((result) => {
        if (result.isConfirmed) {

            isRunning = false;
            clearInterval(interval);
            timeLeft = 1500;
            updateTimer();
        }
    });
};

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

timerStart.addEventListener('click', startTimer);
timerReset.addEventListener('click', resetTimer);
timerStop.addEventListener('click', stopTimer);
