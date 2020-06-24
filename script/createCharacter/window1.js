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
            ask: "Character Name",
            type: "textbox",
            id: "characterName",
            default: character.Name,
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
            ask: "Experience Points",
            type: "textbox",
            id: "characterXp",
            default: character.xp,
            required: true
        },
        {
            ask: "Background",
            type: "textbox",
            id: "characterBackground",
            default: character.background,
            required: true
        },
        {
            ask: "Alighnment",
            type: "textbox",
            id: "characterAlignment",
            default: character.alignment,
            required: true
        }
    ]
    let html = createHtmlElement(characterInfo, '', 'window1Validate', false)
    modal.appendChild(html)
}
async function window1Validate() {
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
    let name = valueById('characterName')
    if (validateString(name, 3)) {
        character.name = name
    }
    else {
        error = true
        errorText += ` Please enter a  name longer than 3 characters. `
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
    // // Validate level
    // let level = valueById('characterLevel')
    // if (validateWholeNumber(level) && parseInt(level) >= 0) {
    //     character.level = parseInt(level)
    // }
    // else {
    //     error = true
    //     errorText += ` Please enter a valid whole number 0 or higher as the Level. `
    // }
    // Validate XP
    let xp = valueById('characterXp')
    if (validateWholeNumber(xp) && parseInt(xp) >= 0) {
        character.xp = parseInt(xp)
        character.level = await getLevelByXp(parseInt(xp))
    }
    else {
        error = true
        errorText += ` Please enter a valid whole number 0 or higher as the Experience Points. `
    }

    let background = valueById('characterBackground')
    if(validateString(background, 5)){
        character.background = background
    }
    else {
        error = true
        errorText += `Please enter a valid Background`
    }

    let alignment = valueById('characterAlignment')
    if(validateString(alignment, 5)){
        character.alignment = alignment
    }
    else {
        error = true
        errorText += `Please enter a valid Alignment`
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