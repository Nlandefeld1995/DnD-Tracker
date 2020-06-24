async function window8Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    
    let personalityTraits = [
        {
            ask: "Personality Traits",
            type: "textarea",
            id: "personalityTraits",
            default: character.personalityTraits,
            required: true
        },
        {
            ask: "Ideals",
            type: "textarea",
            id: "ideals",
            default: character.ideals,
            required: true
        },
        {
            ask: "Bonds",
            type: "textarea",
            id: "bonds",
            default: character.bonds,
            required: true
        }
        ,
        {
            ask: "Flaws",
            type: "textarea",
            id: "flaws",
            default: character.flaws,
            required: true
        }
    ]
    let html = createHtmlElement(personalityTraits, 'window7Create', 'window8Validate', false)
    modal.appendChild(html)
}

function window8Validate(){
    error = false
    errorText = ''
    
    let personalityTraits = valueById('personalityTraits')
    if(validateString(personalityTraits,5)){
        character.personalityTraits = personalityTraits
    }
    else{
        error = true
        errorText += `Please enter a valid Personality Trait`
    }

    let flaws = valueById('flaws')
    if(validateString(flaws,5)){
        character.flaws = flaws
    }
    else{
        error = true
        errorText += `Please enter a valid Flaws`
    }
    

    let ideals = valueById('ideals')
    if(validateString(ideals,5)){
        character.ideals = ideals
    }
    else{
        error = true
        errorText += `Please enter a valid Ideals`
    }
    let bonds = valueById('bonds')
    if(validateString(bonds,5)){
        character.bonds = bonds
    }
    else{
        error = true
        errorText += `Please enter a valid Bond`
    }
    
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        window9Create()
    }
}

