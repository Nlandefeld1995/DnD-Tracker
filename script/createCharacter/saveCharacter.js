function saveCharacter() { 
    character.characterId = uuid
    let save = dbCreateCharacter(JSON.stringify(character))
    if(save.objectId){
        character.characterId = save.objectId
        let modal = document.getElementById('popupModal')
        modal.display = 'none'
        // update user db to add character id to the list
    }
    else {
        console.log("error saving")
    }
}