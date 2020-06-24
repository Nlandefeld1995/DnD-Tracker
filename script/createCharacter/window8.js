

async function window8Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    
   

    let html = createHtmlElement([], 'window6Create', 'window8Validate', true)
    modal.appendChild(html)
}

function window8Validate(){
    error = false
    errorText = ''
    // validate max hit
    
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        saveCharacter() 
    }
}

