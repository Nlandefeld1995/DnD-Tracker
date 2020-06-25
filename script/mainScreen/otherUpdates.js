async function xpLevelUpdate(){
    xp = document.getElementById('xpValueId').value
    xp = parseInt(xp)
    let newLevel = await getLevelByXp(xp)
    document.getElementById('levelValueId').value = newLevel
    character.level = newLevel
    character.xp = xp 
    character.proficiencyBonus =  await getPBonusByLevel(newLevel)
    delete character.createdAt
    delete character.updatedAt

    let response = await dbUpdateCharacter(globalCharacterID, JSON.stringify(character))
    updateAllProficiencies()
}

async function hitPointsUpdate(){
    let max = document.getElementById('hitPointsMaxId').value
    max = parseInt(max)
    let current = document.getElementById('hitPointsCurrentId').value
    current = parseInt(current)
    let temp = document.getElementById('hitPointsTempId')    
    temp = parseInt(temp)

    character.hitPointMax = max
    character.hitPointCurrent = current
    character.hitPointsTemporary = temp
    delete character.createdAt
    delete character.updatedAt

    let response = await dbUpdateCharacter(globalCharacterID, JSON.stringify(character))
}

async function acSpeedInitiativeUpdate(){
    let ac = document.getElementById('acId').value
    ac = parseInt(ac)
    let speed = document.getElementById('speedId').value
    speed = parseInt(speed)
    let initative = document.getElementById('initiativeId').value
    initative = parseInt(initative)

    character.armorClass = ac
    character.speed = speed
    character.initiative = initative

    delete character.createdAt
    delete character.updatedAt

    let response = await dbUpdateCharacter(globalCharacterID, JSON.stringify(character))
}

async function deathSavesUpdate(){
    let s1 = document.getElementById('successSave0').checked
    let s2 = document.getElementById('successSave1').checked
    let s3 = document.getElementById('successSave2').checked
    let f1 = document.getElementById('failSave0').checked
    let f2 = document.getElementById('failSave1').checked
    let f3 = document.getElementById('failSave2').checked
    let sucesses = [s1,s2,s3]
    let failures = [f1,f2,f3]
    let sTotal = 0
    let fTotal = 0
    for(i=0; i<sucesses.length; i++){
        if(sucesses[i]){
            sTotal +=1
        }
    }
    for(i=0; i<failures.length; i++){
        if(failures[i]){
            fTotal +=1
        }
    }
    character.deathSavesSucesses = sTotal
    character.deathSavesFailures = fTotal

    delete character.createdAt
    delete character.updatedAt

    let response = await dbUpdateCharacter(globalCharacterID, JSON.stringify(character))
}