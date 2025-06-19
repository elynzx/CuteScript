/* /* Icon Animation */
const decryptImg = document.querySelector("#decorativeImg")
const icons = ["assets/encryptImg.png", "assets/decryptImg.png"]
let currentIndex = 0

setInterval(() => {
      currentIndex = (currentIndex + 1) % icons.length
      decryptImg.src = icons[currentIndex]
}, 1500)
 */

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

const infoButton = document.getElementById("infoButton")
const informationOverlay = document.getElementById("informationOverlay")
const exitInformation = document.getElementById("exitInformation")

infoButton.addEventListener("click", () => {
      informationOverlay.classList.remove("hidden");
})

exitInformation.addEventListener("click", () => {
      informationOverlay.classList.add("hidden");
});

/* Input validation */
const lowercaseOnly = /^[a-z\s]+$/;
const

function validateInput(text, password) {

      if (!text.trim() || !lowercaseOnly.test(text)) {
            alert("Please use only lowercase letters and spaces.")
            return false;
      }
      if (!password || password.trim().length < 4) {
            alert("Password must be at least 8 characters.")
            return false
      }
      return true
}