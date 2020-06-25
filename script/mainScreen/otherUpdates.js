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