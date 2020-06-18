async function updateProficiencyBonus() {
    let proficiencyValue = document.getElementById('proficiencyValueId').value
    if (validateWholeNumber(proficiencyValue) && parseInt(proficiencyValue) >= 0 && parseInt(proficiencyValue) <= 30) {
        // number is a whole number and number is less than 30 and greater than 0
        character.proficiencyBonus = parseInt(proficiencyValue)
        updateAllProficiencies()
    }
    else {
        console.log('Number was invalid')
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
    document.getElementById('proficiencyValueId').value = character.proficiencyBonus
    document.getElementById('strengthValue').value = character.strengthScore
    document.getElementById('strengthModValue').value = findMod(character.strengthScore)
    if (character.strengthSavingThrow) {
        document.getElementById('strengthSavingThrowValue').value = character.strengthMod + character.proficiencyBonus
    }
    else {
        document.getElementById('strengthSavingThrowValue').value = character.strengthMod
    }

    


    let update = await dbUpdateCharacter(globalCharacterID, JSON.stringify(character))
    console.log(update)
    if (update.updatedAt) {
        console.log('update Sucess')
    }
    else {
        console.log('failed to update')
    }
}
