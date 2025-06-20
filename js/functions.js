
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