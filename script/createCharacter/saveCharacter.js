async function saveCharacter() { 
    let save = await dbCreateCharacter(JSON.stringify(character))
    if(save.objectId){
        character.characterId = save.objectId
        globalCharacterID = save.objectId
        let modal = document.getElementById('popupModal')
        modal.display = 'none'
        // update user db to add character id to the list
        let user = await dbGetUserById(globalUserId)
        let newCharacters = []
        for(i=0;i<(user.characters).length; i++){
            let c = user.characters[i]
            newCharacters.push(c)
        }
        newCharacters.push(globalCharacterID)
        user.characters = newCharacters
        let newUser = {
            characters: user.characters
        }
        let updateUser = await dbUpdateUser(globalUserId, JSON.stringify(newUser))
        loaduser()
    }
    else {
        console.log("error saving")
    }
}