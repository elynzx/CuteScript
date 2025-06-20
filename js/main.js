
/* Adding sound into buttons */
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

/* Showing About modal  */

const infoButton = document.getElementById("infoButton")
const informationOverlay = document.getElementById("informationOverlay")
const exitInformation = document.getElementById("exitInformation")

infoButton.addEventListener("click", () => {
      informationOverlay.classList.remove("hidden");
      console.log("script buttom")
})

exitInformation.addEventListener("click", () => {
      informationOverlay.classList.add("hidden");
});

/* Create Password modal */

const createPassword = document.getElementById("createPassword")
const createPasswordOverlay = document.getElementById("createPasswordOverlay")
const cancelButton = document.getElementById("cancelButton")

createPassword.addEventListener("click", () => {
      createPasswordOverlay.classList.remove("hidden");
})

cancelButton.addEventListener("click", () => {
      createPasswordOverlay.classList.add("hidden");
});

/* Input validation */
const lowercaseOnly = /^[a-z\s]+$/;

