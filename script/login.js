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
    // cancel button
    let cancel = cancelButton()

    // submit button
    let submit = document.createElement('input')
    submit.type = 'button'
    submit.id = 'loginSubmit'
    submit.value = 'Login'
    submit.onclick = validateLogin

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
    modal.appendChild(cancel)
    modal.appendChild(submit)
    modal.appendChild(errorArea)

}

async function validateLogin() {
    // From db get potential usernames and passwords
    let users = await dbGetUsers()

    username = valueById('loginUsernameInput')
    password = valueById('loginPasswordInput')
    let valid = false
    let errorText = ''
    users = users.results
    console.log(users)
    for (i = 0; i < users.length; i++) {
        errorText = ''
        console.log(`${username} == ${users[i].username}`)
        if (username == users[i].username) {
            if (password == users[i].password) {
                valid = true
                globalUserId = users[i].objectId
                loaduser()
                break
            }
            else {
                errorText += 'Invalid Password'
            }
        }
        else {
            errorText += 'Invalid Username/Password'
        }
    }
    if (!valid) {
        displayLoginError(errorText)
    }



}
function displayLoginError(text) {
    let errorArea = valueById('loginErrorArea')
    let error = document.createElement('a')
    error.innerText = text
    errorArea.appendChild(error)
}