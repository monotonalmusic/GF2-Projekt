//Array of people
let people  = [
    {
        ID: '101010',
        first_name: 'Jens',
        last_name: 'Jensen',
        email: 'jens@gmail.com'

    },
    {
        ID: '110011',
        first_name: 'Betty',
        last_name: 'Robertson',
        email: 'betty@gmail.com'
    },
    {
        ID: '121110',
        first_name: 'Bob',
        last_name: 'Italiano',
        email: 'bob@gmail.com'
    },
    {
        ID: '101112',
        first_name: 'Kevin',
        last_name: 'Nielsen',
        email: 'kevin@gmail.com'
    },
    {
        ID: '101011',
        first_name: 'Mikkel',
        last_name: 'Asmussen',
        email: 'mikkel@gmail.com'

    },
    {
        ID: '101012',
        first_name: 'Gabriel',
        last_name: 'Hughes',
        email: 'gabriel@gmail.com'

    }


]

//alerter details af givet object i en alert
function returnDetails(obj) {
    alert (`Thank you ${obj.first_name} ${obj.last_name}, ID ${obj.ID}, a link to reset your password will be sent to ${obj.email}.`)
    return
}

//checker om givet ID matcher ID i 'people' array, og så giver alert til brugeren om at reset deres password
function reset() {
    let input = document.getElementById('ID').value 
    let success = false
    loop:
    for (i = 0; i < people.length; i++) {
        if (people[i].ID == input) {
        returnDetails(people[i])
        success = true
        break loop;
        }

    }
    if (success == false){
        alert ('Invalid ID')
    }
}   

