function window4Create() {
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let moneyCounts = [
        {
            ask: "Platinum (pp) Count",
            type: "textbox",
            id: "platinumCount",
            default: character.platinumCount,
            required: false
        },
        {
            ask: "Gold (gp) Count",
            type: "textbox",
            id: "goldCount",
            default: character.goldCount,
            required: false
        },
        {
            ask: "Electrum (ep) Count",
            type: "textbox",
            id: "electrumCount",
            default: character.electrumCount,
            required: false
        },
        {
            ask: "Silver (sp) Count",
            type: "textbox",
            id: "silverCount",
            default: character.silverCount,
            required: false
        },
        {
            ask: "Copper (cp) Count",
            type: "textbox",
            id: "copperCount",
            default: character.copperCount,
            required: false
        }
    ]
    let html = createHtmlElement(moneyCounts, 'window3Create', 'window4Validate', true)
    modal.appendChild(html)
}
function window4Validate() {
    // Validate Platinum
    let platinumCount = valueById('platinumCount')
    if(validateWholeNumber(parseInt(platinumCount)) && parseInt(platinumCount) >=0){
        character.platinumCount = parseInt(platinumCount)
    }
    else{
        error = true
        errorText += ` Please enter a valid Platinum (pp) count.`
    }
    // Validate Gold
    let goldCount = valueById('goldCount')
    if(validateWholeNumber(parseInt(goldCount)) && parseInt(goldCount) >=0){
        character.goldCount = parseInt(goldCount)
    }
    else{
        error = true
        errorText += ` Please enter a valid Gold (gp) count.`
    }
    // Validate Electrum
    let electrumCount = valueById('electrumCount')
    if(validateWholeNumber(parseInt(electrumCount)) && parseInt(electrumCount) >=0){
        character.electrumCount = parseInt(electrumCount)
    }
    else{
        error = true
        errorText += ` Please enter a valid Electrum (ep) count.`
    }
    // Validate Silver
    let silverCount = valueById('silverCount')
    if(validateWholeNumber(parseInt(silverCount)) && parseInt(silverCount) >=0){
        character.silverCount = parseInt(silverCount)
    }
    else{
        error = true
        errorText += ` Please enter a valid Silver (sp) count.`
    }
    // Validate Copper
    let copperCount = valueById('copperCount')
    if(validateWholeNumber(parseInt(copperCount)) && parseInt(copperCount) >=0){
        character.copperCount = parseInt(copperCount)
    }
    else{
        error = true
        errorText += ` Please enter a valid Copper (cp) count.`
    }
    if (error) {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
    else {
        window5Create()
    }
}