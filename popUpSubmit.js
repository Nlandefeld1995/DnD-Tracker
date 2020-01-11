function newPlayerSubmit(){
    // start loader icon
    loader(true)
    // clear out previous error log
    document.getElementById('newCharacterError').innerHTML = ''
    // get all player information
    
        playerInfo.name =  document.getElementById('playerName').value
        playerInfo.xp =  document.getElementById('playerXp').value
        playerInfo.level =  findLevel(document.getElementById('playerXp').value)
        playerInfo.class =  document.getElementById('playerClass').value
        playerInfo.race =  document.getElementById('playerRace').value
        playerInfo.date =  new Date()

    
    // validate all player information
        // if it is invalid give warning message and exit function
        var errorCount = 0
        var errorMessage = ''
        if(!playerInfo.name){
            errorCount ++
            errorMessage += ' Please enter a Character Name.'
        }
        if(!playerInfo.xp){
            errorCount ++
            errorMessage += ' Please enter your current Character\'s xp'
        }
        // keep doing the rest
    // save player information
        // if error display error and have user re-try
    if(errorCount == 0 ){
        // save information to google sheets
        // https://script.google.com/macros/s/AKfycbzPznZ8StLESMEa9PwLr1ndg9pRCSyCAkAqB5JwJpiwHKBEz88/exec
        $.ajax({
            url: `https://script.google.com/macros/s/AKfycbzPznZ8StLESMEa9PwLr1ndg9pRCSyCAkAqB5JwJpiwHKBEz88/exec`,
            type: 'POST',
            data: playerInfo,
            success: function (data){
                console.log(data)
                // more things
                // load up main page
                loadMain(playerInfo)
            },
            error: function (error) {
                console.log(error)
                document.getElementById('newCharacterError').innerHTML = 'Oops something happened. Give this to Lumin or Menelous to diagnose.'
                // display message to customer to retry. Esentially a woops message
            }
        })

    }
    else {
        // show popup and give error message
        document.getElementById('newCharacterError').innerHTML = errorMessage
        console.log(errorMessage)
    }
    

}

function findLevel(xp){
    var level = 0
    for(i=0; i<levelXp.length; i++){
        if(xp >= levelXp[i].xp){
            level = levelXp[i].level
        }
    }
    return level
}