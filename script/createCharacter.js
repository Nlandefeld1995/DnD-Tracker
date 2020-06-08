let character = {
    proficiencies: {}
}
let classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
function valueById(id) {
    return document.getElementById(id).value
}
function findMod(score) {
    let mod = 0
    switch (score) {
        case 30:
            mod = 10
            break
        case 29:
            mod = 9
            break
        case 28:
            mod = 9
            break
        case 27:
            mod = 8
            break
        case 26:
            mod = 8
            break
        case 25:
            mod = 7
            break
        case 24:
            mod = 7
            break
        case 23:
            mod = 6
            break
        case 22:
            mod = 6
            break
        case 21:
            mod = 5
            break
        case 20:
            mod = 5
            break
        case 19:
            mod = 4
            break
        case 18:
            mod = 4
            break
        case 17:
            mod = 3
            break
        case 16:
            mod = 3
            break
        case 15:
            mod = 2
            break
        case 14:
            mod = 2
            break
        case 13:
            mod = 1
            break
        case 12:
            mod = 1
            break
        case 11:
            mod = 0
            break
        case 10:
            mod = 0
            break
        case 9:
            mod = -1
            break
        case 8:
            mod = -1
            break
        case 7:
            mod = -2
            break
        case 6:
            mod = -2
            break
        case 5:
            mod = -3
            break
        case 4:
            mod = -3
            break
        case 3:
            mod = -4
            break
        case 2:
            mod = -4
            break
        case 1:
            mod = -5
            break
    }
    return mod
}
function validateString(string, len) {
    let valid
    if (string.length >= len) {
        valid = true
    }
    else {
        valid = false
    }
    return valid
}
function validateWholeNumber(num) {
    let valid
    if (parseInt(num)) {
        if (Number.isInteger(parseInt(num))) { valid = true }
        else { valid = false }
    }
    else { valid = false }
    return valid
}
function validateClass(input) {
    let valid = false
    for (i = 0; i < classes.length; i++) {
        if (classes[i].toLowerCase == input.toLowerCase) {
            valid = true
        }
    }
    return valid
}
function createHtmlElement(objects, backFun, nextFun, last) {
    console.log(objects)
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
        if (obj.default) {
            input = obj.default

        }
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
            ask: "Character Middle Name",
            type: "textbox",
            id: "characterMiddleName",
            default: character.middleName,
            required: false
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
    let html = createHtmlElement(characterInfo, '', 'characterInfoValidate', false)
    modal.appendChild(html)
}
function characterInfoValidate() {
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
    // If middle name add to character
    if (valueById('characterMiddleName')) {
        character.middleName = valueById('characterMiddleName')
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
        console.log(character)
        getproficiencies()
    }
}
function getproficiencies() {
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let proficiencies = [
        {
            ask: "Proficiency Bonus",
            type: "textbox",
            id: "proficiencyBonus",
            default: character.proficiencies.proficiencyBonus,
            required: true
        },
        {
            ask: "Strength score",
            type: "textbox",
            id: "strengthScore",
            default: character.proficiencies.strengthScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (strength)",
            type: "checkbox",
            id: "strengthSavingThrow",
            default: character.proficiencies.strengthSavingThrow,
            required: false
        },
        {
            ask: "Proficient Athletics (strength)",
            type: "checkbox",
            id: "athletics",
            default: character.proficiencies.athletics,
            required: false
        },
        {
            ask: "Dexterity score",
            type: "textbox",
            id: "dexScore",
            default: character.proficiencies.dexScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (dex)",
            type: "checkbox",
            id: "dexSavingThrow",
            default: character.proficiencies.dexSavingThrow,
            required: false
        },
        {
            ask: "Proficient Acrobatics (dex)",
            type: "checkbox",
            id: "acrobatics",
            default: character.proficiencies.acrobatics,
            required: false
        },
        {
            ask: "Proficient Sleight of Hand (dex)",
            type: "checkbox",
            id: "sleightOfHand",
            default: character.proficiencies.sleightOfHand,
            required: false
        }
        ,
        {
            ask: "Proficient Stealth (dex)",
            type: "checkbox",
            id: "stealth",
            default: character.proficiencies.stealth,
            required: false
        },
        {
            ask: "Constitution Score",
            type: "textbox",
            id: "conScore",
            default: character.proficiencies.conScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (con)",
            type: "checkbox",
            id: "conSavingThrow",
            default: character.proficiencies.conSavingThrow,
            required: false
        },
        {
            ask: "Intelligence Score",
            type: "textbox",
            id: "intelScore",
            default: character.proficiencies.intelScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (intel)",
            type: "checkbox",
            id: "intelSavingThrow",
            default: character.proficiencies.intelSavingThrow,
            required: false
        },
        {
            ask: "Proficient Arcana (intel)",
            type: "checkbox",
            id: "arcana",
            default: character.proficiencies.arcana,
            required: false
        },
        {
            ask: "Proficient History (intel)",
            type: "checkbox",
            id: "history",
            default: character.proficiencies.history,
            required: false
        },
        {
            ask: "Proficient Investigation (intel)",
            type: "checkbox",
            id: "investigation",
            default: character.proficiencies.investigation,
            required: false
        },
        {
            ask: "Proficient Nature (intel)",
            type: "checkbox",
            id: "nature",
            default: character.proficiencies.nature,
            required: false
        },
        {
            ask: "Proficient Religion (intel)",
            type: "checkbox",
            id: "religion",
            default: character.proficiencies.religion,
            required: false
        },
        {
            ask: "Wisdom Score",
            type: "textbox",
            id: "wisdomScore",
            default: character.proficiencies.wisdomScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (wisdom)",
            type: "checkbox",
            id: "wisdomSavingThrow",
            default: character.proficiencies.wisdomSavingThrow,
            required: false
        },
        {
            ask: "Proficient Animal Handling (wisdom)",
            type: "checkbox",
            id: "animalHandling",
            default: character.proficiencies.animalHandling,
            required: false
        },
        {
            ask: "Proficient Insight (wisdom)",
            type: "checkbox",
            id: "insight",
            default: character.proficiencies.insight,
            required: false
        },
        {
            ask: "Proficient Medicine (wisdom)",
            type: "checkbox",
            id: "medicine",
            default: character.proficiencies.medicine,
            required: false
        }
        ,
        {
            ask: "Proficient Perception (wisdom)",
            type: "checkbox",
            id: "perception",
            default: character.proficiencies.perception,
            required: false
        },
        {
            ask: "Proficient Survival (wisdom)",
            type: "checkbox",
            id: "survival",
            default: character.proficiencies.survival,
            required: false
        },
        {
            ask: "Charisma Score",
            type: "textbox",
            id: "charismaScore",
            default: character.proficiencies.charismaScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (charisma)",
            type: "checkbox",
            id: "charismaSavingThrow",
            default: character.proficiencies.charismaSavingThrow,
            required: false
        },
        {
            ask: "Proficient Deception (charisma)",
            type: "checkbox",
            id: "deception",
            default: character.proficiencies.deception,
            required: false
        },
        {
            ask: "Proficient intimidation (charisma)",
            type: "checkbox",
            id: "intimidation",
            default: character.proficiencies.intimidation,
            required: false
        },
        {
            ask: "Proficient Performance (charisma)",
            type: "checkbox",
            id: "performance",
            default: character.proficiencies.performance,
            required: false
        },
        {
            ask: "Proficient Persuasion (charisma)",
            type: "checkbox",
            id: "persuasion",
            default: character.proficiencies.persuasion,
            required: false
        },
        {
            ask: "Passive Wisdom (Perception) Score",
            type: "textbox",
            id: "passivePerception",
            default: character.proficiencies.passivePerception,
            required: true
        }

    ]
    let html = createHtmlElement(proficiencies, 'newCharacter', 'proficienciesInfoValidate', false)
    modal.appendChild(html)
}
function proficienciesInfoValidate() {
    let error = false
    let errorText = ''
    // validate proficiency bonus
    let proficiencyBonus = valueById('proficiencyBonus')
    if (validateWholeNumber(parseInt(proficiencyBonus)) && parseInt(proficiencyBonus) >= 0) {
        character.proficiencies.proficiencyBonus = parseInt(proficiencyBonus)
    } else { error = true; errorText += ` Please enter a valid proficiency Bonus` }
    // create blank record for inspiration
    character.proficiencies.inspiration = 0
    //  validate strength score
    let strengthScore = valueById('strengthScore')
    if (validateWholeNumber(parseInt(strengthScore)) && parseInt(strengthScore) >= 1) {
        character.proficiencies.strengthScore = parseInt(strengthScore)
        character.proficiencies.strengthMod = findMod(parseInt(strengthScore))
    }
    else {
        error = true
        errorText += ` Please enter a valid Strength Score. `
    }
    // Validate dex score
    let dexScore = valueById('dexScore')
    if (validateWholeNumber(parseInt(dexScore)) && parseInt(dexScore) >= 1) {
        character.proficiencies.dexScore = parseInt(dexScore)
        character.proficiencies.dexMod = findMod(parseInt(dexScore))
    }
    else {
        error = true
        errorText += ` Please enter a valid dexterity score. `
    }
    // Validate con score
    let conScore = valueById('conScore')
    if(validateWholeNumber(parseInt(conScore)) && parseInt(conScore) >=1){
        character.proficiencies.conScore = parseInt(conScore)
        character.proficiencies.conMod = findMod(parseInt(conScore))
    }
    else{
        error = true
        errorText += ` Please enter a vlid Constitution score. `
    }
    // Validate Intelligence
    let intelScore = valueById('intelScore')
    if(validateWholeNumber(parseInt(intelScore)) && parseInt(intelScore) >=1){
        character.proficiencies.intelScore = parseInt(intelScore)
        character.proficiencies.intelMod = findMod(parseInt(intelScore))
    }
    else{
        error = true
        errorText += ` Please enter a valid Intelligence score`
    }
    // Validate Wisdom 
    let wisdomScore = valueById('wisdomScore')
    if(validateWholeNumber(parseInt(wisdomScore)) && parseInt(wisdomScore)>=1){
        character.proficiencies.wisdomScore = parseInt(wisdomScore)
        character.proficiencies.wisdomMod = findMod(parseInt(wisdomScore))
    }
    else{
        error = true
        errorText += ` Please enter a valid wisdom score`
    }
    // Validate Charisma
    let charismaScore = valueById('charismaScore')
    if(validateWholeNumber(parseInt(charismaScore)) && parseInt(charismaScore) >= 1){
        character.proficiencies.charismaScore = parseInt(charismaScore)
        character.proficiencies.charismaMod = findMod(parseInt(charismaScore))
    }
    else{
        error = true
        errorText += `Please enter a valid Charisma score`
    }
    // passive wisdom
    character.proficiencies.passivePerception = parseInt(valueById('passivePerception'))
    // Get other proficiencies
    let proficiencies = [
        {
            name: "strengthSavingThrow",
            cat: "strength"
        },
        {
            name: "athletics",
            cat: "strength"
        },
        {
            name: "dexSavingThrow",
            cat: "dex"
        },
        {
            name: "acrobatics",
            cat: "dex"
        },
        {
            name: "sleightOfHand",
            cat: "dex"
        },
        {
            name: "stealth",
            cat: "dex"
        },
        {
            name: "conSavingThrow",
            cat: "con"
        },
        {
            name: "intelSavingThrow",
            cat: "intel"
        },
        {
            name: "arcana",
            cat: "intel"
        },
        {
            name: "history",
            cat: "intel"
        },
        {
            name: "investigation",
            cat: "intel"
        },
        {
            name: "nature",
            cat: "intel"
        },
        {
            name: "religion",
            cat: "intel"
        },
        {
            name: "wisdomSavingThrow",
            cat: "wisdom"
        },
        {
            name: "animalHandling",
            cat: "wisdom"
        },
        {
            name: "insight",
            cat: "wisdom"
        },
        {
            name: "medicine",
            cat: "wisdom"
        },
        {
            name: "perception",
            cat: "wisdom"
        },
        {
            name: "survival",
            cat: "wisdom"
        },
        {
            name: "charismaSavingThrow",
            cat: "charisma"
        },
        {
            name: "deception",
            cat: "charisma"
        },
        {
            name: "intimidation",
            cat: "charisma"
        },
        {
            name: "performance",
            cat: "charisma"
        },
        {
            name: "persuasion",
            cat: "charisma"
        },
        {
            name: "passivePerception",
            cat: "charisma"
        }

    ]
    gatherAbilities(proficiencies)
    function gatherAbilities(array) {
        array.forEach(ability => {
            character.proficiencies[ability.name] = document.getElementById(ability.name).checked
            if (character.proficiencies[ability.name]) {
                character.proficiencies[`${ability.name}score`] = character.proficiencies.proficiencyBonus + character.proficiencies[`${ability.cat}Mod`]
            }
            else {
                character.proficiencies[`${ability.name}score`] = character.proficiencies[`${ability.cat}Mod`]
            }
        });
    }
    if (error) {

        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        console.log(character)
        getHitPoints()
    }
}
function getHitPoints(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let hitPoints = [
        {
            ask: "Hit Point Maximum",
            type: "textbox",
            id: "hitPointMax",
            default: character.hitPointMax,
            required: true
        },{
            ask: "Current Hit Points",
            type: "textbox",
            id: "hitPointCurrent",
            default: character.hitPointCurrent
        }
    ] 
}
function saveCharacter() { }