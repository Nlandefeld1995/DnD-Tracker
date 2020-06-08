let character = {}
let classes = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue', 'Sorcerer', 'Warlock','Wizard']
function validateString(string, len) {
    let valid
    if (string.length >= 5) {
        valid = true
    }
    else {
        valid = false
    }
    return valid
}
function validateWholeNumber(num){
    let valid
    if(parseInt(num)){
        if(Number.isInteger(parseInt(num))){valid = true}
        else{ valid = false}
    }
    else{ valid = false}
    return valid
}
function validateClass(input){
    let valid =  false
    for(i=0; i<classes.length; i++){
        if(classes[i].toLowerCase == input.toLowerCase){
            valid = true
        }
    }
    return valid
}
function createHtmlElement(objects, backFun, nextFun, last) {
    let html = document.createElement('div')
    objects.forEach(obj => {
        let div = document.createElement('div')
        let br = document.createElement('br')
        let text = document.createElement('h3')
        text.innerText = `${obj.ask}:`
        if (obj.required) {
            text.innerText = `*${text.innerText}`
        }
        let input = document.createElement('input')
        input.type = obj.type
        input.id = obj.id
        div.appendChild(text)
        div.appendChild(input)
        div.appendChild(br)
        html.appendChild(div)
    });
    let buttons = document.createElement('div')
    if (backFun.length > 3) {
        let back = document.createElement('input')
        back.type = 'button'
        back.value = 'Back'
        back.onclick = eval(backFun)
        buttons.appendChild(back)
    }
    if (!last) {
        let next = document.createElement('input')
        next.type = 'button'
        next.value = "Next"
        next.onclick = eval(nextFun)
        buttons.appendChild(next)
    }
    else {
        let save = document.createElement('input')
        save.type = 'button'
        save.value = 'Save'
        save.onclick = saveCharacter
        buttons.appendChild(save)
    }
    html.appendChild(buttons)
    // Create error area
    let errorArea = document.createElement('div')
    errorArea.id = "errorArea"
    html.appendChild(errorArea)
    return html

}
function newCharacter() {
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let characterInfo = [
        {
            ask: "Player Name",
            type: "textbox",
            id: "playerName",
            required: true
        },
        {
            ask: "Character First Name",
            type: "textbox",
            id: "characterFirstName",
            required: true
        },
        {
            ask: "Character Middle Name",
            type: "textbox",
            id: "characterMiddleName",
            required: false
        },
        {
            ask: "Character Last Name",
            type: "textbox",
            id: "characterLastName",
            required: true
        },
        {
            ask: "Class",
            type: "textbox",
            id: "characterClass",
            required: true
        },
        {
            ask: "Race",
            type: "textbox",
            id: "characterRace",
            required: true
        },
        {
            ask: "Level",
            type: "textbox",
            id: "characterLevel",
            required: true
        },
        {
            ask: "Experience Points",
            type: "textbox",
            id: "characterXp",
            required: true
        }
    ]
    let html = createHtmlElement(characterInfo, '', 'characterInfoValidate', false)
    modal.appendChild(html)
}
function characterInfoValidate() {
    let error = false
    let errorText = ''
    // validate first name
    let firstName = document.getElementById('characterFirstName').value
    if (validateString(firstName, 3)) {
        character.firstName = firstName
    }
    else {
        error = true
        errorText += ` Please enter a first name longer than 3 characters. `
    }
    // If middle name add to character
    if (document.getElementById('characterMiddleName').value) {
        character.middleName = document.getElementById('characterMiddleName').value
    }
    // validate last name
    let lastName = document.getElementById('characterLastName').value
    if (validateString(lastName, 3)) {
        character.lastName = lastName
    }
    else {
        error = true
        errorText += ` Please enter a last name longer than 3 characters.`
    }
    // validate Class
    let characterClass = document.getElementById('characterClass').value
    if(validateClass(characterClass)){
        character.class = characterClass
    }
    else {
        error = true
        errorText += ` Please enter a valid class: ${classes.toString}`
    }
    // Validate Race
    let race = document.getElementById('characterRace').value
    if(validateString(race,3)){
        character.race = race
    }
    else {
        error=true
        errorText += ` Please enter a valid Race. `
    }
    // Validate level
    let level = document.getElementById('characterLevel').value
    if(validateWholeNumber(level) && parseInt(level) >=0){
        character.level = parseInt(level)
    }
    else{
        error = true
        errorText += ` Please enter a valid whole number 0 or higher as the Level. `
    }
    // Validate XP
    let xp = document.getElementById('characterXp').value
    if(validateWholeNumber(xp) && parseInt(xp) >=0){
        character.xp = parseInt(xp)
    }
    else{
        error = true
        errorText += ` Please enter a valid whole number 0 or higher as the Experience Points. `
    }

    // Check for errors
    if(error){
        
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        document.getElementById('errorArea').appendChild(errors)
    }
    else{
        console.log(character)
    }
}

function saveCharacter() { }