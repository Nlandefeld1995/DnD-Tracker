function window3Create(){
    let modal = document.getElementById('popupModal')
    modal.innerHTML = ''
    let hitPoints = [
        {
            ask: "Hit Point Maximum",
            type: "textbox",
            id: "hitPointMax",
            default: character.hitPointMax,
            required: true
        },{
            ask: "Current Hit Points",
            type: "textbox",
            id: "hitPointCurrent",
            default: character.hitPointCurrent
        }
    ] 
}