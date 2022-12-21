
const container_1 = document.getElementById('container_1');
const container_2 = document.getElementById('container_2');
const container_3 = document.getElementById('container_3');

//Opstiller vores bingoplader som divs fordelt i row og collums 
function createGrid (rows, cols, container, bangonummer) {
    //document.getElementById("container").innerHTML = " "; //resets container div, making them not overlap infinitely 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    //generer cells (divs) indenfor columns (outer loop) og rows (inner loop)
    for(i = 0; i<cols; i++) {
        for(j = 0; j<rows; j++) {
            let cell = document.createElement("div");
            //bangonummer = plade, i = column, j = row
            cell.id = "cell-" + bangonummer + "x" + i + "x" + j;
            cell.classList = 'cell';
            container.appendChild(cell);
            // document.getElementById(cell.id).innerHTML = cell.id;
        }
    }
};

//Generer 3 plader
function threeTimes() {
    document.getElementById("container_1").innerHTML = " ";
    document.getElementById("container_2").innerHTML = " ";
    document.getElementById("container_3").innerHTML = " ";
    createGrid(3, 9, container_1, 1);
    createGrid(3, 9, container_2, 2);
    createGrid(3, 9, container_3, 3);
}
//Generer tallene paa de 3 bankoplader ved input af seed
 function threeTimes2(seed) {
    let inputWord = document.getElementById('inputline').value
    seed = inputWord
    threeTimes();
    generateNumbers(seed, 1)
    generateNumbers(seed, 2)
    generateNumbers(seed, 3)
} 

//Generer 15 tal, og kalder maxFive 
function generateNumbers(seed, container) {
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
        let bingoNumber = new Math.seedrandom(seed + i + "x" + container*97);
        let bingoNumber2 = bingoNumber() * 90;
        bingoNumber2 = Math.round(bingoNumber2);
        if(arrayOfBingoNumbers.indexOf(bingoNumber2) === -1 && 1 <= bingoNumber2 && bingoNumber2 <= 90) {
            
            
            if(bingoNumber2 >= 1 && bingoNumber2 <= 9 && firstColumnAmount < 3) {
                arrayOfBingoNumbers.push(bingoNumber2);
                firstColumnAmount++;
            }
            else if (bingoNumber2 >= 10 && bingoNumber2 <= 19 && secondColumnAmount < 6) {
                arrayOfBingoNumbers.push(bingoNumber2);
                secondColumnAmount++;
            }
            else if (bingoNumber2 >= 20 && bingoNumber2 <= 29 && thirdColumnAmount < 9) {
                arrayOfBingoNumbers.push(bingoNumber2);
                thirdColumnAmount++;
            }
            else if (bingoNumber2 >= 30 && bingoNumber2 <= 39 && fourthColumnAmount < 12) {
                arrayOfBingoNumbers.push(bingoNumber2);
                fourthColumnAmount++;
            }
            else if (bingoNumber2 >= 40 && bingoNumber2 <= 49 && fifthColumnAmount < 15) {
                arrayOfBingoNumbers.push(bingoNumber2);
                fifthColumnAmount++;
            }
            else if (bingoNumber2 >= 50 && bingoNumber2 <= 59 && sixthColumnAmount < 18) {
                arrayOfBingoNumbers.push(bingoNumber2);
                sixthColumnAmount++;
            }
            else if (bingoNumber2 >= 60 && bingoNumber2 <= 69 && seventhColumnAmount < 21) {
                arrayOfBingoNumbers.push(bingoNumber2);
                seventhColumnAmount++;
            }
            else if (bingoNumber2 >= 70 && bingoNumber2 <= 79 && eighthColumnAmount < 24) {
                arrayOfBingoNumbers.push(bingoNumber2);
                eighthColumnAmount++;
            }
            else if (bingoNumber2 >= 80 && bingoNumber2 <= 90 && ninthColumnAmount < 27) {
                arrayOfBingoNumbers.push(bingoNumber2);
                ninthColumnAmount++;
            }         
        }
       
        
    } 
    arrayOfBingoNumbers.sort(function(a, b) {return a-b});
    console.log(arrayOfBingoNumbers);
    maxFive(arrayOfBingoNumbers, container);


}

//filters array to find values between given lower value and upper value
 function findNumberInArray(lower, upper, array) {
     let between = array.filter(function(item) {
         return (item >= lower && item <= upper);
     })
     return between
 }


//begraenser antal tal i row til max 5
function maxFive(array, container) {
    let emptyArray = [];
    for(let i = 0, lower = 0, upper = 9; i<8; i++, lower +=10, upper+=10) {
        emptyArray.push(findNumberInArray(lower, upper, array));
    }
    emptyArray.push(findNumberInArray(80, 90, array));
    emptyArray.sort(function(a, b) {return b.length - a.length});
    console.log(emptyArray);
    let rowNum = 2;
        for(let j = 0; j<=4; j++) {
            let lastItem = emptyArray[j].pop();
            
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {  
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;
                    
                    
                }
            
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                        
                }
                
            }
            console.log(emptyArray)
            
        }
        emptyArray.sort(function(a, b) {return b.length - a.length});
        rowNum = 1;
        for(let j = 0; j<=4; j++) {
            let lastItem = emptyArray[j].pop();
            
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {  
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;
                    
                    
                }
            
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                        
                }
                
            }
            console.log(emptyArray)
            
        }
        emptyArray.sort(function(a, b) {return b.length - a.length});
        rowNum = 0;
        for(let j = 0; j<=4; j++) {
            let lastItem = emptyArray[j].pop();
            
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {  
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;
                    
                    
                }
            
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                        
                }
                
            }
            console.log(emptyArray)
        }
    
}




