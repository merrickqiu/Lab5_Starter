// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  // Define Elements
  let selector = document.getElementById("voice-select");
  let button = document.querySelector("button");
  let text = document.getElementById("text-to-speak");
  let face = document.querySelector("img");
  let utterThis = new SpeechSynthesisUtterance(text.value);

  // Set default to select
  selector.value = "select";

  // Get voices and populate selector
  const synth = window.speechSynthesis;
  let voices = [];
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    
    selector.appendChild(option);
  }

  // Play audio
  button.addEventListener('click', function() {
    //face.src = "assets/images/smiling-open.png";
    utterThis.text = text.value;
    const selectedOption =
      selector.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    //face.src = "assets/images/smiling.png";
  
  })

  // Change image
  utterThis.onstart = function() {
    face.src = 'assets/images/smiling-open.png';
  };
  
  // Set up the onend event handler
  utterThis.onend = function() {
    face.src = 'assets/images/smiling.png';
  };
}