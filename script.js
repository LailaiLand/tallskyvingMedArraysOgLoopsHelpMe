// prøv å gjøre oppgaven ved å lage array.
// push randomNum til array med loop,
// skriv html med loop,
// lagre posisjon på tall og push og splice [i] ?

let generatedNumbers = [];
let randomNum = 0;
let innhold = document.getElementById('app');


//view
function updateBoard(){
    innhold.innerHTML = '';
    for (i = 0; i < generatedNumbers.length; i++){
        innhold.innerHTML += `
        <div class="rute" onclick="flyttTall(` + i + `)"> ` + generatedNumbers[i] + ` </div>
        `;
    }
}



//controller

createNumbers()
function createNumbers(){
    for (let i = 0; i < 9; i++){
        randomGenerator();
        while (generatedNumbers.includes(randomNum) || generatedNumbers.includes['']){
            randomGenerator();
        }
        generatedNumbers.push(randomNum);
        console.log(generatedNumbers[i]);
    }
    updateBoard();
}
function randomGenerator(){
    randomNum = Math.floor(Math.random() * 9) + 1;
    if (randomNum == 9) randomNum = '';
    console.log('random er', randomNum)

    return
}
function flyttTall(selected){
    for (let placer of [-3, -1, 1, 3]){
        let seeker = selected - placer;
        if (seeker < 0 || seeker > generatedNumbers.length) continue;
        if (generatedNumbers[seeker] == ''){
            generatedNumbers[seeker] = generatedNumbers[selected];
            generatedNumbers[selected] = '';
        }
    }
    updateBoard();
    victoryCheck();
}
function victoryCheck(){
    let comparisonLast = 0;
    for (let i = 0; i < generatedNumbers.length - 1; i++){
       if (generatedNumbers[i] > comparisonLast){
        comparisonLast = generatedNumbers[i];
        continue;
       } else return;
    }
    innhold.innerHTML += 'Gratulerer!';
}
function juks(){
    generatedNumbers = [1, 2, 3, 4, 5, 6, 7, '', 8]
    updateBoard();
}