$(document).ready(function () {
    loadPopUp()
})

function loadPopUp() {
    // create modal for login screen
    let modal = document.createElement('div')
    modal.id = 'popupModal'
    modal.className = 'modal'
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
    let buttonCreate = document.createElement('input')
    buttonCreate.type = 'button'
    buttonCreate.id = "buttonCreate"
    buttonCreate.value = "Create New"
    buttonCreate.onclick = newCharacter

    // append buttons
    loginCreateDiv.appendChild(buttonLogin)
    loginCreateDiv.appendChild(buttonCreate)
    modal.appendChild(loginCreateDiv)

    let body = document.getElementById('mainContainer')
    body.appendChild(modal)
    modal = document.getElementById('popupModal')
    modal.style.display = "block"
}