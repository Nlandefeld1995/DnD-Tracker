function window1Create() {
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let characterInfo = [
        {
            ask: "Player Name",
            type: "textbox",
            id: "playerName",
            default: character.playerName,
            required: true
        },
        {
            ask: "Character First Name",
            type: "textbox",
            id: "characterFirstName",
            default: character.firstName,
            required: true
        },
        {
            ask: "Character Last Name",
            type: "textbox",
            id: "characterLastName",
            default: character.lastName,
            required: true
        },
        {
            ask: "Class",
            type: "textbox",
            id: "characterClass",
            default: character.class,
            required: true
        },
        {
            ask: "Race",
            type: "textbox",
            id: "characterRace",
            default: character.race,
            required: true
        },
        {
            ask: "Level",
            type: "textbox",
            id: "characterLevel",
            default: character.level,
            required: true
        },
        {
            ask: "Experience Points",
            type: "textbox",
            id: "characterXp",
            default: character.xp,
            required: true
        }
    ]
    let html = createHtmlElement(characterInfo, '', 'window1Validate', false)
    modal.appendChild(html)
}
function window1Validate() {
    let error = false
    let errorText = ''
    // Validate player name
    let playerName = valueById('playerName')
    if (validateString(playerName, 3)) {
        character.playerName = playerName
    }
    else {
        error = true
        errorText += ` Please enter a valid player name. `
    }
    // validate first name
    let firstName = valueById('characterFirstName')
    if (validateString(firstName, 3)) {
        character.firstName = firstName
    }
    else {
        error = true
        errorText += ` Please enter a first name longer than 3 characters. `
    }
    // validate last name
    let lastName = valueById('characterLastName')
    if (validateString(lastName, 3)) {
        character.lastName = lastName
    }
    else {
        error = true
        errorText += ` Please enter a last name longer than 3 characters.`
    }
    // validate Class
    let characterClass = valueById('characterClass')
    if (validateClass(characterClass)) {
        character.class = characterClass
    }
    else {
        error = true
        errorText += ` Please enter a valid class: ${classes.toString}`
    }
    // Validate Race
    let race = valueById('characterRace')
    if (validateString(race, 3)) {
        character.race = race
    }
    else {
        error = true
        errorText += ` Please enter a valid Race. `
    }
    // Validate level
    let level = valueById('characterLevel')
    if (validateWholeNumber(level) && parseInt(level) >= 0) {
        character.level = parseInt(level)
    }
    else {
        error = true
        errorText += ` Please enter a valid whole number 0 or higher as the Level. `
    }
    // Validate XP
    let xp = valueById('characterXp')
    if (validateWholeNumber(xp) && parseInt(xp) >= 0) {
        character.xp = parseInt(xp)
    }
    else {
        error = true
        errorText += ` Please enter a valid whole number 0 or higher as the Experience Points. `
    }

    // Check for errors
    if (error) {

        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        window2Create()
    }
}