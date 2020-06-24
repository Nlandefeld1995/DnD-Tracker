async function window10Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let bag = await createNotesBag()
    let proficiencies = await createSimpleTable(bag, 'CharacterNotes')
    modal.appendChild(proficiencies)
    let html = createHtmlElement([], 'window8Create', 'window10Validate', true)
    modal.appendChild(html)
}

function window10Validate(){
    error = false
    errorText = ''
        
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        saveCharacter()
    }
}

async function createNotesBag(){
    let data = {
        characterId: globalCharacterID,
        name: 'Character Notes'
    }
    data = JSON.stringify(data)
    let bagId = await dbCreateBag(data)
    bagId = bagId.objectId
    bagsToUpdate.push(bagId)
    return bagId
}