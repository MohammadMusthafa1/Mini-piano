const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio(); // Create audio object once

const playTune = (key) => {
    audio.src = `tunes/${key}.mp3.mp3`; // Use .mp3 extension
    audio.volume = volumeSlider.value;
    audio.play();

    const clickedKey = document.querySelector(`.key[data-key="${key}"]`);
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => clickedKey.classList.remove("active"), 100);
    }
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);  
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
    let pressed = e.key.toLowerCase();
    if (allKeys.includes(pressed)) playTune(pressed);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
