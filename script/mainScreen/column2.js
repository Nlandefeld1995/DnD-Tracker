async function column2(){
    let column2 = document.createElement('div')
    column2.style.width = '50%'
    column2.style.borderRight = 'solid #b78846'
    column2.style.float = 'left'
    column2.style.paddingRight = '5px'
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
    let nameText = document.createElement('h3')
    nameText.innerText = `${character.firstName} ${character.lastName}`
    nameDiv.appendChild(nameText)

    let raceDiv = document.createElement('div')
    raceDiv.id = 'playerInfoRaceDiv'
    let raceText = document.createElement('h3')
    raceText.innerText = character.race
    raceDiv.appendChild(raceText)

    let classDiv = document.createElement('div')
    classDiv.id = 'playerInfoClassDiv'
    let classText = document.createElement('h3')
    classText.innerText = character.class 
    classDiv.appendChild(classText)

    divRow1.appendChild(nameDiv)
    divRow1.appendChild(classDiv)
    divRow1.appendChild(raceDiv)
    
    let divRow2 = document.createElement('div')
    divRow2.id='playerInfoRow2'

    let backGroundDiv = document.createElement('div')
    backGroundDiv.id = 'playerInfoBackgroundDiv'
    let backGroundText = document.createElement('h3')
    backGroundText.innerText = character.background 
    backGroundDiv.appendChild(backGroundText)

    let alignmentDiv = document.createElement('div')
    alignmentDiv.id = 'playerInfoAlignmentDiv'
    let alignmentText = document.createElement('h3')
    alignmentText.innerText = character.alignment
    alignmentDiv.appendChild(alignmentText)

    let levelDiv = document.createElement('div')
    levelDiv.id = 'playerInfoLevelDiv'
    let levelText = document.createElement('h3')
    levelText.innerText = character.level 
    levelDiv.appendChild(levelText)

    let xpDiv = document.createElement('div')
    xpDiv.id = 'playerInfoXpDiv'
    let xpText = document.createElement('h3')
    xpText.innerText = character.xp 
    xpDiv.appendChild(xpText)

    divRow2.appendChild(backGroundDiv)
    divRow2.appendChild(alignmentDiv)
    divRow2.appendChild(levelDiv)
    divRow2.appendChild(xpDiv)

    div.appendChild(divRow1)
    div.appendChild(divRow2)

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