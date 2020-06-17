let character = {
}
let classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

function findMod(score) {
    let mod = 0
    switch (score) {
        case 30:
            mod = 10
            break
        case 29:
            mod = 9
            break
        case 28:
            mod = 9
            break
        case 27:
            mod = 8
            break
        case 26:
            mod = 8
            break
        case 25:
            mod = 7
            break
        case 24:
            mod = 7
            break
        case 23:
            mod = 6
            break
        case 22:
            mod = 6
            break
        case 21:
            mod = 5
            break
        case 20:
            mod = 5
            break
        case 19:
            mod = 4
            break
        case 18:
            mod = 4
            break
        case 17:
            mod = 3
            break
        case 16:
            mod = 3
            break
        case 15:
            mod = 2
            break
        case 14:
            mod = 2
            break
        case 13:
            mod = 1
            break
        case 12:
            mod = 1
            break
        case 11:
            mod = 0
            break
        case 10:
            mod = 0
            break
        case 9:
            mod = -1
            break
        case 8:
            mod = -1
            break
        case 7:
            mod = -2
            break
        case 6:
            mod = -2
            break
        case 5:
            mod = -3
            break
        case 4:
            mod = -3
            break
        case 3:
            mod = -4
            break
        case 2:
            mod = -4
            break
        case 1:
            mod = -5
            break
    }
    return mod
}

function validateClass(input) {
    let valid = false
    for (i = 0; i < classes.length; i++) {
        if (classes[i].toLowerCase == input.toLowerCase) {
            valid = true
        }
    }
    return valid
}
function createHtmlElement(objects, backFun, nextFun, last) {
    let html = document.createElement('div')
    objects.forEach(obj => {
        let div = document.createElement('div')
        let br = document.createElement('br')
        let text = document.createElement('h3')
        text.innerText = `${obj.ask}:`
        if (obj.required) {
            text.innerText = `*${text.innerText}`
        }
        let input = document.createElement('input')
        input.type = obj.type
        input.id = obj.id
        input.className = 'input'
        if (obj.default) {
            input.value = obj.default
            

        }
        div.appendChild(text)
        div.appendChild(input)
        div.appendChild(br)
        html.appendChild(div)
    });
    let buttons = document.createElement('div')
    let cancel = cancelButton()
    buttons.appendChild(cancel)
    if (backFun.length > 3) {
        let back = document.createElement('input')
        back.type = 'button'
        back.value = 'Back'
        back.onclick = eval(backFun)
        back.className = 'input'
        buttons.appendChild(back)
    }
    if (!last) {
        let next = document.createElement('input')
        next.type = 'button'
        next.value = "Next"
        next.onclick = eval(nextFun)
        next.className = 'input'
        buttons.appendChild(next)
    }
    else {
        let save = document.createElement('input')
        save.type = 'button'
        save.value = 'Save'
        save.className = 'input'
        save.onclick = saveCharacter
        buttons.appendChild(save)
    }

    html.appendChild(buttons)
    // Create error area
    let errorArea = document.createElement('div')
    errorArea.id = "errorArea"
    html.appendChild(errorArea)
    return html

}
function newCharacter() {
    window1Create()
}


