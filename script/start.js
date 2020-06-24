
var globalUserId
var globalCharacterID
var character = {}
$(document).ready(function () {
    start()
})
function start(){
    loader(true)
    let main = document.getElementById('mainContainer')
    while (main.lastChild.id !== 'loader') {
        main.removeChild(main.lastChild);
    }
    loadBackground()
    setTimeout(function(){
        character = {}
        globalUserId
         globalCharacterID
        globalCharacter = {}
        createPopUp()
    },1000)
}
// Global Variables


function loadBackground(){
    let main = document.getElementById('mainContainer')
    let img = document.createElement('div')
    img.id= 'backgroundImg'
    img.style.backgroundImage = `url('logo.png')`
    main.appendChild(img)
}

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
    modalText.innerText = `Welcome to your D&D tracker. Please login or create a new account to continue.`
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
    loader(false)
    
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
    try{
        num = parseInt(num)
        if (Number.isInteger(num)) { valid = true }
        else {valid = false }
    }
    catch { valid = false }
    return valid
}

function loader(state){
    let loader = document.getElementById('loaderIcon')

    if(state){
        loader.style.display = 'block'
        console.log('turned loader on')
    }else{
        loader.style.display = 'none'
        console.log('turned loader off')
    }
}