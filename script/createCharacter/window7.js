

async function window7Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    
    let title = document.createElement('h1')
    title.innerText = 'Inventory'
    // modal.appendChild(title)

    let inventoryBag = await createInventoryBag()
    let inventory = await createInventoryTable(inventoryBag, 'Inventory')
    modal.appendChild(inventory)

    let html = createHtmlElement([], 'window6Create', 'window7Validate', true)
    modal.appendChild(html)
}

function window7Validate(){
    error = false
    errorText = ''
    // validate max hit
    
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
async function createInventoryBag(){
    let data = {
        characterId: globalCharacterID,
        name: 'Inventory'
    }
    data = JSON.stringify(data)
    let bagId = await dbCreateBag(data)
    bagId = bagId.objectId
    bagsToUpdate.push(bagId)
    return bagId
}

