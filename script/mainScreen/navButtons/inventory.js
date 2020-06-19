function addBag() {
    loader(true)
    let main = document.getElementById('navMain')
    main.innerHTML = ''

    let name = document.createElement('h1')
    name.innerText = 'Bag Name:'
    name.className = 'input'
    let nameInput = document.createElement('input')
    nameInput.id = 'newBagId'
    nameInput.className = 'input'
    nameInput.placeholder = 'New Bag Name'
    let nameSubmit = document.createElement('button')
    nameSubmit.innerText = 'Submit'
    nameSubmit.setAttribute('onclick',`saveNewBag()`)
    nameSubmit.className = 'input'

    main.appendChild(name)
    main.appendChild(nameInput)
    main.appendChild(nameSubmit)

    loader(false)
}

async function saveNewBag() {
    let bag = document.getElementById('newBagId').value
    let data = {
        characterId: globalCharacterID,
        name: bag
    }
    console.log(data)
    data = JSON.stringify(data)
    let bagId = await dbCreateBag(data)
    bagId = bagId.objectId
    let inventory = await createInventoryTable(bagId)
    let main = document.getElementById('navMain')
    main.innerHTML = ''
    main.appendChild(inventory)
    let newNav = await createNavBar()
    let navigationMenu = document.getElementById('navigationDiv')
    navigationMenu.innerHTML = ''
    jQuery('#navigationDiv').replaceWith(newNav);
}

async function loadBag(bagId){
    let main = document.getElementById('navMain')
    main.innerHTML = ''
    let bag = await createInventoryTable(bagId)
    main.appendChild(bag)
}

async function createInventoryTable(bagId){
    let main = document.createElement('div')
    let title = document.createElement('h1')
    let bagName = await dbGetBagById(bagId)
    bagName = bagName.name
    title.innerText = `${bagName}`
    main.appendChild(title)
    main.className = 'inventoryTableDiv'
    loader(true)
    let inventory = []
    let inventoryResponse = await dbGetInventory()
    inventoryResponse = inventoryResponse.results
    console.log(inventoryResponse)
    for (i = 0; i < inventoryResponse.length; i++) {
        if (inventoryResponse[i].bagId == bagId) {
            inventory.push(inventoryResponse[i])
        }
    }

    let inventoryDiv = document.createElement('div')
    let headerTable = document.createElement('table')
    let newHeaderRow = document.createElement('tr')
    headerTable.className = 'tableHeader'
    let itemHeader = document.createElement('th')
    itemHeader.innerText = 'Item'
    itemHeader.className = 'itemColumn'
    let notesHeader = document.createElement('th')
    notesHeader.innerText = 'Notes'
    notesHeader.className = 'notesColumn'
    let attunedItemHeader = document.createElement('th')
    attunedItemHeader.innerText = 'Attunement'
    attunedItemHeader.className = 'attunementColumn'
    let removeHeader = document.createElement('th')
    removeHeader.style.display = 'none'
    newHeaderRow.appendChild(itemHeader)
    newHeaderRow.appendChild(notesHeader)
    newHeaderRow.appendChild(attunedItemHeader)
    newHeaderRow.appendChild(removeHeader)
    headerTable.appendChild(newHeaderRow)
    inventoryDiv.appendChild(headerTable)

    let itemsTable = document.createElement('table')
    itemsTable.id = `itemsTable${bagId}`
    itemsTable.className = 'tableValues'
    console.log(inventory)
    console.log(inventory.length)
    if(inventory.length == 0 ){
        addRow(bagId)
    }
    else {
    inventory.forEach(item => {
        let newRow = document.createElement('tr')
        newRow.id = item.objectId
        let title = document.createElement('td')
        let titleValue = document.createElement('input')
        titleValue.value = item.title
        title.className = 'itemColumn'
        titleValue.id = `title${item.objectId}`
        titleValue.setAttribute('onchange', `updateInventory('${item.objectId}')`)
        title.appendChild(titleValue)

        let notes = document.createElement('td')
        notes.className = 'notesColumn'
        let notesValue = document.createElement('input')
        notesValue.value = item.notes

        
        
        notesValue.id = `notes${item.objectId}`
        notesValue.setAttribute('onchange',`updateInventory('${item.objectId}')`)
        notes.appendChild(notesValue)

        let attunement = document.createElement('td')
        attunement.className = 'attunementColumn'
        let attunementValue = document.createElement('input')
        attunementValue.type = 'checkbox'
        attunementValue.checked = (item.attunement) ? (item.attunement) : false

        attunementValue.id = `attunement${item.objectId}`
        attunementValue.setAttribute('onchange',`updateInventory('${item.objectId}')`)
        attunement.appendChild(attunementValue)


        let remove = document.createElement('td')
        remove.className = 'removeColumn'
        let removeValue = document.createElement('button')
        removeValue.innerText = '(-)'
        removeValue.className = 'tableAction'
        removeValue.setAttribute('onclick', `removeItem('${item.objectId}')`)
        remove.appendChild(removeValue)

        newRow.appendChild(title)
        newRow.appendChild(notes)
        newRow.appendChild(attunement)
        newRow.appendChild(remove)
        itemsTable.appendChild(newRow)
    })

    let newRow = await addRowValue(bagId)
    itemsTable.appendChild(newRow)
}
    inventoryDiv.appendChild(itemsTable)
    main.appendChild(inventoryDiv)
    
    loader(false)
    return main 
}

