function loadMoney() {
    let main = document.getElementById('navMain')
    main.innerHTML = ''

    let title = document.createElement('div')
    let titleValue = document.createElement('h1')
    titleValue.innerText = 'Money'
    title.appendChild(titleValue)

    let moneyDiv = document.createElement('div')

    let platinumDiv = document.createElement('div')
    let platinumText = document.createElement('h3')
    platinumText.innerText = 'Platinum:'
    let platinumValue = document.createElement('input')
    platinumValue.type = 'number'
    platinumValue.className = 'input'
    platinumValue.id = 'moneyPlatinumValue'
    platinumValue.setAttribute('onChange', 'validateMoney()')
    platinumValue.value = character.platinumCount
    platinumDiv.appendChild(platinumText)
    platinumDiv.appendChild(platinumValue)
    moneyDiv.appendChild(platinumDiv)


    let goldDiv = document.createElement('div')
    let goldText = document.createElement('h3')
    goldText.innerText = 'Gold:'
    let goldValue = document.createElement('input')
    goldValue.type = 'number'
    goldValue.id = 'moneyGoldValue'
    goldValue.className = 'input'
    goldValue.setAttribute('onChange', 'validateMoney()')
    goldValue.value = character.goldCount
    goldDiv.appendChild(goldText)
    goldDiv.appendChild(goldValue)
    moneyDiv.appendChild(goldDiv)

    let electrumDiv = document.createElement('div')
    let electrumText = document.createElement('h3')
    electrumText.innerText = 'Electrum:'
    let electrumValue = document.createElement('input')
    electrumValue.type = 'number'
    electrumValue.className = 'input'
    electrumValue.id = 'moneyElectrumValue'
    electrumValue.setAttribute('onChange', 'validateMoney()')
    electrumValue.value = character.electrumCount
    electrumDiv.appendChild(electrumText)
    electrumDiv.appendChild(electrumValue)
    moneyDiv.appendChild(electrumDiv)

    let silverDiv = document.createElement('div')
    let silverText = document.createElement('h3')
    silverText.innerText = 'Silver:'
    let silverValue = document.createElement('input')
    silverValue.type = 'number'
    silverValue.id = 'moneySilverValue'
    silverValue.className = 'input'
    silverValue.setAttribute('onChange', 'validateMoney()')
    silverValue.value = character.silverCount
    silverDiv.appendChild(silverText)
    silverDiv.appendChild(silverValue)
    moneyDiv.appendChild(silverDiv)

    let copperDiv = document.createElement('div')
    let copperText = document.createElement('h3')
    copperText.innerText = 'Copper:'
    let copperValue = document.createElement('input')
    copperValue.type = 'number'
    copperValue.className = 'input'
    copperValue.id = 'moneyCopperValue'
    copperValue.setAttribute('onChange', 'validateMoney()')
    copperValue.value = character.copperCount
    copperDiv.appendChild(copperText)
    copperDiv.appendChild(copperValue)
    moneyDiv.appendChild(copperDiv)


    let updateMoneyDiv = document.createElement('div')
    let input = document.createElement('input')
    input.type = 'number'
    input.className = 'input'
    input.id = 'moneyToCalculate'
    input.placeholder = 'money to +/-'

    let moneyType = document.createElement('select')
    moneyType.id = 'moneyType'
    moneyType.className = 'input'
    let moneyTypes = ['MoneyType', 'Platinum', 'Gold', 'Electrum', 'Silver', 'Copper']
    for (i = 0; i < moneyTypes.length; i++) {
        let option = document.createElement('option')
        option.value = moneyTypes[i].toLowerCase()
        option.innerText = moneyTypes[i]
        moneyType.appendChild(option)
    }

    let actionType = document.createElement('select')
    actionType.id = 'actionType'
    actionType.className = 'input'
    let actionTypes = ['ActionType', '+', '-']
    for (i = 0; i < actionTypes.length; i++) {
        let option = document.createElement('option')
        option.value = actionTypes[i].toLowerCase()
        option.innerText = actionTypes[i]
        actionType.appendChild(option)
    }

    let submit = document.createElement('button')
    submit.innerText = 'Submit'
    submit.className = 'input'
    submit.setAttribute('onclick', 'calculateMoney()')

    updateMoneyDiv.appendChild(input)
    updateMoneyDiv.appendChild(moneyType)
    updateMoneyDiv.appendChild(actionType)
    updateMoneyDiv.appendChild(submit)

    main.appendChild(title)
    main.appendChild(moneyDiv)
    main.appendChild(updateMoneyDiv)
}

