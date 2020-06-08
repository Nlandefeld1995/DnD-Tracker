let character = {}
function createHtmlElement(objects, backFun, nextFun, last){
    let html = document.createElement('div')
    objects.forEach(obj => {
        let div = document.createElement('div')
        let br = document.createElement('br')
        let text = document.createElement('h3')
        text.innerText = obj.ask
        let input = document.createElement('input')
        input.type = obj.type
        input.id = obj.id 
        div.appendChild(text)
        div.appendChild(input)
        div.appendChild(br)
        html.appendChild(div)
    }); 
    let buttons = document.createElement('div') 
    if(backFun.length > 3){
        let back = document.createElement('input')
        back.type = 'button'
        back.value = 'Back'
        back.onclick = eval(backFun)
        buttons.appendChild(back)
    }
    if(!last){
        let next = document.createElement('input')
        next.type = 'button'
        next.value = "Next"
        next.onclick = eval(nextFun)
        buttons.appendChild(next)
    }
    else{
        let save = document.createElement('input')
        save.type = 'button'
        save.value = 'Save'
        save.onclick = saveCharacter
        buttons.appendChild(save)
    }
    html.appendChild(buttons)
    return html
     
}
function newCharacter(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let characterInfo = [
        {
            ask: "Player Name",
            type: "textbox",
            id: "playerName",
            required: true
        },
        {
            ask: "Character First Name",
            type: "textbox",
            id: "characterFirstName",
            required: true
        },
        {
            ask: "Character Middle Name",
            type: "textbox",
            id: "characterMiddleName",
            required: false
        },
        {
            ask: "Character Last Name",
            type: "textbox",
            id: "characterLastName",
            required: true
        }
    ]
    let html = createHtmlElement(characterInfo, '' ,'characterInfoValidate', false)
    modal.appendChild(html)
}
function characterInfoValidate(){
    console.log(1)

}

function saveCharacter(){}