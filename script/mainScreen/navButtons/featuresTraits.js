function loadFeaturesTraits(){
    let main = document.getElementById('navMain')
    main.innerHTML = ''

    let title = document.createElement('div')
    let titleValue = document.createElement('h1')
    titleValue.innerText = 'Features And Traits'
    title.appendChild(titleValue)

    let featuresTraitsDiv = document.createElement('div')

    let personalityTraitsDiv = document.createElement('div')
    let personalityTraitsText = document.createElement('h3')
    personalityTraitsText.innerText = 'personality Traits:'
    let personalityTraitsValue = document.createElement('textarea')
    personalityTraitsValue.className = 'input'
    personalityTraitsValue.id = 'personalityTraitsValue'
    personalityTraitsValue.setAttribute('onChange', 'updatePersonalityTraits()')
    personalityTraitsValue.value = (character.personalityTraits) ? character.personalityTraits: ''
    personalityTraitsDiv.appendChild(personalityTraitsText)
    personalityTraitsDiv.appendChild(personalityTraitsValue)
    featuresTraitsDiv.appendChild(personalityTraitsDiv)

    let idealsDiv = document.createElement('div')
    let idealsText = document.createElement('h3')
    idealsText.innerText = 'Ideals:'
    let idealsValue = document.createElement('textarea')
    idealsValue.className = 'input'
    idealsValue.id = 'idealsValue'
    idealsValue.setAttribute('onChange', 'updatePersonalityTraits()')
    idealsValue.value = (character.ideals) ? character.ideals : ''
    idealsDiv.appendChild(idealsText)
    idealsDiv.appendChild(idealsValue)
    featuresTraitsDiv.appendChild(idealsDiv)

    let bondsDiv = document.createElement('div')
    let bondsText = document.createElement('h3')
    bondsText.innerText = 'Bonds:'
    let bondsValue = document.createElement('textarea')
    bondsValue.className = 'input'
    bondsValue.id = 'bondsValue'
    bondsValue.setAttribute('onChange', 'updatePersonalityTraits()')
    bondsValue.value = (character.bonds) ? character.bonds : ''
    bondsDiv.appendChild(bondsText)
    bondsDiv.appendChild(bondsValue)
    featuresTraitsDiv.appendChild(bondsDiv)

    let flawsDiv = document.createElement('div')
    let flawsText = document.createElement('h3')
    flawsText.innerText = 'Flaws:'
    let flawsValue = document.createElement('textarea')
    flawsValue.className = 'input'
    flawsValue.id = 'flawsValue'
    flawsValue.setAttribute('onChange', 'updatePersonalityTraits()')
    flawsValue.value = (character.flaws) ? character.flaws : ''
    flawsDiv.appendChild(flawsText)
    flawsDiv.appendChild(flawsValue)
    featuresTraitsDiv.appendChild(flawsDiv)
    
    main.appendChild(title)
    main.appendChild(featuresTraitsDiv)
}




async function updatePersonalityTraits(){
    let error = false
    let errorText = ''
    character.personalityTraits = valueById('personalityTraitsValue')
    character.ideals = valueById('idealsValue')
    character.bonds = valueById('bondsValue')
    character.flaws = valueById('flawsValue')
    if (!error) {
        await updateTraits()
    } else {
        let errors = document.createElement('a')
        errors.innerText = errorText
        console.log(errors)
        valueById('errorArea').appendChild(errors)
    }
}

function updateTraits() {
    let data = {
        personalityTraits: character.personalityTraits,
        ideals: character.ideals,
        bonds: character.bonds,
        flaws: character.flaws
    }
    data = JSON.stringify(data)
    dbUpdateCharacter(globalCharacterID, data)
    console.log(character)
}