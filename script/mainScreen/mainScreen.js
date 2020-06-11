async function loadMainScreen(){
    let main = document.getElementById('mainContainer')
    let mainColumn1 = await column1()
    main.appendChild(mainColumn1)
}
