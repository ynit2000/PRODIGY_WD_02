let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const lapButton  = document.getElementById('lapButton');
const lapsList  = document.getElementById('laps');


function startStop(){
    // 
    if(isRunning){
        clearInterval
        startStopButton.textContent = 'Start';

    }else{
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'stop'
    }
    isRunning = !isRunning;
    
}

function updateTime(){
    //
    seconds++;
    display.textContent = formatTime(seconds);
}
function formatTime(seconds){
    //
    const hrs = Math.floor(seconds /3600)
    // const mins = hrs / 60;
    const mins = Math.floor((seconds /3600)/60)
    // const secs = Math.floor(seconds /3600)
    const secs = seconds % 60;

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    // return `${hrs}:${mins}:${secs}`;   --> run it's 60 sec only

}

function pad(num) {
    return num.toString().padStart(2, '0');
}


function reset(){
    //
    clearInterval(timer);
    seconds = 0;
    display.textContent = '00:00:00';
    isRunning = false;
    startStopButton.textContent = 'Start'
    laps = [];
    updateLaps();


}
function lap(){
    //
    laps.push(formatTime(seconds));
    updateLaps();

}
function updateLaps(){
    //
    lapsList.innerHTML = '';
    laps.forEach((lap, index) => {
        const li = document.createElement('li');
        li.textContent = `Lap ${index + 1}: ${lap}`;
        lapsList.appendChild(li); 
    })
}

startStopButton.addEventListener('click',startStop);
resetButton.addEventListener('click',reset);
lapButton.addEventListener('click',lap);

