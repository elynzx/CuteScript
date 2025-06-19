
console.log("script cargado")
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
      button.addEventListener("click", () => {
            let audioButton = document.createElement("Audio")
            audioButton.setAttribute("src", "assets/popSoundCutted.mp3")
            audioButton.play()
            console.log(`reproduciendo ${audioButton}`)
      })
})

const infoButton = document.getElementById("infoButton")
const informationOverlay = document.getElementById("informationOverlay")
const exitInformation = document.getElementById("exitInformation")

infoButton.addEventListener("click", () =>{
      informationOverlay.classList.remove("hidden");
})

exitInformation.addEventListener("click", () => {
  informationOverlay.classList.add("hidden");
});


