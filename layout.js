// build pop up module
// loader on
loader(true)
// popup
var popup = document.getElementById('initPopUp')

// create tabs for top: 
var tabContainer = document.createElement('div')
tabContainer.class = 'tab'
var t1 = document.createElement('button')
t1.class = 'tablinks'
t1.onclick = "popUpTabs('new')"
t1.innerHTML = 'New Character'
var t2 = document.createElement('button')
t2.class = 'tablinks'
t2.onclick = "popUpTabs('existing')"
t2.innerHTML = 'Existing Character'

tabContainer.appendChild(t1)
tabContainer.appendChild(t2)
popup.appendChild(tabContainer)

// create new character container
var newCharacterContainer = document.createElement('div')
newCharacterContainer.id = 'newCharacterContainer'
popup.appendChild(newCharacterContainer)
// create existing character container
var existingCharacterContainer = document.createElement('div')
existingCharacterContainer.id = 'existingCharacterContainer'
existingCharacterContainer.display = 'none'
popup.appendChild(existingCharacterContainer)

newCharacter()





// functions to handle tabs
function popUpTabs(type) {
    if (type == 'new') {
        document.getElementById('existingCharacterContainer').style.display = 'none'
        document.getElementById('newCharacterContainer').style.display = 'block'
    }
    else {
        document.getElementById('newCharacterContainer').style.display = 'none'
        document.getElementById('existingCharacterContainer').style.display = 'block'
    }
}

// function to handle new character load

// function to handle existing character load
function existingCharacter() {
    loader(true)
    // Create Existing character module
    // load existing characters
    // drop down to select character
    // submit button

    // loader off
    loader(false)
}

function newCharacter() {
    loader(true)
    // create fields needed for new character
    // player name
    var playerNameText = document.createElement('a')
    playerNameText.innerHTML = 'Player Name: '
    var playerName = document.createElement('input')
    playerName.type = 'text-box'
    playerName.placeholder = 'Fist Last'
    // Current Level
    var currentLevelText = document.createElement('a')
    currentLevelText.innerHTML = "Current Level: "
    var currentLevel = document.createElement('input')
    currentLevel.type = 'number'
    currentLevel.placeholder = 0
    // Current XP
    var currentXpText = document.createElement('a')
    currentXpText.innerHTML = 'Current XP: '
    var currentXp = document.createElement('input')
    currentXp.type = 'number'
    currentXp.placeholder = 0

    // race
    // class
    // current money
    // current inventory
    // armor
    // weapons
    // other
    // current hit points
    // submit button
    loader(false)
}

