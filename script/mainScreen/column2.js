async function column2() {
    let column2 = document.createElement('div')
    column2.style.width = '60vw'

    column2.style.borderRight = 'solid #b78846'
    column2.style.float = 'left'

    column2.style.height = '100vh'
    column2.style.paddingRight = '5px'
    column2.style.position = 'absolute'

    column2.style.left = '20%'
    column2.style.paddingLeft = '5px'
    column2.id = 'mainColumn2'
    let playerinformation = await createPlayerInfo()
    column2.appendChild(playerinformation)


    let navigation = await createNavBar()
    column2.appendChild(navigation)

    let mainDivArea = document.createElement('div')
    mainDivArea.id = 'navMain'
    column2.appendChild(mainDivArea)
    return column2
}


async function createPlayerInfo() {
    let div = document.createElement('div')
    div.id = 'playerInfoDiv'

    let divRow1 = document.createElement('div')
    divRow1.id = 'playerInfoRow1'

    let nameDiv = document.createElement('div')
    nameDiv.id = 'playerInfoNameDiv'
    nameDiv.className = 'playerInfoRow'
    let nameText = document.createElement('h5')
    nameText.innerText = 'Name:'
    let nameValue = document.createElement('input')
    nameValue.value = character.name
    nameValue.readOnly = true
    nameValue.className = 'inputTextBox3'
    nameDiv.appendChild(nameText)
    nameDiv.appendChild(nameValue)

    let raceDiv = document.createElement('div')
    raceDiv.id = 'playerInfoRaceDiv'
    raceDiv.className = 'playerInfoRow'
    let raceText = document.createElement('h5')
    raceText.innerText = 'Race:'
    let raceValue = document.createElement('input')
    raceValue.value = character.race
    raceValue.readOnly = true
    raceValue.className = 'inputTextBox3'
    raceDiv.appendChild(raceText)
    raceDiv.appendChild(raceValue)

    let classDiv = document.createElement('div')
    classDiv.id = 'playerInfoClassDiv'
    classDiv.className = 'playerInfoRow'
    let classText = document.createElement('h5')
    classText.innerText = 'Class:'
    let classValue = document.createElement('input')
    classValue.value = character.class
    classValue.readOnly = true
    classValue.className = 'inputTextBox3'
    classDiv.appendChild(classText)
    classDiv.appendChild(classValue)

    divRow1.appendChild(nameDiv)
    divRow1.appendChild(await createVl())
    divRow1.appendChild(classDiv)
    divRow1.appendChild(await createVl())
    divRow1.appendChild(raceDiv)

    let divRow2 = document.createElement('div')
    divRow2.id = 'playerInfoRow2'

    let backGroundDiv = document.createElement('div')
    backGroundDiv.id = 'playerInfoBackgroundDiv'
    backGroundDiv.className = 'playerInfoRow'
    let backGroundText = document.createElement('h5')
    backGroundText.innerText = 'Background:'
    let backGroundValue = document.createElement('input')
    backGroundValue.value = (character.background) ? character.background : 'N/A'
    // backGroundValue.readOnly = false
    backGroundValue.className = 'inputTextBox3'
    backGroundDiv.appendChild(backGroundText)
    backGroundDiv.appendChild(backGroundValue)

    let alignmentDiv = document.createElement('div')
    alignmentDiv.id = 'playerInfoAlignmentDiv'
    alignmentDiv.className = 'playerInfoRow'
    let alignmentText = document.createElement('h5')
    alignmentText.innerText = "Alignment:"
    let alignmentValue = document.createElement('input')
    alignmentValue.value = (character.alignment) ? character.alignment : 'N/A'
    // alignmentValue.readOnly = false
    alignmentValue.className = 'inputTextBox3'
    alignmentDiv.appendChild(alignmentText)
    alignmentDiv.appendChild(alignmentValue)

    let levelDiv = document.createElement('div')
    levelDiv.id = 'playerInfoLevelDiv'
    levelDiv.className = 'playerInfoRow'
    let levelText = document.createElement('h5')
    levelText.innerText = 'Level:'
    let levelValue = document.createElement('input')
    levelValue.type = 'number'
    levelValue.id = 'levelValueId'
    levelValue.readOnly = true
    levelValue.value = character.level
    // levelValue.readOnly = false
    levelValue.className = 'inputTextBox3'
    levelDiv.appendChild(levelText)
    levelDiv.appendChild(levelValue)

    let xpDiv = document.createElement('div')
    xpDiv.id = 'playerInfoXpDiv'
    xpDiv.className = 'playerInfoRow'
    let xpText = document.createElement('h5')
    xpText.innerText = 'XP:'

    let xpValue = document.createElement('input')
    xpValue.value = character.xp
    xpValue.type = 'number'
    xpValue.id = 'xpValueId'
    xpValue.setAttribute('onchange', 'xpLevelUpdate()')
    // xpValue.readOnly = false
    xpValue.className = 'inputTextBox3'
    xpDiv.appendChild(xpText)
    xpDiv.appendChild(xpValue)

    divRow2.appendChild(backGroundDiv)
    divRow2.appendChild(await createVl())
    divRow2.appendChild(alignmentDiv)
    divRow2.appendChild(await createVl())
    divRow2.appendChild(levelDiv)
    divRow2.appendChild(await createVl())
    divRow2.appendChild(xpDiv)

    div.appendChild(divRow1)
    div.appendChild(divRow2)
    function createVl() {
        let vl = document.createElement('div')
        vl.className = 'vl'
        return vl
    }
    return div
}



