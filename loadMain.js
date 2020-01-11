function loadMain(){
    var main = document.getElementById('mainContainer')
    
    // create player info
    var playerMain = document.createElement('div')
    playerMain.id = 'playerMain'
    playerMain.appendChild(document.createElement('h1').innerHTML = 'Player Stats')
    
    var dndImg = document.createElement('IMG')
    dndImg.src = '/dndIcon.png'
    playerMain.appendChild(dndImg)

    // name
    var playerMainName = document.createElement('div')
    var nameText = document.createElement('h3')
    nameText.innerHTML = 'Character: '
    var name = document.createElement('h3')
    name.innerHTML = playerInfo.name
    playerMainName.appendChild(nameText)
    playerMainName.appendChild(name)
    playerMain.appendChild(playerMainName)

    // race
    var playerMainRace = document.createElement('div')
    var raceText = document.createElement('h3').innerHTML = 'Race: '
    var race = document.createElement('h3').innerHTML = playerInfo.race
    playerMainRace.appendChild(raceText)
    playerMainRace.appendChild(race)
    playerMain.appendChild(playerMainRace)

    // class
    var playerMainClass = document.createElement('div')
    var classText = document.createElement('h3').innerHTML = 'Class: '
    var clas = document.createElement('h3').innerHTML = playerInfo.class
    playerMainClass.appendChild(classText)
    playerMainClass.appendChild(clas)
    playerMain.appendChild(playerMainClass)

    // Level
    var playerMainLevel = document.createElement('div')
    var levelText = document.createElement('h3').innerHTML = 'Level: '
    var level = document.createElement('h3').innerHTML = playerInfo.level
    playerMainLevel.appendChild(levelText)
    playerMainLevel.appendChild(level)
    playerMain.appendChild(playerMainLevel)

    // XP
    var playerMainXp = document.createElement('div')
    var xpText = document.createElement('h3').innerHTML = 'XP: '
    var xp = document.getElementById('h3').innerHTML = playerInfo.xp
    playerMainXp.appendChild(xpText)
    playerMainXp.appendChild(xp)
    playerMain.appendChild(playerMainXp)



    // when done turn loader off 
    loader(false)
    // hide character load page
    document.getElementById('initPopUp').style.display='none'
}