//Definere de karaktere som bruges til generated password i arrays
let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
let bigLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let signsArray = ["!", "?", "+", "_", "-", "@", "#", "%", "/", "*"];
let emptyArray = [];

// samler alle arrays og generere et password
function generatePassword(letterString, bigLetterString, numberString, signsString) {
    let lowerArray = letterString.split(",");
    let upperArray = bigLetterString.split(",")
    let intArray = numberString.split(",")
    let symbolArray = signsString.split(",")
    let bigArray = lowerArray.concat(upperArray, intArray, symbolArray);
    let smallerArray = bigArray.filter(removeEmptyElement)
    let slider = document.getElementById("rangeValue").innerHTML;
    let passwordGenerated = ""

    //Hvis mindst en checkbox er checked kører denne kode
    if (smallerArray.length > 4) {
        for (let i = 1; i <= slider; i++) {
            passwordGenerated += smallerArray[Math.round(Math.random() * (smallerArray.length - 1))];
        }
        updatePassword(passwordGenerated)
        console.log(passwordGenerated);
        let input = document.getElementById('generated-password');
        input.addEventListener('generated-password', resizeInput);
        resizeInput.call(input);
    }
    //Hvis ingen checkboxe er checked kører denne kode
    else if (smallerArray.length <= 4) {
        passwordGenerated = "Please check checkboxes first";
        updatePassword(passwordGenerated);
        let input2 = document.getElementById('generated-password');
        input2.addEventListener('generated-password', resizeInput);
        resizeInput.call(input2);
    }
}

//Ændre inputs value til en givet strings value
function updatePassword (str) {
    document.getElementById('generated-password').value = str
} 

// fjerner emptyArray fra biggerArray ved hjaelp af .filter
function removeEmptyElement (array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] != "")
            return array[i]
    }

}

// Checkfuntion som tjekker valuen
function check () {
    generatePassword(document.getElementById("checkbox_1").value, document.getElementById("checkbox_2").value, document.getElementById("checkbox_3").value, document.getElementById("checkbox_4").value);
}
//Tjekker om vores checkbox er aktiv
  function changeValue(num, array) {
    if(document.getElementById("checkbox_" + num).checked == true) {
        document.getElementById("checkbox_" + num).value = array;
    }
    else if(document.getElementById("checkbox_" + num).checked == false) {
        document.getElementById("checkbox_" + num).value = null;
    }
  }

  //Aendre størrelse af input box så det passer med passwords længde
  function resizeInput() {
    this.style.width = this.value.length + 6 + "ch";
  }