function updateInventory(rowId) {
    let data = {
        title: document.getElementById(`title${rowId}`).value,
        notes: document.getElementById(`notes${rowId}`).value,
        attunement: document.getElementById(`attunement${rowId}`).checked
    }
    data = JSON.stringify(data)
    dbUpdateInventory(rowId, data)
}
function removeItem(id) {
    dbDeleteInventory(id)
    let element = document.getElementById(id)
    element.parentNode.removeChild(element)
}
async function addRow(id) {
    // remove tableNewRow from table
    if(document.getElementById('tableNewRow')){
        let element = document.getElementById('tableNewRow')
        element.parentNode.removeChild(element)
    }
    
    // create new row in db to get id
    let data = {
        bagId: id
    }
    data = JSON.stringify(data)
    let newRowId = await dbCreateInventoryItem(data)
    console.log(newRowId)
    newRowId = newRowId.objectId
    // create fields for user to add to
    let newRow = document.createElement('tr')
    newRow.id = newRowId
    let title = document.createElement('td')
    title.className = 'itemColumn'
    let titleValue = document.createElement('input')
    
    titleValue.id = `title${newRowId}`
    titleValue.setAttribute('onchange',`updateInventory( '${newRowId}')`)
    title.appendChild(titleValue)

    let notes = document.createElement('td')
    notes.className = 'notesColumn'
    let notesValue = document.createElement('input')
    
    notesValue.id = `notes${newRowId}`
    notesValue.setAttribute('onchange',`updateInventory( '${newRowId}')`)
    notes.appendChild(notesValue)

    let attunement = document.createElement('td')
    attunement.className = 'attunementColumn'
    let attunementValue = document.createElement('input')
    attunementValue.type = 'checkbox'
    
    attunementValue.id = `attunement${newRowId}`
    attunementValue.setAttribute('onchange',`updateInventory( '${newRowId}')`)
    attunement.appendChild(attunementValue)

    let remove = document.createElement('td')
    remove.className = 'removeColumn'
    let removeValue = document.createElement('button')
    removeValue.innerText = '(-)'
    removeValue.className = 'tableAction'
    removeValue.setAttribute('onclick',`removeItem('${newRowId}')`)
    remove.appendChild(removeValue)

    newRow.appendChild(title)
    newRow.appendChild(notes)
    newRow.appendChild(attunement)
    newRow.appendChild(remove)

    let itemsTable = document.getElementById(`itemsTable${id}`)
    itemsTable.appendChild(newRow)
    // add tableNewRow to table
    let newRowToAdd = await addRowValue(id)
    itemsTable.appendChild(newRowToAdd)
}
function addRowValue(bagId) {
    let newRow = document.createElement('tr')
    let newRowValue = document.createElement('td')
    let newRowButton = document.createElement('button')
    newRowButton.innerText = '(+)'
    newRowButton.className = 'tableAction'
    newRowButton.setAttribute('onclick', `addRow('${bagId}')`)
    newRowValue.appendChild(newRowButton)
    newRow.appendChild(newRowValue)
    newRow.id = 'tableNewRow'
    return newRow
}
// dbCreateInventoryItem(data)