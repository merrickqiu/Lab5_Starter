// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    // Define Elements
    let selector = document.getElementById("horn-select");
    let button = document.querySelector("button");
    let audio = document.querySelector("audio");
    let volume = document.getElementById("volume");

    let images = document.querySelectorAll('img');
    let image = images[0];
    let volumeIcon = images[1];

    const jsConfetti = new JSConfetti();
    
    // Set default to select
    selector.value = "select"
    
    // Change voice and image
    selector.addEventListener('change', function() {
      switch (selector.value) {
        case "select":
          image.src = "assets/images/no-image.png";
          audio.src = "";
        case "air-horn":
          image.src = "assets/images/air-horn.svg";
          audio.src = "assets/audio/air-horn.mp3";
          break;
        case "car-horn":
          image.src = "assets/images/car-horn.svg"
          audio.src = "assets/audio/car-horn.mp3";
          break;
        case "party-horn":
          image.src = "assets/images/party-horn.svg"
          audio.src = "assets/audio/party-horn.mp3";
          break;
      }
    }) 
  
    // Play audio
    button.addEventListener('click', function() {
      audio.play();
      if (selector.value == "party-horn") {
        jsConfetti.addConfetti();
      }
    })

    // Volume control
    volume.addEventListener('change', function() {
      audio.volume = volume.value / 100;

      if (volume.value == 0) {
        volumeIcon.src = "assets/icons/volume-level-0.svg";
        volumeIcon.alt = "Volume level 0";
      } else if (volume.value < 33) {
        volumeIcon.src = "assets/icons/volume-level-1.svg";
        volumeIcon.alt = "Volume level 1";
      } else if (volume.value < 67) {
        volumeIcon.src = "assets/icons/volume-level-2.svg";
        volumeIcon.alt = "Volume level 2";
      } else {
        volumeIcon.src = "assets/icons/volume-level-3.svg";
        volumeIcon.alt = "Volume level 3";
      }
    })
}