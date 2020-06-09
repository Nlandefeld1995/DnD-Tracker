let userInformation = {
    characters: []
}
function newAccount() {
    let modal = document.getElementById("popupModal")
    let br = document.createElement('br')
    // Create userneame boxes
    let usernameText = document.createElement('a')
    usernameText.innerText = "Username:"
    let usernameInput = document.createElement('input')
    usernameInput.type = "textbox"
    usernameInput.id = 'createUsernameInput'
    usernameInput.placeholder = "username"
    // create password boxes
    let passwordText = document.createElement('a')
    passwordText.innerText = "Password: "
    let passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.id = 'createPasswordInput'
    passwordInput.placeholder = "password"
    // password second time
    let passwordText2 = document.createElement('a')
    passwordText2.innerText = "Password Again: "
    let passwordInput2 = document.createElement('input')
    passwordInput2.type = 'password'
    passwordInput2.id = 'createPasswordInput2'
    passwordInput2.placeholder = "password"

    // cancel button 
    let cancel = cancelButton()
    // submit button
    let submit = document.createElement('input')
    submit.type = 'button'
    submit.id = 'createSubmit'
    submit.value = 'Submit'
    submit.onclick = validateNewAccount

    // add area for potential error
    let errorArea = document.createElement('div')
    errorArea.id = 'createErrorArea'


    // append to modal
    modal.innerHTML = '' // Remove everything from modal
    modal.appendChild(usernameText)
    modal.appendChild(usernameInput)
    modal.appendChild(br)
    modal.appendChild(passwordText)
    modal.appendChild(passwordInput)
    modal.appendChild(passwordText2)
    modal.appendChild(passwordInput2)
    modal.appendChild(br)
    modal.appendChild(cancel)
    modal.appendChild(submit)
    modal.appendChild(errorArea)
}
function validateNewAccount() {
    let error = false
    let errorText = ''
   
    let username = valueById('createUsernameInput')
    console.log(username)
    if (validateString(username, 5)) {
        userInformation.username = username
    }
    else{
        error = true
        errorText += ` Please enter a valid username longer than 5 characters. `
    }
    // Need to validate the username does not already exist
    let password1 = valueById('createPasswordInput')
    let password2 = valueById('createPasswordInput2')
    console.log(password1)
    console.log(password2)
    if (password1 == password2) {
        if (validateString(password1, 5)) {
            userInformation.password = password1
        }
        else {
            error = true
            errorText += ` Password is too short please create a password of 5 characters or more. `
        }
    }
    else {
        error = true
        errorText += ` Passwords do not match. `
    }

    if (error) {
        let errorArea = document.getElementById('createErrorArea')
        let error = document.createElement('a')
        error.innerText = errorText
        errorArea.appendChild(error)
    }
    else {
        let user = dbCreateUser(JSON.stringify(userInformation))

        if(user.objectId){
            userInformation.userId = user.objectId
            newCharacter()
        }
        else {
            let errorArea = document.getElementById('createErrorArea')
            let error = document.createElement('a')
            error.innerText = 'Failed to create user, please try again'
            errorArea.appendChild(error)
        }
    }
}