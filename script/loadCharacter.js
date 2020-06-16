async function loaduser(){
    let modal = document.getElementById("popupModal")
    modal.style.display = 'none'
    let user = await dbGetUserById(globalUserId)
    let characterToLoad = user.characters[0]
    character = await dbGetCharacterbyId(characterToLoad)
    loadMainScreen()
    // get from db list of characters. Load first character
    // from db load character
}
