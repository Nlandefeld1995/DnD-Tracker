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
    var raceDropDown = document.createElement('select')
    raceDropDown.id='raceType'
    var raceArray = ['Aarakocra','Aasimar','Bugbear','Centaur','Changeling','Dragon Born','Dwarf','Elf','Feral Tiefling','Firbolg','Genasi','Gith','Gnome','Goblin','Goliath','Half-Elf','Half-Orc','Halfling','Hobgoblin','Human','Kalashtar','Kenku','Kobold','Lizardfolk','Locathah','Loxodon','Minotaur','Orc','Orc of Eberron','Shifter','Simic Hybrid','Tabaxi','Tiefling','Tortle','Triton','Warforged','Vedalken','Verdan','Yuan-ti Pureblood']
    raceArray = raceArray.sort()
    var raceDefault = document.createElement('option')
        raceDefault.value = 'Select'
        raceDefault.innerHTML = 'Select'
    raceDropDown.appendChild(raceDefault)
    for(i = 0; i<raceArray.length; i++){
        var raceOptions = document.createElement('option')
        raceOptions.value = raceArray[i]
        raceOptions.innerHTML = raceArray[i]
        raceDropDown.appendChild(raceOptions)
    }
    newCharacterContainer.appendChild(raceText)
    newCharacterContainer.appendChild(raceDropDown)

    // class
    var classText = document.createElement('a')
    classText.innerHTML = 'Class: '
    var classDropDown = document.createElement('select')
    classDropDown.id='classType'
    var classArray = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard','Artificer','Blood Hunter']
    classArray = classArray.sort()
    var classDefault = document.createElement('option')
        classDefault.value = 'Select'
        classDefault.innerHTML = 'Select'
    classDropDown.appendChild(classDefault)
    for(i = 0; i<classArray.length; i++){
        var classOptions = document.createElement('option')
        classOptions.value = classArray[i]
        classOptions.innerHTML = classArray[i]
        classDropDown.appendChild(classOptions)
    }
    newCharacterContainer.appendChild(classText)
    newCharacterContainer.appendChild(classDropDown)

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

