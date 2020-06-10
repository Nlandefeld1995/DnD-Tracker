async function loaduser(){
    let modal = document.getElementById("popupModal")
    modal.display = 'none'
    let user = await dbGetUserById(globalUserId)
    let characterToLoad = user.characters[0]
    let character = await dbGetCharacterbyId(characterToLoad)
    console.log(character)
    // get from db list of characters. Load first character
    // from db load character
}
