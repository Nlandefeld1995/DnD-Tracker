async function validateProficiencies() {
    let error = false
    let errorText = ''

    // non proficiancies list
    let level = document.getElementById('levelValueId').value
    level = parseInt(level)
    character.proficiencyBonus = await getPBonusByLevel(level)
    let proficiancies = [{
            name: 'Strength',
            id: 'strengthScore',
            mod: 'strengthMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'strengthSavingThrowScore',
                    selected: 'strengthSavingThrow'
                },
                {
                    name: 'Athletics',
                    id: 'athleticsScore',
                    selected: 'athletics'
                }
            ]
        },
        {
            name: 'Dexterity',
            id: 'dexScore',
            mod: 'dexMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'dexSavingThrowScore',
                    selected: 'dexSavingThrow'
                },
                {
                    name: 'Acrobatics',
                    id: 'acrobaticsScore',
                    selected: 'acrobatics'
                },
                {
                    name: 'Sleight Of Hand',
                    id: 'sleightOfHandScore',
                    selected: 'sleightOfHand'
                },
                {
                    name: 'Stealth',
                    id: 'stealthScore',
                    selected: 'stealth'
                }
            ]
        },
        {
            name: "Constitution",
            id: 'conScore',
            mod: 'conMod',
            children: [{
                name: 'Saving Throws',
                id: 'conSavingThrowScore',
                selected: 'conSavingThrow'
            }]
        },
        {
            name: "Intelligence",
            id: 'intelScore',
            mod: 'intelMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'intelSavingThrowScore',
                    selected: 'intelSavingThrow'
                },
                {
                    name: 'Arcana',
                    id: 'arcanaScore',
                    selected: 'arcana'
                },
                {
                    name: 'History',
                    id: 'historyScore',
                    selected: 'history'
                },
                {
                    name: 'Investigation',
                    id: 'investigationScore',
                    selected: 'investigation'
                },
                {
                    name: 'Nature',
                    id: 'natureScore',
                    selected: 'nature'
                },
                {
                    name: 'Regligion',
                    id: 'religionScore',
                    selected: 'religion'
                }
            ]
        },
        {
            name: 'Wisdom',
            id: 'wisdomScore',
            mod: 'wisdomMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'wisdomSavingThrowScore',
                    selected: 'wisdomSavingThrow'
                },
                {
                    name: 'Animal Handling',
                    id: 'animalHandlingScore',
                    selected: 'animalHandling'
                },
                {
                    name: 'Insight',
                    id: 'insightScore',
                    selected: 'insight'
                },
                {
                    name: 'Medicine',
                    id: 'medicineScore',
                    selected: 'medicine'
                },
                {
                    name: 'Perception',
                    id: 'perceptionScore',
                    selected: 'perception'
                },
                {
                    name: 'Survival',
                    id: 'survivalScore',
                    selected: 'survival'
                }
            ]
        },
        {
            name: 'Charisma',
            id: 'charismaScore',
            mod: 'charismaMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'charismaSavingThrowScore',
                    selected: 'charismaSavingThrow'
                },
                {
                    name: 'Deception',
                    id: 'deceptionScore',
                    selected: 'deception'
                },
                {
                    name: 'Intimidation',
                    id: 'intimidationScore',
                    selected: 'intimidation'
                },
                {
                    name: 'Performance',
                    id: 'performanceScore',
                    selected: 'performance'
                },
                {
                    name: 'Persuasion',
                    id: 'persuasionScore',
                    selected: 'persuasion'
                }
            ]
        }
    ]
    for (i = 0; i < proficiancies.length; i++) {
        let prof = proficiancies[i]
        let profValue = document.getElementById(`${prof.id}Id`).value
        
        if (validateWholeNumber(profValue)) {
            character[prof.id] = parseInt(profValue)
        } else {
            error = true
            errorText += `Invalid entry for ${prof.name}`
        }
        let profMod = document.getElementById(`${prof.mod}Mod`).value
        
        if (validateWholeNumber(profMod)) {
            character[prof.mod] = parseInt(profMod)
        } else {
            error = true
            errorText += `Invalid entry for ${prof.name} Modifier`
        }
        for (j = 0; j < (prof.children).length; j++) {
            let profChild = prof.children[j]
            let profChildValue = document.getElementById(`${profChild.id}Id`).innerText
            if (validateWholeNumber(profChildValue)) {
                character[profChild.id] = parseInt(profChildValue)
            } else {
                error = true
                errorText += `Invalid entry for ${profChild.name}`
            }
            let profChildCheckbox = document.getElementById(`${profChild.selected}Id`).checked
            character[profChild.selected] = profChildCheckbox

        }
    }
console.log(character)
    if (!error) {
        updateAllProficiencies()
    } else {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        document.getElementById('errorArea').appendChild(errors)
    }
}

// character = {

