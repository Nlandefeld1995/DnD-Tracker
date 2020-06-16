$(document).ready(function () {
    createPopUp()
})
// Global Variables
var globalUserId
var globalCharacterID
var globalCharacter = {}
function createPopUp(){
    // create modal for login screen
    let modal = document.createElement('div')
    modal.id = 'popupModal'
    modal.display = 'block'
    modal.className = 'modal'
    let body = document.getElementById('mainContainer')
    body.appendChild(modal)
    modal = document.getElementById('popupModal')
    modal.style.display = "block"
    loadPopUp()
}

function loadPopUp() {
    // create modal for login screen
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    // Text for modal screen
    let modalText = document.createElement('h3')
    modalText.innerText = `Welcome to your D&D tracker. Please login or create new character to continue.`
    modal.appendChild(modalText)
    // Buttons for login/create
    let loginCreateDiv = document.createElement('div')
    loginCreateDiv.id = "loginCreateDiv"
    
    let buttonLogin = document.createElement('input')
    buttonLogin.type = 'button'
    buttonLogin.id = "buttonLogin"
    buttonLogin.value = "Login"
    buttonLogin.onclick = login
    buttonLogin.className = 'input'
    let buttonCreate = document.createElement('input')
    buttonCreate.type = 'button'
    buttonCreate.id = "buttonCreate"
    buttonCreate.value = "Create New Account"
    buttonCreate.onclick = newAccount
    buttonCreate.className = 'input'

    
    // append buttons
    loginCreateDiv.appendChild(buttonLogin)
    loginCreateDiv.appendChild(buttonCreate)
    modal.appendChild(loginCreateDiv)

    
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function cancelButton(){
    let button = document.createElement('input')
    button.type = 'button'
    button.value = 'Cancel'
    button.onclick = loadPopUp
    button.className = 'input'
    return button
}
function valueById(id) {
    return document.getElementById(id).value
}
function validateString(string, len) {
    let valid
    if (string.length >= len) {
        valid = true
    }
    else {
        valid = false
    }

    return valid
}
function validateWholeNumber(num) {
    let valid
    if (parseInt(num)) {
        if (Number.isInteger(parseInt(num))) { valid = true }
        else { valid = false }
    }
    else { valid = false }
    return valid
}