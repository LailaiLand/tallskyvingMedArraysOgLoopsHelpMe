// prøv å gjøre oppgaven ved å lage array.
// push randomNum til array med loop,
// skriv html med loop,
// lagre posisjon på tall og push og splice [i] ?

const generatedNumbers = [];


//view
createBoard()
function createBoard(){
    let board;
    for (let i = 0; i < 9; i++){
        randomGenerator(numGenerated)
        
        generatedNumbers.push(numGenerated)
        console.log(generatedNumbers[i])
    }
}


//controller
function randomGenerator(numGenerated){
    let tempRndNum;
    tempRndNum = Math.floor(Math.random() * 9) + 1;
    numGenerated = tempRndNum;
    return numGenerated;
}