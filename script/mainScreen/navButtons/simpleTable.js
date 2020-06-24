
async function loadSimpleBag(bagId, type) {
    let main = document.getElementById('navMain')
    main.innerHTML = ''
    let bag = await createSimpleTable(bagId, type)
    main.appendChild(bag)
}

async function createSimpleTable(bagId, type) {
    let main = document.createElement('div')
    let title = document.createElement('h1')
    let bagName = await dbGetBagById(bagId)
    bagName = bagName.name
    title.innerText = `${bagName}`
    main.appendChild(title)
    main.className = 'simpleTableDiv'
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

    let labelHeader = document.createElement('th')
    labelHeader.innerText = 'Label'
    labelHeader.className = 'simpleLabelColumn'
    newHeaderRow.appendChild(labelHeader)

    let notesHeader = document.createElement('th')
    notesHeader.innerText = 'Notes'
    notesHeader.className = 'simpleNotesColumn'
    
    let removeHeader = document.createElement('th')
    removeHeader.style.display = 'none'




    newHeaderRow.appendChild(notesHeader)
    
    newHeaderRow.appendChild(removeHeader)
    headerTable.appendChild(newHeaderRow)
    inventoryDiv.appendChild(headerTable)

    let itemsTable = document.createElement('table')
    itemsTable.id = `itemsTable${bagId}`
    itemsTable.className = 'tableValues'
    console.log(inventory)
    console.log(inventory.length)
    if (inventory.length == 0) {
        addSimpleRow(bagId, type)
    } else {
        inventory.forEach(item => {
            let newRow = document.createElement('tr')
            newRow.id = item.objectId

            let label = document.createElement('td')
            let labelValue = document.createElement('textarea')
            labelValue.value = (item.title) ? item.title : ''
            label.className = 'simpleLabelColumn'
            // label.type = 'text-box'
            labelValue.id = `label${item.objectId}`
            labelValue.setAttribute('onchange', `updateSimpleInventory('${item.objectId}')`)
            label.appendChild(labelValue)
            newRow.appendChild(label)

            let notes = document.createElement('td')
            notes.className = 'simpleNotesColumn'
            let notesValue = document.createElement('textarea')
            // notesValue.type = 'text-box'
            notesValue.value = (item.notes) ? item.notes : ''
            notesValue.id = `notes${item.objectId}`
            notesValue.setAttribute('onchange', `updateSimpleInventory('${item.objectId}')`)
            notes.appendChild(notesValue)
            newRow.appendChild(notes)

            let remove = document.createElement('td')
            remove.className = 'removeColumn'
            let removeValue = document.createElement('button')
            removeValue.innerText = '(-)'
            removeValue.className = 'tableAction'
            removeValue.setAttribute('onclick', `removeItem('${item.objectId}')`)
            remove.appendChild(removeValue)
            newRow.appendChild(remove)


            itemsTable.appendChild(newRow)
        })

        let newRow = await addSimpleRowValue(bagId, type)
        itemsTable.appendChild(newRow)
    }
    inventoryDiv.appendChild(itemsTable)
    main.appendChild(inventoryDiv)

    loader(false)
    return main
}

function updateSimpleInventory(rowId) {
    let data = {
        title: document.getElementById(`label${rowId}`).value,
        notes: document.getElementById(`notes${rowId}`).value
    }
   
    data = JSON.stringify(data)
    dbUpdateInventory(rowId, data)
}


async function addSimpleRow(id,type) {
    // remove tableNewRow from table
    if (document.getElementById('tableNewRow')) {
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

    let label = document.createElement('td')
    label.className = 'simpleLabelColumn'
    let labelValue = document.createElement('textarea')
    // labelValue.type = 'text-box'
    labelValue.id = `label${newRowId}`
    labelValue.setAttribute('onchange', `updateSimpleInventory( '${newRowId}')`)
    label.appendChild(labelValue)
    newRow.appendChild(label)


    let notes = document.createElement('td')
    notes.className = 'simpleNotesColumn'
    let notesValue = document.createElement('textarea')
    // notesValue.type = 'text-box'
    notesValue.id = `notes${newRowId}`
    notesValue.setAttribute('onchange', `updateSimpleInventory( '${newRowId}')`)
    notes.appendChild(notesValue)
    newRow.appendChild(notes)

    let remove = document.createElement('td')
    remove.className = 'removeColumn'
    let removeValue = document.createElement('button')
    removeValue.innerText = '(-)'
    removeValue.className = 'tableAction'
    removeValue.setAttribute('onclick', `removeItem('${newRowId}')`)
    remove.appendChild(removeValue)
    newRow.appendChild(remove)

    let itemsTable = document.getElementById(`itemsTable${id}`)
    itemsTable.appendChild(newRow)
    // add tableNewRow to table
    let newRowToAdd = await addSimpleRowValue(id, type)
    itemsTable.appendChild(newRowToAdd)
}

function addSimpleRowValue(bagId, type) {
    let newRow = document.createElement('tr')
    let newRowValue = document.createElement('td')
    let newRowButton = document.createElement('button')
    newRowButton.innerText = '(+)'
    newRowButton.className = 'tableAction'
    newRowButton.setAttribute('onclick', `addSimpleRow('${bagId}','${type}')`)
    newRowValue.appendChild(newRowButton)
    newRow.appendChild(newRowValue)
    newRow.id = 'tableNewRow'
    return newRow
}
// dbCreateInventoryItem(data)