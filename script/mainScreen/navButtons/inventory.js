function addBag() {
    loader(true)
    let main = document.getElementById('navMain')
    main.innerHTML = ''

    let name = document.createElement('h3')
    name.innerText = 'Bag Name:'
    let nameInput = document.createElement('input')
    nameInput.id = 'newBagId'
    nameInput.placeholder = 'New Bag Name'
    let nameSubmit = document.createElement('button')
    nameSubmit.innerText = 'Submit'
    nameSubmit.setAttribute('onclick',`saveNewBag()`)

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
    loadBag(bagId)
}


async function loadBag(bagId) {
    let main = document.getElementById('navMain')
    main.innerHTML = ''
    loader(true)
    let inventory = []
    let inventoryResponse = await dbGetInventory()
    for (i = 0; i < inventoryResponse.length; i++) {
        if (inventoryResponse[i].bagId == bagId) {
            inventory.push(inventoryResponse[i])
        }
    }

    let inventoryDiv = document.createElement('div')
    let headerTable = document.createElement('table')
    let newHeaderRow = document.createElement('trd')
    headerTable.className = 'tableHeader'
    let itemHeader = document.createElement('th')
    itemHeader.innerText = 'Item'
    let notesHeader = document.createElement('th')
    notesHeader.innerText = 'Notes'
    let removeHeader = document.createElement('th')
    removeHeader.style.display = 'none'
    newHeaderRow.appendChild(itemHeader)
    newHeaderRow.appendChild(notesHeader)
    newHeaderRow.appendChild(removeHeader)
    headerTable.appendChild(newHeaderRow)
    inventoryDiv.appendChild(headerTable)

    let itemsTable = document.createElement('table')
    itemsTable.id = `itemsTable${bagId}`
    itemsTable.className = 'tableValues'
    inventory.forEach(item => {
        let newRow = document.createElement('tr')
        newRow.id = item.objectId
        let title = document.createElement('td')
        let titleValue = document.createElement('input')
        titleValue.value = item.title
        
        titleValue.id = `title${item.objectId}`
        titleValue.setAttribute('onchange', `updateInventory('${item.objectId}')`)
        title.appendChild(titleValue)

        let notes = document.createElement('td')
        let notesValue = document.createElement('input')
        notesValue.value = item.notes
        
        notesValue.id = `notes${item.objectId}`
        notesValue.setAttribute('onchange',`updateInventory('${item.objectId}')`)
        notes.appendChild(notesValue)

        let remove = document.createElement('td')
        let removeValue = document.createElement('button')
        removeValue.innerText = '(-)'
        removeValue.setAttribute('onclick', `removeItem('${item.objectId}')`)
        remove.appendChild(removeValue)

        newRow.appendChild(title)
        newRow.appendChild(notes)
        newRow.appendChild(remove)
        itemsTable.appendChild(newRow)
    })
    let newRow = await addRowValue(bagId)
    itemsTable.appendChild(newRow)
    inventoryDiv.appendChild(itemsTable)
    main.appendChild(inventoryDiv)
    loader(false)
}

function updateInventory(rowId) {
    let data = {
        title: document.getElementById(`title${rowId}`).value,
        notes: document.getElementById(`notes${rowId}`).value
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
    let element = document.getElementById('tableNewRow')
    element.parentNode.removeChild(element)
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
    let titleValue = document.createElement('input')
    
    titleValue.id = `title${newRowId}`
    titleValue.setAttribute('onchange',`updateInventory( '${newRowId}')`)
    title.appendChild(titleValue)

    let notes = document.createElement('td')
    let notesValue = document.createElement('input')
    
    notesValue.id = `notes${newRowId}`
    notesValue.setAttribute('onchange',`updateInventory( '${newRowId}')`)
    notes.appendChild(notesValue)

    let remove = document.createElement('td')
    let removeValue = document.createElement('button')
    removeValue.innerText = '(-)'
    removeValue.setAttribute('onclick',`removeItem('${newRowId}')`)
    remove.appendChild(removeValue)

    newRow.appendChild(title)
    newRow.appendChild(notes)
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
    newRowButton.setAttribute('onclick', `addRow('${bagId}')`)
    newRowValue.appendChild(newRowButton)
    newRow.appendChild(newRowValue)
    newRow.id = 'tableNewRow'
    return newRow
}
// dbCreateInventoryItem(data)