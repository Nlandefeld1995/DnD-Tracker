function window2Create() {
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let proficiencies = [
        {
            ask: "Strength score",
            type: "textbox",
            id: "strengthScore",
            default: character.strengthScore,
            required: true
        },
        {
            ask: "Dexterity score",
            type: "textbox",
            id: "dexScore",
            default: character.dexScore,
            required: true
        },
        {
            ask: "Constitution Score",
            type: "textbox",
            id: "conScore",
            default: character.conScore,
            required: true
        },
        {
            ask: "Intelligence Score",
            type: "textbox",
            id: "intelScore",
            default: character.intelScore,
            required: true
        },
    
        {
            ask: "Wisdom Score",
            type: "textbox",
            id: "wisdomScore",
            default: character.wisdomScore,
            required: true
        },
        
        {
            ask: "Charisma Score",
            type: "textbox",
            id: "charismaScore",
            default: character.charismaScore,
            required: true
        }

    ]
    let html = createHtmlElement(proficiencies, 'window1Create', 'window2Validate', false)
    modal.appendChild(html)
}
async function window2Validate() {
    let error = false
    let errorText = ''
    // validate proficiency bonus
    
        character.proficiencyBonus = await getPBonusByLevel(character.level)
    
    // create blank record for inspiration
    character.inspiration = 0
    //  validate strength score
    let strengthScore = valueById('strengthScore')
    if (validateWholeNumber(parseInt(strengthScore)) && parseInt(strengthScore) >= 1) {
        character.strengthScore = parseInt(strengthScore)
        character.strengthMod = findMod(parseInt(strengthScore))
    }
    else {
        error = true
        errorText += ` Please enter a valid Strength Score. `
    }
    // Validate dex score
    let dexScore = valueById('dexScore')
    if (validateWholeNumber(parseInt(dexScore)) && parseInt(dexScore) >= 1) {
        character.dexScore = parseInt(dexScore)
        character.dexMod = findMod(parseInt(dexScore))
    }
    else {
        error = true
        errorText += ` Please enter a valid dexterity score. `
    }
    // Create Initiative
    character.initiative = character.dexMod
    // Validate con score
    let conScore = valueById('conScore')
    if(validateWholeNumber(parseInt(conScore)) && parseInt(conScore) >=1){
        character.conScore = parseInt(conScore)
        character.conMod = findMod(parseInt(conScore))
    }
    else{
        error = true
        errorText += ` Please enter a vlid Constitution score. `
    }
    // Validate Intelligence
    let intelScore = valueById('intelScore')
    if(validateWholeNumber(parseInt(intelScore)) && parseInt(intelScore) >=1){
        character.intelScore = parseInt(intelScore)
        character.intelMod = findMod(parseInt(intelScore))
    }
    else{
        error = true
        errorText += ` Please enter a valid Intelligence score`
    }
    // Validate Wisdom 
    let wisdomScore = valueById('wisdomScore')
    if(validateWholeNumber(parseInt(wisdomScore)) && parseInt(wisdomScore)>=1){
        character.wisdomScore = parseInt(wisdomScore)
        character.wisdomMod = findMod(parseInt(wisdomScore))
    }
    else{
        error = true
        errorText += ` Please enter a valid wisdom score`
    }
    // Validate Charisma
    let charismaScore = valueById('charismaScore')
    if(validateWholeNumber(parseInt(charismaScore)) && parseInt(charismaScore) >= 1){
        character.charismaScore = parseInt(charismaScore)
        character.charismaMod = findMod(parseInt(charismaScore))
    }
    else{
        error = true
        errorText += `Please enter a valid Charisma score`
    }
    // passive wisdom
    character.passivePerception = (10 + character.wisdomMod)
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
        }

    ]
    gatherAbilities(proficiencies)
    function gatherAbilities(array) {
        array.forEach(ability => {
            
            character[ability.name] = false
            character[ability.name] = false
            if (character[ability.name]) {
                character[`${ability.name}Score`] = character.proficiencyBonus + character[`${ability.cat}Mod`]
            }
            else {
                character[`${ability.name}Score`] = character[`${ability.cat}Mod`]
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
        window3Create()
    }
}