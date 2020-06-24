async function window9Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let bag = await createProficienciesBag()
    let proficiencies = await createSimpleTable(bag, 'Proficiencies')
    modal.appendChild(proficiencies)
    let html = createHtmlElement([], 'window8Create', 'window9Validate', false)
    modal.appendChild(html)
}

function window9Validate(){
    error = false
    errorText = ''
        
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        window10Create()
    }
}

async function createProficienciesBag(){
    let data = {
        characterId: globalCharacterID,
        name: 'Proficiencies & Languages'
    }
    data = JSON.stringify(data)
    let bagId = await dbCreateBag(data)
    bagId = bagId.objectId
    bagsToUpdate.push(bagId)
    return bagId
}