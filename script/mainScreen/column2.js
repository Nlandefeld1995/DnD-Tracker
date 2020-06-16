async function column2(){
    let column2 = document.createElement('div')
    column2.style.width = '50%'
    column2.style.borderRight = 'solid #b78846'
    column2.style.float = 'left'
    column2.style.paddingRight = '5px'
    column2.style.position='absolute'
    column2.style.left = '25%'
    column2.style.paddingLeft = '5px'
    column2.id = 'mainColumn2'
    let playerinformation = await createPlayerInfo()
    column2.appendChild(playerinformation)
    return column2
}

async function createPlayerInfo(){
    let div = document.createElement('div')
    div.id = 'playerInfoDiv'

    
    let divRow1 = document.createElement('div')
    divRow1.id='playerInfoRow1'

    let nameDiv = document.createElement('div')
    nameDiv.id = 'playerInfoNameDiv'
    nameDiv.className = 'playerInfoRow'
    let nameText = document.createElement('h5')
    nameText.innerText = 'Name:'
    let nameValue = document.createElement('input')
    nameValue.value = `${character.firstName} ${character.lastName}`
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
    divRow2.id='playerInfoRow2'

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
    function createVl(){
        let vl = document.createElement('div')
        vl.className = 'vl'
        return vl
    }
    return div 
}

async function createNavBar(){
    let navigation = [
        {
            label: 'Hit Points',
            function: '',
            id: 'navHitPoints',
            order: 1
        },
        {
            label: "Proficiencies",
            function: '',
            id: 'navProficiencies',
            order: 2
        },
        {
            label: "Money",
            function: '',
            id: 'navMoney',
            order: 3
        },
        {
            label: "Inventory",
            function:"",
            id: "navInventory",
            order: 4
        },
        {
            label: "Features & Traits",
            function: "",
            id: "navFeaturesTraits",
            order: 5
        },
        { 
            label: "Special Abilities",
            function: "",
            id: "navSpecialAbilities",
            order: 6
        },
        {
            label: "Other Proficiencies",
            function: "",
            id: "navOtherProficiencies",
            order: 7
        },
        {
            label: "Player Information",
            function: "",
            id: "navPlayerInformation",
            order: 8
        },
        {
            label: "Personality Traits",
            function: "",
            id: "navPersonalityTraits",
            order: 9
        },
        {
            label: "Attunments",
            function: "",
            id: "navAttunments",
            order: 10
        }
    ]
}