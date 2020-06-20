
let bagsToUpdate = []
async function window5Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    
    let title = document.createElement('h1')
    title.innerText = 'Armor Inventory'
    // modal.appendChild(title)

    let inventoryBag = await createArmorBag()
    let inventory = await createInventoryTable(inventoryBag, 'Armor')
    modal.appendChild(inventory)

    let html = createHtmlElement([], 'window4Create', 'window5Validate', false)
    modal.appendChild(html)
}

function window5Validate(){
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
         window6Create()
    }
}
async function createArmorBag(){
    let data = {
        characterId: globalCharacterID,
        name: 'Armor'
    }
    data = JSON.stringify(data)
    let bagId = await dbCreateBag(data)
    bagId = bagId.objectId
    bagsToUpdate.push(bagId)
    return bagId
}

