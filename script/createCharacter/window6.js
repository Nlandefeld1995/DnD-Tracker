

async function window6Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    
    let title = document.createElement('h1')
    title.innerText = 'Weapons Inventory'
    modal.appendChild(title)

    let inventoryBag = await createWeaponBag()
    let inventory = await createInventoryTable(inventoryBag)
    modal.appendChild(inventory)

    let html = createHtmlElement([], 'window5Create', 'window6Validate', false)
    modal.appendChild(html)
}

function window6Validate(){
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
         window7Create()
    }
}
async function createWeaponBag(){
    let data = {
        characterId: globalCharacterID,
        name: 'Weapons'
    }
    data = JSON.stringify(data)
    let bagId = await dbCreateBag(data)
    bagId = bagId.objectId
    bagsToUpdate.push(bagId)
    return bagId
}

