function window2Create() {
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let proficiencies = [
        {
            ask: "Proficiency Bonus",
            type: "textbox",
            id: "proficiencyBonus",
            default: character.proficiencyBonus,
            required: true
        },
        {
            ask: "Strength score",
            type: "textbox",
            id: "strengthScore",
            default: character.strengthScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (strength)",
            type: "radio",
            id: "strengthSavingThrow",
            default: character.strengthSavingThrow,
            required: false
        },
        {
            ask: "Proficient Athletics (strength)",
            type: "radio",
            id: "athletics",
            default: character.athletics,
            required: false
        },
        {
            ask: "Dexterity score",
            type: "textbox",
            id: "dexScore",
            default: character.dexScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (dex)",
            type: "radio",
            id: "dexSavingThrow",
            default: character.dexSavingThrow,
            required: false
        },
        {
            ask: "Proficient Acrobatics (dex)",
            type: "radio",
            id: "acrobatics",
            default: character.acrobatics,
            required: false
        },
        {
            ask: "Proficient Sleight of Hand (dex)",
            type: "radio",
            id: "sleightOfHand",
            default: character.sleightOfHand,
            required: false
        }
        ,
        {
            ask: "Proficient Stealth (dex)",
            type: "radio",
            id: "stealth",
            default: character.stealth,
            required: false
        },
        {
            ask: "Constitution Score",
            type: "textbox",
            id: "conScore",
            default: character.conScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (con)",
            type: "radio",
            id: "conSavingThrow",
            default: character.conSavingThrow,
            required: false
        },
        {
            ask: "Intelligence Score",
            type: "textbox",
            id: "intelScore",
            default: character.intelScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (intel)",
            type: "radio",
            id: "intelSavingThrow",
            default: character.intelSavingThrow,
            required: false
        },
        {
            ask: "Proficient Arcana (intel)",
            type: "radio",
            id: "arcana",
            default: character.arcana,
            required: false
        },
        {
            ask: "Proficient History (intel)",
            type: "radio",
            id: "history",
            default: character.history,
            required: false
        },
        {
            ask: "Proficient Investigation (intel)",
            type: "radio",
            id: "investigation",
            default: character.investigation,
            required: false
        },
        {
            ask: "Proficient Nature (intel)",
            type: "radio",
            id: "nature",
            default: character.nature,
            required: false
        },
        {
            ask: "Proficient Religion (intel)",
            type: "radio",
            id: "religion",
            default: character.religion,
            required: false
        },
        {
            ask: "Wisdom Score",
            type: "textbox",
            id: "wisdomScore",
            default: character.wisdomScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (wisdom)",
            type: "radio",
            id: "wisdomSavingThrow",
            default: character.wisdomSavingThrow,
            required: false
        },
        {
            ask: "Proficient Animal Handling (wisdom)",
            type: "radio",
            id: "animalHandling",
            default: character.animalHandling,
            required: false
        },
        {
            ask: "Proficient Insight (wisdom)",
            type: "radio",
            id: "insight",
            default: character.insight,
            required: false
        },
        {
            ask: "Proficient Medicine (wisdom)",
            type: "radio",
            id: "medicine",
            default: character.medicine,
            required: false
        },
        {
            ask: "Proficient Perception (wisdom)",
            type: "radio",
            id: "perception",
            default: character.perception,
            required: false
        },
        {
            ask: "Proficient Survival (wisdom)",
            type: "radio",
            id: "survival",
            default: character.survival,
            required: false
        },
        {
            ask: "Charisma Score",
            type: "textbox",
            id: "charismaScore",
            default: character.charismaScore,
            required: true
        },
        {
            ask: "Proficient Saving Throw (charisma)",
            type: "radio",
            id: "charismaSavingThrow",
            default: character.charismaSavingThrow,
            required: false
        },
        {
            ask: "Proficient Deception (charisma)",
            type: "radio",
            id: "deception",
            default: character.deception,
            required: false
        },
        {
            ask: "Proficient intimidation (charisma)",
            type: "radio",
            id: "intimidation",
            default: character.intimidation,
            required: false
        },
        {
            ask: "Proficient Performance (charisma)",
            type: "radio",
            id: "performance",
            default: character.performance,
            required: false
        },
        {
            ask: "Proficient Persuasion (charisma)",
            type: "radio",
            id: "persuasion",
            default: character.persuasion,
            required: false
        },
        {
            ask: "Passive Wisdom (Perception) Score",
            type: "textbox",
            id: "passivePerception",
            default: character.passivePerception,
            required: true
        }

    ]
    let html = createHtmlElement(proficiencies, 'window1Create', 'window2Validate', false)
    modal.appendChild(html)
}
function window2Validate() {
    let error = false
    let errorText = ''
    // validate proficiency bonus
    let proficiencyBonus = valueById('proficiencyBonus')
    if (validateWholeNumber(parseInt(proficiencyBonus)) && parseInt(proficiencyBonus) >= 0) {
        character.proficiencyBonus = parseInt(proficiencyBonus)
    } else { error = true; errorText += ` Please enter a valid proficiency Bonus` }
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
    character.passivePerception = parseInt(valueById('passivePerception'))
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
            
            character[ability.name] = document.getElementById(ability.name).checked
            character[ability.name] = document.getElementById(ability.name).checked
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
        console.log(character)
        window3Create()
    }
}