async function calculateMoney() {
    let error = false
    let errorText = ''
    let input = valueById('moneyToCalculate')
    let type = valueById('moneyType')
    let action = valueById('actionType')

    let p = character.platinumCount
    let g = character.goldCount
    let e = character.electrumCount
    let s = character.silverCount
    let c = character.copperCount

    // validate input value
    if (validateWholeNumber((input)) && parseInt(input) >= 0) {
        input = parseInt(input)
        if (type == 'moneytype') {
            error = true
            errorText += ` Please enter a valid money type`
        } else {
            if (action == 'actiontype') {
                error = true
                errorText += ` Please enter a valid action type`
            } else
            if (action == '+') {
                if (type == 'platinum') {
                    character.platinumCount = character.platinumCount + input
                } else if (type == 'gold') {
                    character.goldCount = character.goldCount + input
                } else if (type == 'electrum') {
                    character.electrumCount = character.electrumCount + input
                } else if (type == 'silver') {
                    character.silverCount = character.silverCount + input
                } else if (type == 'copper') {
                    character.copperCount = character.copperCount + input
                }
            } else if (action == '-') {
                let tempplatinum = character.platinumCount
                let tempgold = character.goldCount
                let tempelectrum = character.electrumCount
                let tempsilver = character.silverCount
                let tempcopper = character.copperCount

                if (type == 'platinum') {
                    tempplatinum = tempplatinum - input
                } else if (type == 'gold') {
                    tempgold = tempgold - input
                } else if (type == 'electrum') {
                    tempelectrum = tempelectrum - input
                } else if (type == 'silver') {
                    tempsilver = tempsilver - input
                } else if (type == 'copper') {
                    tempcopper = tempcopper - input
                }

                while (tempcopper < 0) {
                    tempsilver -= 1
                    tempcopper += 10
                    while (tempsilver < 0) {
                        tempelectrum -= 1
                        tempsilver += 5
                        while (tempelectrum < 0) {
                            tempgold -= 1
                            tempelectrum += 2
                            while (tempgold < 0) {
                                tempplatinum -= 1
                                tempgold += 10
                                if (tempplatinum < 0) {
                                    error = true
                                    errorText = `You do not have enough money to preform this action`
                                    break
                                }
                            }
                        }
                    }
                }
                while (tempsilver < 0) {
                    tempelectrum -= 1
                    tempsilver += 5
                    while (tempelectrum < 0) {
                        tempgold -= 1
                        tempelectrum += 2
                        while (tempgold < 0) {
                            tempplatinum -= 1
                            tempgold += 10
                            if (tempplatinum < 0) {
                                error = true
                                errorText = `You do not have enough money to preform this action`
                                break
                            }
                        }
                    }
                }
                while (tempelectrum < 0) {
                    tempgold -= 1
                    tempelectrum += 2
                    while (tempgold < 0) {
                        tempplatinum -= 1
                        tempgold += 10
                        if (tempplatinum < 0) {
                            error = true
                            errorText = `You do not have enough money to preform this action`
                            break
                        }
                    }
                }
                while (tempgold < 0) {
                    tempplatinum -= 1
                    tempgold += 10
                    if (tempplatinum < 0) {
                        error = true
                        errorText = `You do not have enough money to preform this action`
                        break
                    }
                }
                if (tempplatinum < 0) {
                    error = true
                    errorText = `You do not have enough money to preform this action`
                    
                }
                if(!error){
                character.platinumCount = tempplatinum
                character.goldCount = tempgold
                character.electrumCount = tempelectrum
                character.silverCount = tempsilver
                character.copperCount = tempcopper
                }
            }
        }
    }

    if (!error) {
        await updateMoney()
        refreshMoney()
    } else {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }



}

function updateMoney() {
    let data = {
        platinumCount: character.platinumCount,
        goldCount: character.goldCount,
        electrumCount: character.electrumCount,
        silverCount: character.electrumCount,
        copperCount: character.copperCount
    }
    data = JSON.stringify(data)
    dbUpdateCharacter(globalCharacterID, data)
    console.log(character)
}

function refreshMoney() {
    document.getElementById('moneyPlatinumValue').value = character.platinumCount
    document.getElementById('moneyGoldValue').value = character.goldCount
    document.getElementById('moneyElectrumValue').value = character.electrumCount
    document.getElementById('moneySilverValue').value = character.silverCount
    document.getElementById('moneyCopperValue').value = character.copperCount
}

function validateMoney() {
    let error = false
    let errorText = ''
    let platinumCount = valueById('moneyPlatinumValue')
    if (validateWholeNumber(platinumCount) && parseInt(platinumCount) >= 0) {
        character.platinumCount = parseInt(platinumCount)
    } else {
        error = true
        errorText += ` Please enter a valid Platinum (pp) count.`
    }
    // Validate Gold
    let goldCount = valueById('moneyGoldValue')
    if (validateWholeNumber((goldCount)) && parseInt(goldCount) >= 0) {
        character.goldCount = parseInt(goldCount)
    } else {
        error = true
        errorText += ` Please enter a valid Gold (gp) count.`
    }
    // Validate Electrum
    let electrumCount = valueById('moneyElectrumValue')
    if (validateWholeNumber((electrumCount)) && parseInt(electrumCount) >= 0) {
        character.electrumCount = parseInt(electrumCount)
    } else {
        error = true
        errorText += ` Please enter a valid Electrum (ep) count.`
    }
    // Validate Silver
    let silverCount = valueById('moneySilverValue')
    if (validateWholeNumber((silverCount)) && parseInt(silverCount) >= 0) {
        character.silverCount = parseInt(silverCount)
    } else {
        error = true
        errorText += ` Please enter a valid Silver (sp) count.`
    }
    // Validate Copper
    let copperCount = valueById('moneyCopperValue')
    if (validateWholeNumber((copperCount)) && parseInt(copperCount) >= 0) {
        character.copperCount = parseInt(copperCount)
    } else {
        error = true
        errorText += ` Please enter a valid Copper (cp) count.`
    }
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    } else {
        updateMoney()
    }
}