//Get DOM elements for JS code

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//create function for clicking on vedio
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//create function for updating the paly / pause icons
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//create function to update the progress
function updateProgress(){
    progress.value = (video.currentTime / video.duration)* 100;

    //set the time for timestamp
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }

    let secs = Math.floor(vedio.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins} : ${secs}`;
    
}

//create function to stop the vedio
function stopVedio(){
    video.currentTime = 0;
    video.pause();
}

//create function to update the vedio progress using the sider
function setVideoProgess(){
    video.currentTime = (+progress.value * video.duration) / 100;

 }



//Event Listners
// 1.Event Listners for the vedio player
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timestamp', updateProgress);

//2. Event listners for play button
play.addEventListener('click',toggleVideoStatus);

//3. Event listners for Stop button 
stop.addEventListener('click',stopVedio);

//4. Event listners for progress bar 
progress.addEventListener('change',setVideoProgess);


