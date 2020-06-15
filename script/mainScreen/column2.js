async function column2(){
    let column2 = document.createElement('div')
    column2.style.width = '50%'
    column2.style.borderRight = 'solid black'
    column2.id = 'mainColumn2'
    let playerinformation = await createPlayerInfo()

    return column2
}

async function createPlayerInfo(){
    let div = documnet.createElement('div')
    div.id = 'playerInformationDiv'

    let navigation = [
        {
            label: 'Hit Points',
            function: '',
            id: 'navHitPoints',
            order: 1
        },
        {
            label: "Proficiencies",
            function: '',
            id: 'navProficiencies',
            order: 2
        },
        {
            label: "Money",
            function: '',
            id: 'navMoney',
            order: 3
        },
        {
            label: "Inventory",
            function:"",
            id: "navInventory",
            order: 4
        },
        {
            label: "Features & Traits",
            function: "",
            id: "navFeaturesTraits",
            order: 5
        },
        { 
            label: "Special Abilities",
            function: "",
            id: "navSpecialAbilities",
            order: 6
        },
        {
            label: "Other Proficiencies",
            function: "",
            id: "navOtherProficiencies",
            order: 7
        },
        {
            label: "Player Information",
            function: "",
            id: "navPlayerInformation",
            order: 8
        },
        {
            label: "Personality Traits",
            function: "",
            id: "navPersonalityTraits",
            order: 9
        },
        {
            label: "Attunments",
            function: "",
            id: "navAttunments",
            order: 10
        }
    ]
    

}