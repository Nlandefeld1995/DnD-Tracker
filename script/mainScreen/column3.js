async function column3(){
    let column3 = document.createElement('div')
    column3.style.width = '20vw'
    column3.style.height='100vh'
    column3.style.float = 'right'
    column3.style.position='relative'
    column3.style.paddingLeft = '5px'
    column3.id = 'mainColumn3'
    console.log(character)
    let hitPoitsDiv = await hitPoits()
    column3.appendChild(hitPoitsDiv)
    let acAndInitiativeDiv = await acAndInitiative()
    column3.appendChild(acAndInitiativeDiv)
    let speedAndDeathSavesDiv = await speedAndDeathSaves()
    column3.appendChild(speedAndDeathSavesDiv)
    let chooseYourOwnDiv = await chooseYourOwn()
    column3.appendChild(chooseYourOwnDiv)
    let feedbackDiv = await feedback()
    column3.appendChild(feedbackDiv)
    
    return column3
}

function hitPoits(){
    let hitPointsDiv = document.createElement('div')
    hitPointsDiv.className = 'box'
    
    

    let currentHitDiv = document.createElement('div')
    currentHitDiv.className = 'box-inner3'
    let maxHitDiv = document.createElement('div')
    maxHitDiv.className = 'box-inner4'
    let maxHitValue = document.createElement('input')
    maxHitValue.value = character.hitPointMax
    maxHitValue.type = 'number'
    maxHitValue.id = 'hitPointsMaxId'
    maxHitValue.className = 'inputTextBox'
    let maxHitText = document.createElement('a')
    maxHitText.innerText = 'Max:'
    // maxHitText.className = 'inputTextBox'
    maxHitDiv.appendChild(maxHitText)
    maxHitDiv.appendChild(maxHitValue)
    let currentHitText = document.createElement('h6')
    currentHitText.innerText = 'Current Hit Points'
    currentHitText.className = 'profName'
    let currentHitValue = document.createElement('input')
    currentHitValue.type = 'number'
    currentHitValue.id = 'hitPointsCurrentId'
    currentHitValue.className = 'inputTextBox2'
    currentHitValue.value = (character.hitPointCurrent) ? character.hitPointCurrent : character.hitPointMax
    currentHitDiv.appendChild(maxHitDiv)
    currentHitDiv.appendChild(currentHitValue)
    currentHitDiv.appendChild(currentHitText)
    
    
    hitPointsDiv.appendChild(currentHitDiv)

    let temporaryHitDiv = document.createElement('div')
    temporaryHitDiv.className = 'box-inner3'
    let temporaryHitText = document.createElement('h6')
    temporaryHitText.innerText = 'Temporary Hit Points'
    temporaryHitText.className = 'profName'
    
    let temporaryHitValue = document.createElement('input')
    temporaryHitValue.className = 'inputTextBox2'
    temporaryHitValue.type = 'number'
    temporaryHitValue.id = 'hitPointsTempId'
    temporaryHitValue.value = (character.hitPointTemporary) ? character.hitPointTemporary : 0
    temporaryHitDiv.appendChild(temporaryHitValue)
    temporaryHitDiv.appendChild(temporaryHitText)

    hitPointsDiv.appendChild(temporaryHitDiv)

    return hitPointsDiv
}

function acAndInitiative(){
    let mainDiv = document.createElement('div')
    mainDiv.className = 'box'

    let acDiv = document.createElement('div')
    acDiv.className = 'box-inner3'
    let acText = document.createElement('h6')
    acText.innerText = 'Armor Class'
    acText.className = 'profName'
    let acValue = document.createElement('input')
    acValue.className = 'inputTextBox2'
    acValue.type = 'number'
    acValue.id = 'acId'
    acValue.setAttribute('onchange', 'acSpeedInitiativeUpdate()')
    acValue.value = character.armorClass 

    acDiv.appendChild(acValue)
    acDiv.appendChild(acText)

    mainDiv.appendChild(acDiv)

    let initiativeDiv = document.createElement('div')
    initiativeDiv.className = 'box-inner3'
    let initiativeText = document.createElement('h6')
    initiativeText.innerText = 'Initiative'
    initiativeText.className = 'profName'
    let initiativeValue = document.createElement('input')
    initiativeValue.className = 'inputTextBox2'
    initiativeValue.type = 'number'
    initiativeValue.id = 'initiativeId'
    initiativeValue.setAttribute('onchange', 'acSpeedInitiativeUpdate()')
    initiativeValue.value = character.initiative 

    initiativeDiv.appendChild(initiativeValue)
    initiativeDiv.appendChild(initiativeText)

    mainDiv.appendChild(initiativeDiv)

    return mainDiv
}

