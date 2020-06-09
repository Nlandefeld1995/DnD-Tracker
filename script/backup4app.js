// create
function dbCreateCharacter(data){
    let response
    let url = `https://parseapi.back4app.com/classes/characters`
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        console.log(error)
        response = error
    })
    return response
}

function dbCreateUser(data){
    let response
    let url = `https://parseapi.back4app.com/classes/users`
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}
// get
function dbGetUsers(){
    let response
    let url = `https://parseapi.back4app.com/classes/users`
    $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}


function dbGetCharacters(){
    let response
    let url = `https://parseapi.back4app.com/classes/characters`
    $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}
// Get by id
function dbGetUserById(id){
    let response
    let url = `https://parseapi.back4app.com/classes/users/${id}`
    $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}

function dbGetCharacterbyId(id){
    let response
    let url = `https://parseapi.back4app.com/classes/characters/${id}`
    $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}
//  Update
function dbUpdateUser(id, data){
    let response
    let url = `https://parseapi.back4app.com/classes/users/${id}`
    $.ajax({
        type: "PUT",
        url: url,
        data:data,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}
function dbUpdateCharacter(id, data){
    let response
    let url = `https://parseapi.back4app.com/classes/characters/${id}`
    $.ajax({
        type: "PUT",
        url: url,
        data:data,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
    .done(response => {
        console.log(response)
        response = response
    })
    .fail(error => {
        response = error
        console.log(error)
    })
    
    return response
}