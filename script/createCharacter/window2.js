function window2Create() {
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
    let html = createHtmlElement(proficiencies, 'window1Create', 'window2Validate', false)
    modal.appendChild(html)
}
function window2Validate() {
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
        window3Create()
    }
}