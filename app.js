console.log("Welcome To Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/System Pe System - R Maan 128 Kbps.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "System Pe System", filePath: "Songs/System Pe System - R Maan 128 Kbps.mp3", coverPath: "Assets/15.jpeg"},
  {songName: "Tenu Lehenga", filePath: "Songs/Tenu Lehenga Satyameva Jayate 2 128 Kbps.mp3", coverPath: "Assets/download.jpeg2.jpeg"},
  {songName: "Amplifier", filePath: "Songs/Amplifier(PagalWorld.com.sb).mp3", coverPath: "Assets/download (1).jpeg"},
  {songName: "Tauba Tauba", filePath: "Songs/Tauba Tauba - Bad Newz 320 Kbps.mp3", coverPath: "Assets/download.jpeg25.jpeg"},
  {songName: "Booty Shake", filePath: "Songs/Booty Shake Tony Kakkar 128 Kbps.mp3", coverPath: "Assets/download (6).jpeg"},
  {songName: "Excuses", filePath: "Songs/Excuses Ap Dhillon 128 Kbps.mp3", coverPath: "Assets/download (3).jpeg"},
  {songName: "Yadav Brand 2", filePath: "Songs/Yadav Brand 2 - Sunny Yaduvanshi 128 Kbps.mp3", coverPath: "Assets/download (8).jpeg"},
  {songName: "Yarri Hai", filePath: "Songs/Yaari Hai - Tony Kakkar 128 Kbps.mp3", coverPath: "Assets/download (10).jpeg"},
  {songName: "Number Likh", filePath: "Songs/Number Likh(PagalWorld.com.sb).mp3", coverPath: "Assets/download (11).jpeg"},
  {songName: "Coca Cola To", filePath: "Songs/Coca Cola Tu Tony Kakkar 128 Kbps.mp3", coverPath: "Assets/WhatsApp Image 2024-11-19 at 5.23.14 AM.jpeg"},
  {songName: "Satisfy", filePath: "Songs/Satisfya - Imran Khan 128 Kbps.mp3", coverPath: "Assets/download (20).jpeg"},
]

songItem.forEach((element, i)=>{
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', ()=> {
  if(audioElement.paused || audioElement.currentTime<0){
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
  // update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myprogressbar.value = progress;
})


myprogressbar.addEventListener('change',()=> {
  audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})