function speedAndDeathSaves(){
    let mainDiv = document.createElement('div')
    mainDiv.className = 'box'

    let speedDiv = document.createElement('div')
    speedDiv.className = 'box-inner3'
    let speedText = document.createElement('h6')
    speedText.innerText = 'Speed'
    speedText.className = 'profName'
    let speedValue = document.createElement('input')
    speedValue.type = 'number'
    speedValue.id = 'speedId'
    speedValue.setAttribute('onchange', 'acSpeedInitiativeUpdate()')
    speedValue.className = 'inputTextBox2'
    speedValue.value = character.speed 

    speedDiv.appendChild(speedValue)
    speedDiv.appendChild(speedText)


    let deathSavesDiv = document.createElement('div')
    deathSavesDiv.className = 'box-inner3'

    let deathSavesText = document.createElement('h6')
    deathSavesText.innerText = 'Death Saves'
    deathSavesText.id = 'deathSaves'
    
    let successDiv = document.createElement('div')
    let successText = document.createElement('h6')
    successText.innerText = 'Successes:'
    successDiv.appendChild(successText)
    let totalFailures = (character.deathSavesFailures) ? character.deathSavesFailures : 0
    let totalSuccess = (character.deathSavesSucesses) ? character.deathSavesSucesses : 0
    for(i=0; i<3; i++){
        let button = document.createElement('input')
        button.type = 'checkbox'
        button.id = `successSave${i}`
        button.setAttribute('onchange','deathSavesUpdate()')
        if((i+ 1) <= totalSuccess ){
            button.checked = true
        }
        
        successDiv.appendChild(button)
    }

    let failureDiv = document.createElement('div')
    let failureText = document.createElement('h6')
    failureText.innerText = 'Failures:'
    failureDiv.appendChild(failureText)
    
    for(i=0; i<3; i++){
        let button = document.createElement('input')
        button.type = 'checkbox'
        if((i+1) <= totalFailures){
            button.checked = true
        }
        button.setAttribute('onchange','deathSavesUpdate()')
        button.id = `failSave${i}`
        failureDiv.appendChild(button)
    }

    deathSavesDiv.appendChild(successDiv)
    deathSavesDiv.appendChild(failureDiv)

    deathSavesDiv.appendChild(deathSavesText)


    mainDiv.appendChild(speedDiv)
    mainDiv.appendChild(deathSavesDiv)
    return mainDiv
}

function feedback(){
    let mainDiv = document.createElement('div')
    mainDiv.className = 'box2'
    mainDiv.innerText = 'Feedback:'
    let div = document.createElement('div')
    let other = document.createElement('h5')
    other.innerText = 'I would love to get your feedback on issues, enhancements and thoughts. You can send that feedback directly to me.'
    let other2 = document.createElement('br')
    
    let name = document.createElement('h5')
    name.innerText = 'Nolan Landefeld'
    let email = document.createElement('h5')
    email.innerText = 'nlandefeld1995@gmail.com'
    div.appendChild(other)
    div.appendChild(other2)
    div.appendChild(name)
    div.appendChild(email)
    mainDiv.appendChild(div)
    return mainDiv
}
function chooseYourOwn(){
    let mainDiv = document.createElement('div')
    mainDiv.className = 'box2'
    mainDiv.innerText = 'Choose your own: (drop down) Coming soon'
    return mainDiv
}