async function createNavBar() {
    let bags = await dbGetBags()
    let bagList = []
    let inventoryBag
    let armorBag
    let weaponsBag
    let proficienciesBag
    let characterNotesBag
    let attunements = []
    bags = bags.results
    for (i = 0; i < bags.length; i++) {
        let bag = bags[i]
        if (bag.name == 'Inventory' && bag.characterId == globalCharacterID) {
            inventoryBag = bag.objectId
        }
        else if (bag.name == 'Armor' && bag.characterId == globalCharacterID) {
            armorBag = bag.objectId
        }
        else if (bag.name == 'Weapons' && bag.characterId == globalCharacterID) {
            weaponsBag = bag.objectId
        }
        else if (bag.name == 'Proficiencies & Languages' && bag.characterId == globalCharacterID) {
            proficienciesBag = bag.objectId
        }
        else if (bag.name == 'Character Notes' && bag.characterId == globalCharacterID) {
            characterNotesBag = bag.objectId
        }
        else if (bag.characterId == globalCharacterID) {
            bagList.push(bag)
        }
    }
    let inventory = await dbGetInventory()

    for (i = 0; i < inventory.length; i++) {
        let inv = inventory[i]
        if (globalCharacterID == inv.characterId && inv.attunement) {
            attunements.push(inv)
        }
    }


    let navigation = [
        {
            label: "Favorites",
            children: [
            ]
        },
        {
            label: "Special Abilities",
            children: [
                {
                    label: "Spells",
                    function: "configureFavorites()",
                    id: "navSpells",
                    shown: true
                }
            ]
        },
        {
            label: "Inventory",
            children: [
                {
                    label: "Inventory",
                    function: `loadBag('${inventoryBag}', 'Inventory')`,
                    id: "navInventory",
                    shown: true
                },
                {
                    label: "Armor",
                    function: `loadBag('${armorBag}', 'Armor')`,
                    id: "navArmor",
                    shown: true
                },
                {
                    label: "Weapons",
                    function: `loadBag('${weaponsBag}', 'Weapons')`,
                    id: "navWeapons",
                    shown: true
                }
            ]
        },
        {
            label: "Character",
            children: [
                // {
                //     label: "Player Information",
                //     function: "",
                //     id: "navPlayerInformation",
                //     shown: true
                // },
                {
                    label: "Currency",
                    function: 'loadMoney()',
                    id: 'navMoney',
                    shown: true
                },
                {
                    label: "Proficiencies & Languages",
                    function: `loadSimpleBag('${proficienciesBag}', 'Proficiencies & Languages')`,
                    id: "navProficiencies",
                    shown: true
                },
                {
                    label: "Features & Traits",
                    function: "loadFeaturesTraits()",
                    id: "navFeaturesTraits",
                    shown: true
                },
                {
                    label: "Character Notes",
                    function: `loadSimpleBag('${characterNotesBag}', 'Character Notes')`,
                    id: "navCharacterNotes",
                    shown: true
                }
            ]
        }
    ]
    let invList = (navigation[2]).children
    for (i = 0; i < bagList.length; i++) {
        let bag = bagList[i]
        let unknownBag =
        {
            label: bag.name,
            function: `loadBag('${bag.objectId}')`,
            id: `nav${bag.name}`,
            shown: true
        }

        invList.push(unknownBag)
    }
    invList.push(await navAddNewBag())
    function navAddNewBag() {
        let newBag =
        {
            label: "Add A Bag (+)",
            function: "addBag()",
            id: "navAddBag",
            shown: true
        }
        return newBag
    }

    let navDiv = document.createElement('div')
    navDiv.id = 'navigationDiv'

    navigation.forEach(main => {
        let dropDiv = document.createElement('div')
        dropDiv.className = 'navDropdown'
        let button = document.createElement('button')
        button.className = 'dropbtn'
        button.innerText = main.label
        dropDiv.appendChild(button)

        let contentDiv = document.createElement('div')
        contentDiv.className = 'navDropdown-content'

        let children = main.children
        children.forEach(child => {
            if (child.shown) {
                let c = document.createElement('a')
                c.innerText = child.label
                c.setAttribute('onclick', child.function)
                contentDiv.appendChild(c)
            }

        });
        dropDiv.appendChild(contentDiv)
        navDiv.appendChild(dropDiv)
    });
    return navDiv

}

