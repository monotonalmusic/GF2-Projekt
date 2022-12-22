//const til 3 bango plader
const container_1 = document.getElementById('container_1');
const container_2 = document.getElementById('container_2');
const container_3 = document.getElementById('container_3');

//Opstiller vores bingoplader som divs fordelt i row og collums 
function createGrid (rows, cols, container, bangonummer) {
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
        }
    }
};

//Generer 3 plader
function threeTimes() {
    document.getElementById("container_1").innerHTML = " "; //fjerner alt paa pladerne, inden vi laver nye
    document.getElementById("container_2").innerHTML = " ";
    document.getElementById("container_3").innerHTML = " ";
    createGrid(3, 9, container_1, 1); //laver 3 nye plader
    createGrid(3, 9, container_2, 2);
    createGrid(3, 9, container_3, 3);
}
//Generer tallene paa de 3 bankoplader ved input af seed
 function threeTimes2(seed) {
    let inputWord = document.getElementById('inputline').value //tager input ordet
    seed = inputWord
    threeTimes();
    generateNumbers(seed, 1) //generer til 3 plader
    generateNumbers(seed, 2)
    generateNumbers(seed, 3)
} 

//Finder laengden af alle arrays tilsammen i vores 2D array, hvilket bruges som condition i for loop i generateNumbers
function lengthOfMultiArray(array, biggerArrayLength) {
    let i = 0;
    biggerArrayLength = 0;
    while (i<9) {
        biggerArrayLength += array[i].length;
        i++;
    }
    return biggerArrayLength;
}

//generere tal udfra et seed
function generateNumbers(seed, container) {
    let arrayOfBingoNumbers = [[],[],[],[],[],[],[],[],[]]; //tom multiarray til alle 9 columns 
    let biggerArrayLength = 0;
    for(let i = 0; biggerArrayLength < 15; i++) {
        let bingoNumber = new Math.seedrandom(seed + i + "x" + container*97); //Ganger med et tal, for at sorge for at alle tre plader paa et seed er forskelligt fra hinanden
        let bingoNumber2 = bingoNumber() * 90; //Ganger med 90 fordi er 90 vilkårlige tal på en bangoplade
        bingoNumber2 = Math.round(bingoNumber2);
                for(let j = 0, k=10, l=0; l < 8; j+=10, k+=10, l++) {
                    if(1 <= bingoNumber2 && bingoNumber2 <= 90) {
                        //Condition 1: Lower limit / start tal, Condition 2: Upper limit / slut tal, Condition 3: Max tre tal pr column, Condition 4 og 5: Tjekker om tallet er unikt 
                        if(bingoNumber2 >= j && bingoNumber2 < k && arrayOfBingoNumbers[l].length < 3 && arrayOfBingoNumbers[l][0] != bingoNumber2 && arrayOfBingoNumbers[l][1] != bingoNumber2) {
                            arrayOfBingoNumbers[l].push(bingoNumber2);
                        }
                        //ekstra if statement da 90 skal med i arrayet fra 80-90, hvor resten af loopet har været fra X0-X9 er det her fra X0-X0
                        else if(bingoNumber2 >= 80 && bingoNumber2 <= 90 && arrayOfBingoNumbers[8].length < 3 && arrayOfBingoNumbers[8][0] != bingoNumber2 && arrayOfBingoNumbers[8][1] != bingoNumber2) {
                            arrayOfBingoNumbers[8].push(bingoNumber2);   
                        } 
                          
                }
            }
        biggerArrayLength = lengthOfMultiArray(arrayOfBingoNumbers, biggerArrayLength);//bruger lengthOfMultiArray til at holde styr på hvor mange tal vi har
    }
    let sortedArray = makeNormalArray(arrayOfBingoNumbers);//tager vores nye 2D array som er sorteret efter laveste til højeste tal
    maxFive(sortedArray, container);
}

//begrænser antal tal i row til max 5, og så sætter tal på plads
function maxFive(array, container) {
    for(let rowNum = 2; rowNum >= 0; rowNum--) { //looper 3 gange, for hver af vores 3 plader
        array.sort(function(a, b) {return b.length - a.length});
        for(let j = 0; j<=4; j++) { //looper fem gange, fordi skal være 5 tal i hvert row
            let lastItem = array[j].pop();
            for(let k = 10, l = 0, m = 0; m<8; k+=10, l+=10, m++) {    //l er lower limit eller start tal, k er upper limit eller slut tal, m er antal loops og column nummer
                if(lastItem < k && lastItem >= l) {
                    document.getElementById("cell-" + container + "x" + m + "x" + rowNum).innerHTML = lastItem;      
                }
                
                else if(lastItem <= 90 && lastItem >= 80) {
                    document.getElementById("cell-" + container + "x" + 8 + "x" + rowNum).innerHTML = lastItem;
                } 
            }   
        }
    }
}

//find nummer mellem 2 values i givet array
function findNumberInArray(lower, upper, array) {
    let between = array.filter(function(item) {
        return (item >= lower && item <= upper);
    })
    return between
}

//lav 2D array til 1D array og sort fra laveste til højeste tal, og så laver til 1D array igen
function makeNormalArray(array){
    let newArray = [].concat(...array);
    newArray.sort(function(a, b){return a-b});
    let multiArray = []
    for(let i = 0, j = 9, k = 0; k<8; i+=10, j+=10, k++) {
        multiArray.push(findNumberInArray(i, j, newArray))
    }
    multiArray.push(findNumberInArray(80, 90, newArray))
    return multiArray;
}

