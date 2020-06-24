function configureFavorites(){
    let main = document.getElementById('navMain')
    main.innerHTML = ''

    let title = document.createElement('div')
    let titleValue = document.createElement('h1')
    titleValue.innerText = 'Comming Soon.'
    title.appendChild(titleValue)

    main.appendChild(title)
}