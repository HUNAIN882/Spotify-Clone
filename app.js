console.log("Welcome To Spotify");

// Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/0.mp3');
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "System Pe System", filePath: "Songs/0.mp3", coverPath: "Assets/15.jpeg" },
  {songName: "Coca Cola Tu", filePath: "Songs/2.mp3", coverPath: "Assets/WhatsApp Image 2024-11-19 at 5.23.14 AM.jpeg" },
  {songName: "Excussess", filePath: "Songs/3.mp3", coverPath: "Assets/download (3).jpeg" },
  {songName: "Tenu Lehenga", filePath: "Songs/4.mp3", coverPath: "Assets/download.jpeg2.jpeg" },
  {songName: "Tauba Tauba", filePath: "Songs/7.mp3", coverPath: "Assets/download.jpeg25.jpeg" },
  {songName: "Amplifier", filePath: "Songs/1.mp3", coverPath: "Assets/download (1).jpeg" },
  {songName: "Yarri Hai", filePath: "Songs/8.mp3", coverPath: "Assets/download (10).jpeg" },
  {songName: "Meri Zinhadi Hai Tu", filePath: "Songs/9.mp3", coverPath: "Assets/download.jpeg30.jpeg" },
  {songName: "Punja Kompa", filePath: "Songs/13.mp3", coverPath: "Assets/komap.jpg" },
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

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
  element.addEventListener('click', (e)=> {
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `Songs/${index}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})


document.getElementById('next').addEventListener('click', ()=> {
  if(index>=9) {
    index = 0
  }
  else {
    index += 1;
  }
  audioElement.src = `Songs/${index}.mp3`;
  masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', ()=> {
  if(index<=0) {
    index = 0
  }
  else {
    index -= 1;
  }
  audioElement.src = `Songs/${index}.mp3`;
  masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})