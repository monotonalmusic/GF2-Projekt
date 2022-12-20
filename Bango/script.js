

const container_1 = document.getElementById('container_1');
const container_2 = document.getElementById('container_2');
const container_3 = document.getElementById('container_3');


//Opstiller vores bingoplader som divs 
function createGrid (rows, cols, container, bangonummer) {
    //document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.id = "cell-" + bangonummer + "x" + i;
        cell.classList = 'cell';
        container.appendChild(cell);   
    }
};

//Laver 3 plader
function threeTimes() {
    document.getElementById("container_1").innerHTML = " ";
    document.getElementById("container_2").innerHTML = " ";
    document.getElementById("container_3").innerHTML = " ";
    createGrid(3, 9, container_1, 1);
    createGrid(3, 9, container_2, 2);
    createGrid(3, 9, container_3, 3);
}

/* function threeTimes2(seed) {
    generateNumbers(seed, container1)
    generateNumbers(seed, container2)
    generateNumbers(seed, container3)
} */


function generateNumbers(seed) {
    let arrayOfBingoNumbers = [];
    let firstColumnAmount = 0;
    let secondColumnAmount = 3;
    let thirdColumnAmount = 6;
    let fourthColumnAmount = 9;
    let fifthColumnAmount = 12;
    let sixthColumnAmount = 15;
    let seventhColumnAmount = 18;
    let eighthColumnAmount = 21;
    let ninthColumnAmount = 24;
    loop:
    for(let i = 0; arrayOfBingoNumbers.length < 15; i++) {
        let bingoNumber = new Math.seedrandom(seed + i);
        // console.log(bingoNumber())
        let bingoNumber2 = bingoNumber() * 90;
        //console.log(bingoNumber2);
        bingoNumber2 = Math.round(bingoNumber2);
        if(arrayOfBingoNumbers.indexOf(bingoNumber2) === -1 && 1 <= bingoNumber2 && bingoNumber2 <= 90) {
            if(bingoNumber2 >= 1 && bingoNumber2 <= 9 && firstColumnAmount < 3) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ firstColumnAmount).innerHTML = bingoNumber2;
                firstColumnAmount++;
            }
            else if (bingoNumber2 >= 10 && bingoNumber2 <= 19 && secondColumnAmount < 6) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ secondColumnAmount).innerHTML = bingoNumber2;
                secondColumnAmount++;
            }
            else if (bingoNumber2 >= 20 && bingoNumber2 <= 29 && thirdColumnAmount < 9) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ thirdColumnAmount).innerHTML = bingoNumber2;
                thirdColumnAmount++;
            }
            else if (bingoNumber2 >= 30 && bingoNumber2 <= 39 && fourthColumnAmount < 12) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ fourthColumnAmount).innerHTML = bingoNumber2;
                fourthColumnAmount++;
            }
            else if (bingoNumber2 >= 40 && bingoNumber2 <= 49 && fifthColumnAmount < 15) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ fifthColumnAmount).innerHTML = bingoNumber2;
                fifthColumnAmount++;
            }
            else if (bingoNumber2 >= 50 && bingoNumber2 <= 59 && sixthColumnAmount < 18) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ sixthColumnAmount).innerHTML = bingoNumber2;
                sixthColumnAmount++;
            }
            else if (bingoNumber2 >= 60 && bingoNumber2 <= 69 && seventhColumnAmount < 21) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ seventhColumnAmount).innerHTML = bingoNumber2;
                seventhColumnAmount++;
            }
            else if (bingoNumber2 >= 70 && bingoNumber2 <= 79 && eighthColumnAmount < 24) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ eighthColumnAmount).innerHTML = bingoNumber2;
                eighthColumnAmount++;
            }
            else if (bingoNumber2 >= 80 && bingoNumber2 <= 90 && ninthColumnAmount < 27) {
                arrayOfBingoNumbers.push(bingoNumber2);
                document.getElementById("cell-1x"+ ninthColumnAmount).innerHTML = bingoNumber2;
                ninthColumnAmount++;
            }         
        }
       
        
    } 
    arrayOfBingoNumbers.sort(function(a, b) {return a-b});
    console.log(arrayOfBingoNumbers);


}


// function findNumberInArray(lower, upper, array) {
//     let between = array.filter(function(item) {
//         return (item > lower && item < upper);
//     })
//     return between
// }
