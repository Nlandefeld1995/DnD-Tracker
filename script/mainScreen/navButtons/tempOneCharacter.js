function oneCharacter(){
    let main = document.getElementById('navMain')
    main.innerHTML = ''

    let title = document.createElement('div')
    let titleValue = document.createElement('h1')
    titleValue.innerText = 'Currently we only support 1 character per account.'
    title.appendChild(titleValue)

    main.appendChild(title)
}