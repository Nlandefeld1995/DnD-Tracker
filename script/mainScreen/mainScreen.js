async function loadMainScreen(){
    loader(true)
    // add loader 
    // turn on 
    let main = document.getElementById('mainContainer')
    main.style.position = 'inital'
    
    setTimeout(async function(){
        let mainColumn1 = await column1()
        let mainColumn2 = await column2()
        let mainColumn3 = await column3() 
        main.appendChild(mainColumn1)
        main.appendChild(mainColumn2)
        main.appendChild(mainColumn3)
        loader(false)
    },2000)
    
    
    
    
    // loader off
    
    
}
