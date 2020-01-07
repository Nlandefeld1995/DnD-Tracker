// build pop up module
// loader on
loader(true)
// popup
var popup = document.getElementById('initPopUp')

// create tabs for top: 
var tabContainer = document.createElement('div')
tabContainer.class = 'tab'
var t1 = document.createElement('button')
t1.addEventListener("click", popUpTabsNew)
t1.innerHTML = 'New Character'
var t2 = document.createElement('button')
t2.addEventListener("click", popUpTabsExisting)
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
function popUpTabsNew() {

    document.getElementById('existingCharacterContainer').style.display = 'none'
    document.getElementById('newCharacterContainer').style.display = 'block'
}
function popUpTabsExisting() {
    document.getElementById('newCharacterContainer').style.display = 'none'
    document.getElementById('existingCharacterContainer').style.display = 'block'
}




// function to handle existing character load
function existingCharacter() {
    loader(true)
    var existingCharacterContainer = document.getElementById('existingCharacterContainer')
    // Create Existing character module
    // load existing characters
    // drop down to select character
    // submit button

    // loader off
    loader(false)
}
// function to handle new character load
function newCharacter() {
    loader(true)
    // create fields needed for new character
    var newPlayerContainer = document.getElementById('newCharacterContainer')
    // player name
    var playerNameText = document.createElement('a')
    playerNameText.innerHTML = 'Character Name: '
    var playerName = document.createElement('input')
    playerName.type = 'text-box'
    playerName.placeholder = 'Fist Last'
    playerName.id = 'playerName'
    newPlayerContainer.appendChild(playerNameText)
    newPlayerContainer.appendChild(playerName)

    // Current Level
    // This will be auto populated by going off of the xp look up sheet

    // Current XP
    var currentXpText = document.createElement('a')
    currentXpText.innerHTML = 'Current XP: '
    var currentXp = document.createElement('input')
    currentXp.type = 'number'
    currentXp.id = 'playerXp'
    currentXp.placeholder = 0
    newPlayerContainer.appendChild(currentXpText)
    newPlayerContainer.appendChild(currentXp)

    // race
    var raceText = document.createElement('a')
    raceText.innerHTML = 'Race: '
    var race = document.createElement('input')
    race.type = 'text-box'
    race.placeholder = 'Lets make this a drop down'
    race.id = 'playerRace'
    newCharacterContainer.appendChild(raceText)
    newCharacterContainer.appendChild(race)

    // class
    var classText = document.createElement('a')
    classText.innerHTML = 'Class: '
    var playerClass = document.createElement('input')
    playerClass.type = 'text-box'
    playerClass.id = 'playerClass'
    playerClass.placeholder = 'Lets make this a drop down'

    newCharacterContainer.appendChild(classText)
    newCharacterContainer.appendChild(playerClass)

    // current money
    // current inventory
    // armor
    // weapons
    // other
    // current hit points
    // submit button
    var submit = document.createElement('input')
    submit.type = 'button'
    submit.value = 'Submit'
    submit.addEventListener("click", newPlayerSubmit)
    newCharacterContainer.appendChild(submit)

    // error area
    var errorDiv = document.createElement('div')
    errorDiv.id= 'newCharacterError'
    newCharacterContainer.appendChild(errorDiv)

    loader(false)
}

