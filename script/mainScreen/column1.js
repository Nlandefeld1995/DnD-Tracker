async function column1() {
    let column1 = document.createElement('div')
    column1.style.width = '20vw'
    column1.style.borderRight = 'solid #b78846'
    column1.style.height = '100vh'
    column1.style.float = 'left'
    column1.style.position = 'relative'
    column1.style.paddingRight = '5px'
    column1.id = 'mainColumn1'
    // div settings 
    // drop down button/menu
    // add character
    // select default character
    // delete character
    // logout

    let settingsDiv = document.createElement('div')
    settingsDiv.id = 'settingsDiv'
    let settingsDrop = document.createElement('div')
    settingsDrop.className = 'settingsDropdown'
    let settingsDropButton = document.createElement('button')
    settingsDropButton.innerText = 'Settings'
    settingsDropButton.className = 'dropbtn'
    let settingsDropContentDiv = document.createElement('div')
    settingsDropContentDiv.className = 'settingsDropdown-content'
    let loadCharacter = document.createElement('a')
    loadCharacter.innerText = 'Load Character'
    loadCharacter.setAttribute('onclick', 'oneCharacter()')

    let addCharacter = document.createElement('a')
    addCharacter.innerText = 'New Character'
    addCharacter.setAttribute('onclick', 'oneCharacter()')

    let deleteCharacter = document.createElement('a')
    deleteCharacter.innerText = 'Delete Character'
    deleteCharacter.setAttribute('onclick', 'oneCharacter()')

    let setDefaultCharacter = document.createElement('a')
    setDefaultCharacter.innerText = 'Set Primary Character'
    setDefaultCharacter.setAttribute('onclick', 'oneCharacter()')

    let setLayout = document.createElement('a')
    setLayout.innerText = 'Configure Favorites'
    setLayout.setAttribute('onclick', 'configureFavorites()')

    let logout = document.createElement('a')
    logout.innerText = 'Logout'
    logout.setAttribute('onclick', 'start()')

    settingsDropContentDiv.appendChild(loadCharacter)
    settingsDropContentDiv.appendChild(addCharacter)
    settingsDropContentDiv.appendChild(deleteCharacter)
    settingsDropContentDiv.appendChild(setDefaultCharacter)
    settingsDropContentDiv.appendChild(setLayout)
    settingsDropContentDiv.appendChild(logout)
    settingsDrop.appendChild(settingsDropButton)
    settingsDrop.appendChild(settingsDropContentDiv)
    settingsDiv.appendChild(settingsDrop)

    column1.appendChild(settingsDiv)



    // div proficiancy
    let proficiancyBonusDiv = document.createElement('div')
    proficiancyBonusDiv.className = 'box'
    proficiancyBonusDiv.id = 'proficiancyBonusDiv'
    let proficiancyBoxInner = document.createElement('div')
    proficiancyBoxInner.className = 'box-inner3'
    let proficiancyBonusTextDiv = document.createElement('div')
    // proficiancyBonusTextDiv.className = 'box-inner'
    let proficiancyBonusText = document.createElement('h6')
    proficiancyBonusText.innerText = 'Proficiancy Bonus'
    proficiancyBonusText.className = 'profName2'
    proficiancyBonusTextDiv.appendChild(proficiancyBonusText)

    let proficiancyBonusValueDiv = document.createElement('div')
    // proficiancyBonusValueDiv.className = 'proficiancyBox'
    let proficiancyBonusValueText = document.createElement('input')
    proficiancyBonusValueText.type = 'number'
    proficiancyBonusValueText.readOnly = true
    proficiancyBonusValueText.id = 'proficiencyValueId'
    proficiancyBonusValueText.setAttribute('onchange', 'validateProficiencies()')
    proficiancyBonusValueText.value = character.proficiencyBonus
    proficiancyBonusValueText.className = 'inputTextBox2'

    proficiancyBoxInner.appendChild(proficiancyBonusValueText)

    proficiancyBoxInner.appendChild(proficiancyBonusValueDiv)
    proficiancyBoxInner.appendChild(proficiancyBonusTextDiv)
    proficiancyBonusDiv.appendChild(proficiancyBoxInner)


    // passive wisdom
    let passivePerceptionDiv = document.createElement('div')
    passivePerceptionDiv.className = 'box-inner3'
    let passivePerceptionTextDiv = document.createElement('div')
    passivePerceptionTextDiv.className = 'proficiancyBox'
    let passivePerceptionText = document.createElement('h6')
    
    passivePerceptionText.innerText = 'Passive Wisdom (Perception)'
    passivePerceptionText.className = 'profName2'

    let passivePerceptionValueDiv = document.createElement('div')
    passivePerceptionValueDiv.className = 'proficiancyBox'
    let passivePerceptionValue = document.createElement('input')
    passivePerceptionValue.value = (character.passivePerception) ? character.passivePerception : 0
    passivePerceptionValue.className = 'inputTextBox2'
    passivePerceptionValue.readOnly = true
    passivePerceptionValue.id = 'passiveWisdomId'
    passivePerceptionTextDiv.appendChild(passivePerceptionText)
    passivePerceptionValueDiv.appendChild(passivePerceptionValue)

    passivePerceptionDiv.appendChild(passivePerceptionValueDiv)
    passivePerceptionDiv.appendChild(passivePerceptionTextDiv)

    proficiancyBonusDiv.appendChild(passivePerceptionDiv)

    column1.appendChild(proficiancyBonusDiv)


    // div inspiration
    // let inBonusDiv = document.createElement('div')
    // inBonusDiv.className = 'proficiancyBox'
    // let inBonusTextD = document.createElement('div')
    // inBonusTextD.className = 'proficiancyBox'
    // let inBonusText = document.createElement('h3')
    // inBonusText.innerText = 'Inspiration Bonus'

    // let inBonusValDiv = document.createElement('div')
    // inBonusValDiv.className = 'proficiancyBox'
    // let inBonusVal = document.createElement('h3')
    // inBonusVal.innerText = (character.inspiration) ? character.inspiration : 0

    // inBonusTextD.appendChild(inBonusText)
    // inBonusValDiv.appendChild(inBonusVal)

    // inBonusDiv.appendChild(inBonusValDiv)
    // inBonusDiv.appendChild(inBonusTextD)

    // column1.appendChild(inBonusDiv)

    //



    let proficiancies = [{
            name: 'Strength',
            id: 'strengthScore',
            mod: 'strengthMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'strengthSavingThrowScore',
                    selected: 'strengthSavingThrow'
                },
                {
                    name: 'Athletics',
                    id: 'athleticsScore',
                    selected: 'athletics'
                }
            ]
        },
        {
            name: 'Dexterity',
            id: 'dexScore',
            mod: 'dexMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'dexSavingThrowScore',
                    selected: 'dexSavingThrow'
                },
                {
                    name: 'Acrobatics',
                    id: 'acrobaticsScore',
                    selected: 'acrobatics'
                },
                {
                    name: 'Sleight Of Hand',
                    id: 'sleightOfHandScore',
                    selected: 'sleightOfHand'
                },
                {
                    name: 'Stealth',
                    id: 'stealthScore',
                    selected: 'stealth'
                }
            ]
        },
        {
            name: "Constitution",
            id: 'conScore',
            mod: 'conMod',
            children: [{
                name: 'Saving Throws',
                id: 'conSavingThrowScore',
                selected: 'conSavingThrow'
            }]
        },
        {
            name: "Intelligence",
            id: 'intelScore',
            mod: 'intelMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'intelSavingThrowScore',
                    selected: 'intelSavingThrow'
                },
                {
                    name: 'Arcana',
                    id: 'arcanaScore',
                    selected: 'arcana'
                },
                {
                    name: 'History',
                    id: 'historyScore',
                    selected: 'history'
                },
                {
                    name: 'Investigation',
                    id: 'investigationScore',
                    selected: 'investigation'
                },
                {
                    name: 'Nature',
                    id: 'natureScore',
                    selected: 'nature'
                },
                {
                    name: 'Regligion',
                    id: 'religionScore',
                    selected: 'religion'
                }
            ]
        },
        {
            name: 'Wisdom',
            id: 'wisdomScore',
            mod: 'wisdomMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'wisdomSavingThrowScore',
                    selected: 'wisdomSavingThrow'
                },
                {
                    name: 'Animal Handling',
                    id: 'animalHandlingScore',
                    selected: 'animalHandling'
                },
                {
                    name: 'Insight',
                    id: 'insightScore',
                    selected: 'insight'
                },
                {
                    name: 'Medicine',
                    id: 'medicineScore',
                    selected: 'medicine'
                },
                {
                    name: 'Perception',
                    id: 'perceptionScore',
                    selected: 'perception'
                },
                {
                    name: 'Survival',
                    id: 'survivalScore',
                    selected: 'survival'
                }
            ]
        },
        {
            name: 'Charisma',
            id: 'charismaScore',
            mod: 'charismaMod',
            children: [{
                    name: 'Saving Throws',
                    id: 'charismaSavingThrowScore',
                    selected: 'charismaSavingThrow'
                },
                {
                    name: 'Deception',
                    id: 'deceptionScore',
                    selected: 'deception'
                },
                {
                    name: 'Intimidation',
                    id: 'intimidationScore',
                    selected: 'intimidation'
                },
                {
                    name: 'Performance',
                    id: 'performanceScore',
                    selected: 'performance'
                },
                {
                    name: 'Persuasion',
                    id: 'persuasionScore',
                    selected: 'persuasion'
                }
            ]
        }
    ]

    let profHtml = await buildProficiancies(proficiancies)
    column1.appendChild(profHtml)

    return column1

}


