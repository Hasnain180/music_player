

// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let ctricon = document.getElementById("ctricon");

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// function playpause(){
//     if(ctricon.classList.contains("bx-pause")){
//         song.pause();
//         ctricon.classList.remove("bx-pause");
//         ctricon.classList.add("bx-play");

//     }
//     else{
//         song.play();
//         ctricon.classList.add("bx-pause");
//         ctricon.classList.remove("bx-play");
//     }
// }

// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 1000);
// }

// progress.onchange = function(){
//     song.play();
//     song.currentTime = progress.value;
//     ctricon.classList.add("bx-pause");
//     ctricon.classList.remove("bx-play");
// }
// {/* <i class='bx bx-pause' style='color:#ffffff' ></i> */}





let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctricon = document.getElementById("ctricon");
let songTitle = document.getElementById("song-title");
let songImg = document.getElementById("song-img");
let audioSource = document.getElementById("audio-source");

let songs = [
    {
        title: "success-swoop",
        src: "media/success-swoop-main-version-18178-01-40.mp3",
        img: "media/pexels-nickmans-gabriel-12317767 - Copy.jpg"
    },
    {
        title: "motivation-day5",
        src: "media/motivational-day-112790 (1).mp3",
        img: "media/pexels-miguel-gonzález-11577405.jpg"
    },
    {
        title: "walk-in",
        src: "media/5174396_walk-in-style_by_basspartout_preview.mp3",
        img: "media/pexels-tomas-anunziata-3876332.jpg"
    }
];

let currentSongIndex = 0;

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(ctricon.classList.contains("bx-pause")){
        song.pause();
        ctricon.classList.remove("bx-pause");
        ctricon.classList.add("bx-play");
    } else {
        song.play();
        ctricon.classList.add("bx-pause");
        ctricon.classList.remove("bx-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1000);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctricon.classList.add("bx-pause");
    ctricon.classList.remove("bx-play");
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
}

function loadSong() {
    let songData = songs[currentSongIndex];
    songTitle.innerText = songData.title;
    audioSource.src = songData.src;
    songImg.src = songData.img;
    song.load();
    playpause(); // Automatically play the new song
}

// Load the first song initially
loadSong();
