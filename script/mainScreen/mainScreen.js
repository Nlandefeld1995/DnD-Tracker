async function loadMainScreen(){

    // add loader 
    // turn on 
    let main = document.getElementById('mainContainer')
    let mainColumn1 = await column1()
    let mainColumn2 = await column2()
    main.appendChild(mainColumn1)
    main.appendChild(mainColumn2)
    // loader off
}
