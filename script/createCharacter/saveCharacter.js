async function saveCharacter() { 
    loader(true)
    let saveButton = document.getElementById('saveCharacterButton')
    saveButton.disabled = true;
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
        let updateBagsWithID = await updateBags()

        loaduser()
    }
    else {
        console.log("error saving")
    }
}

async function updateBags(){
    let success
    for(i=0;i<bagsToUpdate.length;i++){
        let bagId = bagsToUpdate[i];
        let data = {
            characterId: globalCharacterID,
        }
        data = JSON.stringify(data)
         success = await dbUpdateBag(bagId, data)
    }
    return success
}