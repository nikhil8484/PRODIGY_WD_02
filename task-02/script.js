let stopwatchInterval;
let startTime;
let elapsedTime = 0;
let laps = [];

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const lapsList = document.getElementById('lapsList');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(updateStopwatch, 10);

    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    lapButton.disabled = false;
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);

    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    laps = [];
    updateStopwatch();
    updateLaps();

    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    lapButton.disabled = true;
}

function recordLapTime() {
    laps.unshift(elapsedTime);
    updateLaps();
}

function updateStopwatch() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const totalSeconds = Math.floor(time / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((time % 1000) / 10);

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
    stopwatchDisplay.textContent = formattedTime;
}

function updateLaps() {
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
        const li = document.createElement('li');
        li.textContent = `Lap ${index + 1}: ${formatTime(lapTime)}`;
        lapsList.appendChild(li);
    });
}

function pad(number) {
    return number.toString().padStart(2, '0');
}

function formatTime(time) {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}
