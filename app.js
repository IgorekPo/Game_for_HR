//  ---------------------BOY TEXT-----------------------------------


const boyText = document.querySelector ('.main__boy-text');


let yourName = prompt ('Привет! Как тебя зовут?');


function showName() {
    boyText.innerHTML = `Привет,  ${yourName} !!`
};
setTimeout (showName, 500);

setTimeout (showName1, 1900);

function showName1() {
    boyText.innerHTML = (`Меня зовут Ку-Ку.`)
};

setTimeout (showName2, 5500);
function showName2() {
    boyText.innerHTML = (`Давай поиграем`)
};

setTimeout (showName3, 8500);
function showName3() {
    boyText.innerHTML = (`Эта игра для тебя`)
};

setTimeout (showName4, 11000);
function showName4() {
    boyText.innerHTML = (`Помести круг в круг`)
};


//  -------------------------------------------------------------------

//  ---------------------BOY MOVE-------------------------------------

function boyMove(){
    let elem = document.querySelector ('.move-img1');
    let pos = 0;
    let int = setInterval(frame, 140)
    function frame (){
        if (pos == 30){
            clearInterval (int);
            elem.classList.remove('move__boy-first')
        } else {
            pos++;
            elem.classList.toggle ('move__boy-first')
        }
    }
}
boyMove()

function boyMoveSecond(){
    let elem = document.querySelector ('.move-img4');
    let pos = 0;
    let int = setInterval(frame, 140)
    function frame (){
        if (pos == 30){
            clearInterval (int);
            elem.classList.remove('move__boy-second')
        } else {
            pos++;
            elem.classList.toggle ('move__boy-second')
        }
    }
}
boyMoveSecond()
//  -------------------------------------------------------------------