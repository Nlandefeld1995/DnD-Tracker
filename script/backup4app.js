// create
function dbCreateCharacter(data) {

    let url = `https://parseapi.back4app.com/classes/characters`
    let response = $.ajax({
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
            return response
        })
        .fail(error => {
            console.error(error)
            return error
        })
    return response
}

function dbCreateUser(data) {

    let url = `https://parseapi.back4app.com/classes/users`
    let response = $.ajax({
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
            return response
        })
        .fail(error => {
            console.error(error)
            return error
        })

    return response
}
// get
function dbGetUsers() {
    let url = `https://parseapi.back4app.com/classes/users`
    let response = $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
        .done(response => {
            return response
        })
        .fail(error => {
            console.error(error)
            return error
        })

    return response
}


function dbGetCharacters() {

    let url = `https://parseapi.back4app.com/classes/characters`
    let response = $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
        .done(response => {
            return response
        })
        .fail(error => {
            console.error(error)
            return error

        })

    return response
}
// Get by id
function dbGetUserById(id) {

    let url = `https://parseapi.back4app.com/classes/users/${id}`
    let response = $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
        .done(response => {
            return response
        })
        .fail(error => {
            console.error(error)
            return error
        })

    return response
}

function dbGetCharacterbyId(id) {

    let url = `https://parseapi.back4app.com/classes/characters/${id}`
    let response = $.ajax({
        type: "GET",
        url: url,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
        .done(response => {
            return response
        })
        .fail(error => {
            console.error(error)
            return error

        })

    return response
}
//  Update
function dbUpdateUser(id, data) {

    let url = `https://parseapi.back4app.com/classes/users/${id}`
    let response = $.ajax({
        type: "PUT",
        url: url,
        data: data,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
        .done(response => {
            return response
        })
        .fail(error => {
            console.error(error)
            return error

        })

    return response
}
function dbUpdateCharacter(id, data) {
    let response
    let url = `https://parseapi.back4app.com/classes/characters/${id}`
    $.ajax({
        type: "PUT",
        url: url,
        data: data,
        headers: {
            'X-Parse-Application-Id': 'uB4JSOphROFz8TA3F9qtPX3w5EL7zoaX5ZuZ5eD4',
            'X-Parse-REST-API-Key': 'rI8BHZJB9swVXSwyYI0n95WG1LeCZ7ojfDMv7RsW',
            'Content-Type': 'application/json'
        }
    })
        .done(response => {
            return response
        })
        .fail(error => {
            console.error(error)
            return error

        })

    return response
}
// change to push