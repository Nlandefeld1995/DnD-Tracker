function login() {
    let modal = document.getElementById("popupModal")
    let br = document.createElement('br')
    // Create userneame boxes
    let usernameText = document.createElement('a')
    usernameText.innerText = "Username:"
    let usernameInput = document.createElement('input')
    usernameInput.type = "textbox"
    usernameInput.id = 'loginUsernameInput'
    usernameInput.placeholder = "username"
    // create password boxes
    let passwordText = document.createElement('a')
    passwordText.innerText = "Password: "
    let passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'loginPasswordInput'
    passwordInput.placeholder = "password"

    // submit button
    let submit = document.createElement('input')
    submit.type = 'button'
    submit.id = 'loginSubmit'
    submit.value = 'Login'
    submit.onclick = 'validateLogin()'

    // add area for potential error
    let errorArea = document.createElement('div')
    errorArea.id = 'loginErrorArea'

    // append to modal
    modal.innerHTML = '' // Remove everything from modal
    modal.appendChild(usernameText)
    modal.appendChild(usernameInput)
    modal.appendChild(br)
    modal.appendChild(passwordText)
    modal.appendChild(passwordInput)
    modal.appendChild(br)
    modal.appendChild(submit)
    modal.appendChild(errorArea)

}

function validateLogin() {
    username = document.getElementById('loginUsernameInput')
    password = document.getElementById('loginPasswordInput')

    // From db get potential usernames and passwords
    // map them as a array of objects
    // [ {username: 'x', password: 'y', characterId: id},.....]
    let usernamesPasswords = []
    let valid = false
    let errorText = ''
    for (i = 0; i < usernamesPasswords.length; i++) {
        if (username == usernamesPasswords[i].username) {
            if (password == usernamesPasswords[i].password) {
                valid = true
                loaduser(usernamesPasswords[i].id)
            }
            else {
                errorText = 'Invalid Password'
            }
        }
        else {
            errorText = 'Invalid Username/Password'
        }
    }
    if (!valid) {
        displayLoginError(errorText)
    }
}
function displayLoginError(text) {
    let errorArea = document.getElementById('loginErrorArea')
    let error = document.createElement('a')
    error.innerText = text
    errorArea.appendChild(error)
}