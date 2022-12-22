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
        first_name: 'Hans',
        last_name: 'Hansen',
        email: 'hans@gmail.com'
    },
    {
        ID: '121110',
        first_name: 'Hanna',
        last_name: 'Rasmussen',
        email: 'hanna@gmail.com'
    },
    {
        ID: '101112',
        first_name: 'Kirsten',
        last_name: 'Berg',
        email: 'kirsten@gmail.com'
    }

]

//alerter details af givet array i en alert
function returnDetails(array) {
    alert (`Thank you ${array.first_name} ${array.last_name}, ID ${array.ID}, a link to reset your password will be sent to ${array.email}.`)
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

