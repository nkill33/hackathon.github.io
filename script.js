// JavaScript code for handling the to-do list and Pomodoro timer
const tasksList = document.getElementById('tasks');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function () {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
        tasksList.appendChild(taskItem);
        newTaskInput.value = '';

        taskItem.addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });
    }
});

const timerDisplay = document.getElementById('timer');
const startTimerButton = document.getElementById('start-timer');
const resetTimerButton = document.getElementById('reset-timer');
let timerInterval;

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = '00:00';
        }
    }, 1000);
}

startTimerButton.addEventListener('click', function () {
    if (!timerInterval) {
        startTimer(1500); // 25 minutes in seconds
    }
});

resetTimerButton.addEventListener('click', function () {
    clearInterval(timerInterval);
    timerInterval = null;
    timerDisplay.textContent = '25:00';
});
