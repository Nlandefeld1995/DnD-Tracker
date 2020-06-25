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
    nameSubmit.setAttribute('onclick', `saveNewBag()`)
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
    let inventory = await createInventoryTable(bagId, bag)
    let main = document.getElementById('navMain')
    main.innerHTML = ''
    main.appendChild(inventory)
    let newNav = await createNavBar()
    let navigationMenu = document.getElementById('navigationDiv')
    navigationMenu.innerHTML = ''
    jQuery('#navigationDiv').replaceWith(newNav);
}

async function loadBag(bagId, type) {
    let main = document.getElementById('navMain')
    main.innerHTML = ''
    let bag = await createInventoryTable(bagId, type)
    main.appendChild(bag)
}

async function createInventoryTable(bagId, type) {
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

    let qtyHeader = document.createElement('th')
    qtyHeader.innerText = 'Qty'
    qtyHeader.className = 'qtyColumn'
    newHeaderRow.appendChild(qtyHeader)

    let itemHeader = document.createElement('th')
    itemHeader.innerText = 'Item'
    itemHeader.className = 'itemColumn'
    newHeaderRow.appendChild(itemHeader)

    if (type == 'Armor') {
        let unknownColumnHeader = document.createElement('th')
        unknownColumnHeader.innerText = 'Armor Class (AC)'
        unknownColumnHeader.className = 'unknownColumn'
        newHeaderRow.appendChild(unknownColumnHeader)
    } else if (type == 'Weapons') {
        let unknownColumnHeader = document.createElement('th')
        unknownColumnHeader.innerText = 'Atk Bonus'
        unknownColumnHeader.className = 'unknownColumn'
        newHeaderRow.appendChild(unknownColumnHeader)
        let unknown2ColumnHeader = document.createElement('th')
        unknown2ColumnHeader.innerText = 'Damage'
        unknown2ColumnHeader.className = 'unknownColumn'
        newHeaderRow.appendChild(unknown2ColumnHeader)
    }

    let notesHeader = document.createElement('th')
    notesHeader.innerText = 'Notes'
    notesHeader.className = 'notesColumn'
    let attunedItemHeader = document.createElement('th')
    attunedItemHeader.innerText = 'Attunement'
    attunedItemHeader.className = 'attunementColumn'
    let removeHeader = document.createElement('th')
    removeHeader.style.display = 'none'




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
    if (inventory.length == 0) {
        addRow(bagId, type)
    } else {
        inventory.forEach(item => {
            let newRow = document.createElement('tr')
            newRow.id = item.objectId

            let qty = document.createElement('td')
            let qtyValue = document.createElement('input')
            qtyValue.value = (item.qty) ? item.qty : 0
            qty.className = 'qtyColumn'
            qtyValue.id = `qty${item.objectId}`
            qtyValue.type = 'number'
            qtyValue.setAttribute('onchange', `updateInventory('${item.objectId}')`)
            qty.appendChild(qtyValue)
            newRow.appendChild(qty)

            let title = document.createElement('td')
            let titleValue = document.createElement('textarea')
            titleValue.value = (item.title) ? item.title : ''
            title.className = 'itemColumn'
            // title.type = 'text-box'
            titleValue.id = `title${item.objectId}`
            titleValue.setAttribute('onchange', `updateInventory('${item.objectId}')`)
            title.appendChild(titleValue)
            newRow.appendChild(title)

            if (type == 'Armor') {
                let unknown = document.createElement('td')
                let unknownValue = document.createElement('textarea')
                unknownValue.value = (item.ac) ? item.ac : ''
                unknown.className = 'unknownColumn'
                unknownValue.id = `ac${item.objectId}`
                unknown.appendChild(unknownValue)
                newRow.appendChild(unknown)
            } else if (type == 'Weapons') {
                let unknown = document.createElement('td')
                let unknownValue = document.createElement('textarea')
                unknownValue.value = (item.atkBonus) ? item.atkBonus : ''
                unknown.className = 'unknownColumn'
                unknownValue.id = `atkBonus${item.objectId}`
                unknown.appendChild(unknownValue)
                newRow.appendChild(unknown)
                let unknown2 = document.createElement('td')
                let unknown2Value = document.createElement('textarea')
                unknown2Value.value = (item.damage) ? item.damage : ''
                unknown2.className = 'unknownColumn'
                unknown2Value.id = `damage${item.objectId}`
                unknown2.appendChild(unknown2Value)
                newRow.appendChild(unknown2)
            }

            let notes = document.createElement('td')
            notes.className = 'notesColumn'
            let notesValue = document.createElement('textarea')
            // notesValue.type = 'text-box'
            notesValue.value = (item.notes) ? item.notes : ''
            notesValue.id = `notes${item.objectId}`
            notesValue.setAttribute('onchange', `updateInventory('${item.objectId}')`)
            notes.appendChild(notesValue)
            newRow.appendChild(notes)

            let attunement = document.createElement('td')
            attunement.classList = 'attunementColumn'
            let attunementValue = document.createElement('input')
            attunementValue.className = 'attunmentCheckBox'
            attunementValue.type = 'checkbox'
            attunementValue.checked = (item.attunement) ? (item.attunement) : false

            attunementValue.id = `attunement${item.objectId}`
            attunementValue.setAttribute('onchange', `updateInventory('${item.objectId}')`)
            attunement.appendChild(attunementValue)
            newRow.appendChild(attunement)

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

        let newRow = await addRowValue(bagId, type)
        itemsTable.appendChild(newRow)
    }
    inventoryDiv.appendChild(itemsTable)
    main.appendChild(inventoryDiv)

    loader(false)
    return main
}

function updateInventory(rowId) {
    let data = {
        qty: document.getElementById(`qty${rowId}`).value,
        title: document.getElementById(`title${rowId}`).value,
        notes: document.getElementById(`notes${rowId}`).value,
        attunement: document.getElementById(`attunement${rowId}`).checked
    }
    if(document.getElementById(`ac${rowId}`)){
        data.ac = document.getElementById(`ac${rowId}`).value
    }
    else if (document.getElementById(`damage${rowId}`)){
        data.damage = document.getElementById(`damage${rowId}`).value
        data.atkBonus = document.getElementById(`atkBonus${rowId}`).value
    }
    data = JSON.stringify(data)
    dbUpdateInventory(rowId, data)
}

function removeItem(id) {
    dbDeleteInventory(id)
    let element = document.getElementById(id)
    element.parentNode.removeChild(element)
}
async function addRow(id,type) {
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

    let qty = document.createElement('td')
    qty.className = 'qtyColumn'
    let qtyValue = document.createElement('input')
    qtyValue.id = `qty${newRowId}`
    qtyValue.type = 'number'
    qtyValue.setAttribute('onchange', `updateInventory( '${newRowId}')`)
    qty.appendChild(qtyValue)
    newRow.appendChild(qty)

    let title = document.createElement('td')
    title.className = 'itemColumn'
    let titleValue = document.createElement('textarea')
    // titleValue.type = 'text-box'
    titleValue.id = `title${newRowId}`
    titleValue.setAttribute('onchange', `updateInventory( '${newRowId}')`)
    title.appendChild(titleValue)
    newRow.appendChild(title)

    if (type == 'Armor') {
        let unknown = document.createElement('td')
        unknown.className = 'unknownColumn'
        let unknownValue = document.createElement('textarea')
        unknownValue.id = `ac${newRowId}`
        unknownValue.setAttribute('onchange', `updateInventory( '${newRowId}')`)
        unknown.appendChild(unknownValue)
        newRow.appendChild(unknown)
    } else if (type == 'Weapons') {
        let unknown = document.createElement('td')
        unknown.className = 'unknownColumn'
        let unknownValue = document.createElement('textarea')
        unknownValue.id = `atkBonus${newRowId}`
        unknownValue.setAttribute('onchange', `updateInventory( '${newRowId}')`)
        unknown.appendChild(unknownValue)
        newRow.appendChild(unknown)
        let unknown2 = document.createElement('td')
        unknown2.className = 'unknownColumn'
        let unknown2Value = document.createElement('textarea')
        unknown2Value.id = `damage${newRowId}`
        unknown2Value.setAttribute('onchange', `updateInventory( '${newRowId}')`)
        unknown2.appendChild(unknown2Value)
        newRow.appendChild(unknown2)
    }


    let notes = document.createElement('td')
    notes.className = 'notesColumn'
    let notesValue = document.createElement('textarea')
    // notesValue.type = 'text-box'
    notesValue.id = `notes${newRowId}`
    notesValue.setAttribute('onchange', `updateInventory( '${newRowId}')`)
    notes.appendChild(notesValue)
    newRow.appendChild(notes)

    let attunement = document.createElement('td')
    attunement.classList = 'attunementColumn'
    let attunementValue = document.createElement('input')
    attunementValue.className = 'attunmentCheckBox'
    attunementValue.type = 'checkbox'

    attunementValue.id = `attunement${newRowId}`
    attunementValue.setAttribute('onchange', `updateInventory( '${newRowId}')`)
    attunement.appendChild(attunementValue)
    newRow.appendChild(attunement)

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
    let newRowToAdd = await addRowValue(id, type)
    itemsTable.appendChild(newRowToAdd)
}

function addRowValue(bagId, type) {
    let newRow = document.createElement('tr')
    let newRowValue = document.createElement('td')
    let newRowButton = document.createElement('button')
    newRowButton.innerText = '(+)'
    newRowButton.className = 'tableAction'
    newRowButton.setAttribute('onclick', `addRow('${bagId}','${type}')`)
    newRowValue.appendChild(newRowButton)
    newRow.appendChild(newRowValue)
    newRow.id = 'tableNewRow'
    return newRow
}
// dbCreateInventoryItem(data)