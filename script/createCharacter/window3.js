function window3Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let hitPoints = [
        {
            ask: "Hit Point Maximum",
            type: "textbox",
            id: "hitPointMax",
            default: character.hitPointMax,
            required: true
        }
        ,{
            ask: "Armor Class",
            type: "textbox",
            id: "armorClass",
            default: character.armorClass,
            required: true
        }
        ,{
            ask: "Speed",
            type: "textbox",
            id: "speed",
            default: character.speed,
            required: true
        }
    ] 
    let html = createHtmlElement(hitPoints, 'window2Create', 'window3Validate', false)
    modal.appendChild(html)
}

function window3Validate(){
    error = false
    errorText = ''
    // validate max hit
    let maxHit = valueById('hitPointMax')
    if(validateWholeNumber(parseInt(maxHit)) && parseInt(maxHit)>=1){
        character.hitPointMax = parseInt(maxHit)
    }
    else{
        error = true
        errorText += ` Please enter a valid max hit points`
    }
    // current hitpoints is max
    character.hitPointCurrent = character.hitPointMax
    // Temporary hit points
    character.hitPointsTemporary = 0
    // AC
    let ac = valueById('armorClass')
    if(validateWholeNumber(parseInt(ac)) && parseInt(ac)>=1){
        character.armorClass = parseInt(ac)
    }
    else{
        error = true
        errorText += ` Please enter a valid Armor Class`
    }
    //  Speed
    let speed = valueById('speed')
    if(validateWholeNumber(parseInt(speed)) && parseInt(speed)>=1){
        character.speed = parseInt(speed)
    }
    else{
        error = true
        errorText += ` Please enter a valid speed`
    }
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        console.log(character)
        window4Create()
    }
}