async function buildProficiancies(prof) {
    let container = document.createElement('div')
    container.id = 'proficienciesContainer'

    prof.forEach(p => {
        let div = document.createElement('div')
        div.className = 'box'

        let valuesDiv = document.createElement('div')
        valuesDiv.className = 'box'
        let valueModDiv = document.createElement('div')
        valueModDiv.className = 'box-inner2'
        let valueModText = document.createElement('input')
        // valueModText.type = 'number'
        valueModText.value = character[p.mod]
        valueModText.readOnly = true
        valueModText.id = `${p.mod}Mod`
        valueModText.className = 'inputTextBox'
        valueModText.setAttribute('onchange', 'validateProficiencies()')
        valueModDiv.appendChild(valueModText)
        valuesDiv.appendChild(valueModDiv)

        let valueScoreDiv = document.createElement('div')
        valueScoreDiv.className = 'profScoreDiv'
        let valueScoreText = document.createElement('input')
        valueScoreText.value = character[p.id]
        valueScoreText.id = `${p.id}Id`
        valueScoreText.type = 'number'
        valueScoreText.setAttribute('onchange', 'validateProficiencies()')

        // valueScoreText.id = `${p.name}Value`
        valueScoreText.className = 'inputTextBox2'

        valueScoreDiv.appendChild(valueScoreText)
        valuesDiv.appendChild(valueScoreDiv)

        let textDiv = document.createElement('h6')
        textDiv.innerText = p.name
        textDiv.className = 'profName'

        valuesDiv.appendChild(textDiv)
        valuesDiv.className = 'box-inner'
        div.appendChild(valuesDiv)

        // skills list
        let itemsListDiv = document.createElement('div')
        itemsListDiv.className = 'skillsListDiv'
        let ul = document.createElement('ul')

        let children = p.children
        children.forEach(child => {
            let li = document.createElement('LI')
            let radio = document.createElement('input')
            radio.type = 'checkbox'
            radio.className = 'checkBox'
            let radioId = child.selected
            radio.checked = character[radioId]
            radio.setAttribute('onchange', 'validateProficiencies()')
            radio.id = `${radioId}Id`
            li.appendChild(radio)
            let textValue = document.createElement('a')
            let valueId = child.id
            textValue.innerText = character[valueId]
            textValue.id = `${valueId}Id`
            let text = document.createElement('a')
            text.innerText = `  ${child.name}`
            li.appendChild(textValue)
            li.appendChild(text)
            ul.appendChild(li)
        })
        itemsListDiv.appendChild(ul)

        div.appendChild(itemsListDiv)
        container.appendChild(div)
        container.appendChild(document.createElement('hr'))
    });
    return container
}