//     strengthScore: 18,
//     strengthMod: 4,
//     proficiencyBonus: 3,
//     strengthSavingThrow: true,
//     strengthSavingThrowValue: 7

// }


async function updateAllProficiencies() {
    document.getElementById('proficiencyValueId').value = parseInt(character.proficiencyBonus)
    character.proficiencyBonus = parseInt(character.proficiencyBonus)
    // Strength
    document.getElementById('strengthScoreId').value = character.strengthScore
    document.getElementById('strengthModMod').value = parseInt(findMod(character.strengthScore))
    character.strengthMod = parseInt(findMod(character.strengthScore))
    if (character.strengthSavingThrow) {
        document.getElementById('strengthSavingThrowScoreId').innerText = parseInt(character.strengthMod) + parseInt(character.proficiencyBonus)
        character.strengthSavingThrowScore = parseInt(character.strengthMod) + parseInt(character.proficiencyBonus)
    } else {
        document.getElementById('strengthSavingThrowScoreId').innerText = parseInt(character.strengthMod)
        character.strengthSavingThrowScore = parseInt(character.strengthMod)
    }
    if (character.athletics){
        document.getElementById('athleticsScoreId').innerText = parseInt(character.strengthMod) + parseInt(character.proficiencyBonus)
        character.athleticsScore = parseInt(character.strengthMod) + parseInt(character.strengthMod)
    }else {
        document.getElementById('athleticsScoreId').innerText = parseInt(character.strengthMod)
        character.athleticsScore = parseInt(character.strengthMod)
    }

    //  Dexterity
    document.getElementById('dexScoreId').value = character.dexScore
    document.getElementById('dexModMod').value = parseInt(findMod(character.dexScore))
    character.dexMod = parseInt(findMod(character.dexScore))
    if(character.dexSavingThrow){
        document.getElementById('dexSavingThrowScoreId').innerText = parseInt(character.dexMod) + parseInt(character.proficiencyBonus)
        character.dexSavingThrowScore = parseInt(character.dexMod) + parseInt(character.proficiencyBonus)
    } else {
        document.getElementById('dexSavingThrowScoreId').innerText = parseInt(character.dexMod)
        character.dexSavingThrowScore = parseInt(character.dexMod)
    }
    if(character.acrobatics){
        document.getElementById('acrobaticsScoreId').innerText = parseInt(character.dexMod) + parseInt(character.proficiencyBonus)
        character.acrobaticsScore = parseInt(character.dexMod) + parseInt(character.proficiencyBonus)
    }
    else{
        document.getElementById('acrobaticsScoreId').innerText = parseInt(character.dexMod) 
        character.acrobaticsScore = parseInt(character.dexMod) 
    }
    if(character.sleightOfHand){
        document.getElementById('sleightOfHandScoreId').innerText = parseInt(character.dexMod)  + parseInt(character.proficiencyBonus)
        character.sleightOfHandScore = parseInt(character.dexMod)  + parseInt(character.proficiencyBonus)
    } else {
        document.getElementById('sleightOfHandScoreId').innerText = parseInt(character.dexMod)  
        character.sleightOfHandScore = parseInt(character.dexMod)  
    }
    if(character.stealth){
        document.getElementById('stealthScoreId').innerText = parseInt(character.dexMod)  + parseInt(character.proficiencyBonus)
        character.stealthScore = parseInt(character.dexMod)  + parseInt(character.proficiencyBonus)
    } else {
        document.getElementById('stealthScoreId').innerText = parseInt(character.dexMod)  
        character.stealthScore = parseInt(character.dexMod)  
    }

    //  Constitution
    document.getElementById('conScoreId').value = character.conScore
    document.getElementById('conModMod').value = parseInt(findMod(character.conScore))
    character.conMod = parseInt(findMod(character.conScore))
    if(character.conSavingThrow){
        document.getElementById('conSavingThrowScoreId').innerText = parseInt(character.conMod) + parseInt(character.proficiencyBonus)
        character.conSavingThrowScore = parseInt(character.conMod) + parseInt(character.proficiencyBonus)
    }else{
        document.getElementById('conSavingThrowScoreId').innerText = parseInt(character.conMod) 
        character.conSavingThrowScore = parseInt(character.conMod) 
    }

    // Inteligence
    document.getElementById('intelScoreId').value = character.intelScore
    document.getElementById('intelModMod').value = parseInt(findMod(character.intelScore))
    character.intelMod = parseInt(findMod(character.intelScore))
    if(character.intelSavingThrow){
        document.getElementById('intelSavingThrowScoreId').innerText = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
        character.intelSavingThrowScore = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
    }
    else {
        document.getElementById('intelSavingThrowScoreId').innerText = parseInt(character.intelMod) 
        character.intelSavingThrowScore = parseInt(character.intelMod) 
    }
    if(character.arcana){
        document.getElementById('arcanaScoreId').innerText = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
        character.arcanaScore = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('arcanaScoreId').innerText = parseInt(character.intelMod) 
        character.arcanaScore = parseInt(character.intelMod) 
    }
    if(character.history){
        document.getElementById('historyScoreId').innerText = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
        character.historyScore = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('historyScoreId').innerText = parseInt(character.intelMod) 
        character.historyScore = parseInt(character.intelMod) 
    }
    if(character.investigation){
        document.getElementById('investigationScoreId').innerText = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
        character.investigationScore = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('investigationScoreId').innerText = parseInt(character.intelMod) 
        character.investigationScore = parseInt(character.intelMod) 
    }
    if(character.nature){
        document.getElementById('natureScoreId').innerText = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
        character.natureScore = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('natureScoreId').innerText = parseInt(character.intelMod) 
        character.natureScore = parseInt(character.intelMod) 
    }
    if(character.religion){
        document.getElementById('religionScoreId').innerText = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
        character.religionScore = parseInt(character.intelMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('religionScoreId').innerText = parseInt(character.intelMod) 
        character.religionScore = parseInt(character.intelMod) 
    }

// Wisdom
    document.getElementById('wisdomScoreId').value = character.wisdomScore
    document.getElementById('wisdomModMod').value = parseInt(findMod(character.wisdomScore))
    character.wisdomMod = parseInt(findMod(character.wisdomScore))
    if(character.wisdomSavingThrow){
        document.getElementById('wisdomSavingThrowScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.wisdomSavingThrowScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('wisdomSavingThrowScoreId').innerText = parseInt(character.wisdomMod) 
        character.wisdomSavingThrowScore = parseInt(character.wisdomMod) 
    }
    if(character.animalHandling){
        document.getElementById('animalHandlingScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.animalHandlingScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('animalHandlingScoreId').innerText = parseInt(character.wisdomMod) 
        character.animalHandlingScore = parseInt(character.wisdomMod) 
    }
    if(character.insight){
        document.getElementById('insightScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.insightScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }else{
        document.getElementById('insightScoreId').innerText = parseInt(character.wisdomMod) 
        character.insightScore = parseInt(character.wisdomMod) 
    }
    if(character.medicine){
        document.getElementById('medicineScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.medicineScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('medicineScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.medicineScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }
    if(character.perception){
        document.getElementById('perceptionScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.perceptionScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('perceptionScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.perceptionScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }
    if(character.survival){
        document.getElementById('survivalScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.survivalScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('survivalScoreId').innerText = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
        character.survivalScore = parseInt(character.wisdomMod) + parseInt(character.proficiencyBonus)
    }

    // Charisma
    document.getElementById('charismaScoreId').value = character.charismaScore
    document.getElementById('charismaModMod').value = parseInt(findMod(character.charismaScore))
    character.charismaMod = parseInt(findMod(character.charismaScore))
    if(character.charismaSavingThrow){
        document.getElementById('charismaSavingThrowScoreId').innerText = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
        character.charismaSavingThrowScore = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('charismaSavingThrowScoreId').innerText = parseInt(character.charismaMod) 
        character.charismaSavingThrowScore = parseInt(character.charismaMod) 
    }
    if(character.deception){
        document.getElementById('deceptionScoreId').innerText = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
        character.deceptionScore = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
    }
    else {
        document.getElementById('deceptionScoreId').innerText = parseInt(character.charismaMod) 
        character.deceptionScore = parseInt(character.charismaMod) 
    }
    if(character.intimidation){
        document.getElementById('intimidationScoreId').innerText = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
        character.intimidationScore = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('intimidationScoreId').innerText = parseInt(character.charismaMod) 
        character.intimidationScore = parseInt(character.charismaMod) 
    }
    if(character.performance){
        document.getElementById('performanceScoreId').innerText = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
        character.performanceScore = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('performanceScoreId').innerText = parseInt(character.charismaMod) 
        character.performanceScore = parseInt(character.charismaMod) 
    }
    if(character.persuasion){
        document.getElementById('persuasionScoreId').innerText = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
        character.persuasionScore = parseInt(character.charismaMod) + parseInt(character.proficiencyBonus)
    }else {
        document.getElementById('persuasionScoreId').innerText = parseInt(character.charismaMod) 
        character.persuasionScore = parseInt(character.charismaMod) 
    }

    document.getElementById('passiveWisdomId').value = character.wisdomMod + 10
    character.passivePerception = character.wisdomMod + 10

    delete character.createdAt
    delete character.updatedAt

    let response = await dbUpdateCharacter(globalCharacterID, JSON.stringify(character))
    console.log(response)
    if (response.updatedAt) {
        console.log('update Sucess')
    } else {
        console.log('failed to update')
    }
}