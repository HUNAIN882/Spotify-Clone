console.log("Welcome To Spotify");

// Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/12.mp3');
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "System Pe System", filePath: "Songs/1 (2).mp3", coverPath: "Assets/15.jpeg" },
  {songName: "Tenu Lehenga", filePath: "Songs/2 (2).mp3", coverPath: "Assets/download.jpeg2.jpeg" },
  {songName: "Excussess", filePath: "Songs/4.mp3", coverPath: "Assets/download (3).jpeg" },
]

songItem.forEach((element, i)=> { 
  // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  // element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});

// audioElement.play();

// Handle play/pause click 
masterPlay.addEventListener('click', ()=> {
  if(audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
  // Update Sekkbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=> {
  audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
  element.addEventListener('click', (e)=> {
    console.log(e.target);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    
  })
})