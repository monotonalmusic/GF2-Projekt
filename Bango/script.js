
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

function lengthOfMultiArray(array, biggerArrayLength) {
    let i = 0;
    biggerArrayLength = 0;
    while (i<9) {
        biggerArrayLength += array[i].length;
        i++;
    }
    return biggerArrayLength;
}

// function sortMultiArray(array) {
//     for(let i = 0; i<10; i++) {
//     array.sort(function(a, b) {return a - b});
//     }
//     return array
// }


function generateNumbers(seed, container) {
    let arrayOfBingoNumbers = [[],[],[],[],[],[],[],[],[]];
    let biggerArrayLength = 0;
    for(let i = 0; biggerArrayLength < 15; i++) {
        let bingoNumber = new Math.seedrandom(seed + i + "x" + container*97);
        let bingoNumber2 = bingoNumber() * 90;
        bingoNumber2 = Math.round(bingoNumber2);
                for(let j = 0, k=10, l=0; l < 8; j+=10, k+=10, l++) {
                    if(arrayOfBingoNumbers.indexOf(bingoNumber2) === -1 && 1 <= bingoNumber2 && bingoNumber2 <= 90) {
                        if(bingoNumber2 >= j && bingoNumber2 < k && arrayOfBingoNumbers[l].length < 3 && arrayOfBingoNumbers[l][0] != bingoNumber2 && arrayOfBingoNumbers[l][1] != bingoNumber2) {
                            arrayOfBingoNumbers[l].push(bingoNumber2);
                        }

                        else if(bingoNumber2 >= 80 && bingoNumber2 <= 90 && arrayOfBingoNumbers[8].length < 3 && arrayOfBingoNumbers[8][0] != bingoNumber2 && arrayOfBingoNumbers[8][1] != bingoNumber2) {
                            arrayOfBingoNumbers[8].push(bingoNumber2);   
                        } 
                          
                }
            }
        biggerArrayLength = lengthOfMultiArray(arrayOfBingoNumbers, biggerArrayLength);
    }
    sortMultiArray(arrayOfBingoNumbers);
    maxFive(arrayOfBingoNumbers, container);
}


//begraenser antal tal i row til max 5
function maxFive(array, container) {
    array.sort(function(a, b) {return b.length - a.length});
    let rowNum = 2;
        for(let j = 0; j<=4; j++) {
            let lastItem = array[j].pop();
            
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {  
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;
                    
                    
                }
            
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                        
                }
                
            }
            
            
        }
        array.sort(function(a, b) {return b.length - a.length});
        rowNum = 1;
        for(let j = 0; j<=4; j++) {
            let lastItem = array[j].pop();
            
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {  
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;
                    
                    
                }
            
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                        
                }
                
            }
            
            
        }
        array.sort(function(a, b) {return b.length - a.length});
        rowNum = 0;
        for(let j = 0; j<=4; j++) {
            let lastItem = array[j].pop();
            
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {  
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;
                    
                    
                }
            
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                        
                }
                
            }
            
        }
    
}




