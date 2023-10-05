//  ---------------------BOY TEXT-----------------------------------

const boyText = document.querySelector ('.main__boy-text');
let yourName = prompt ('Привіт! Як тебе звати?');

function showName() {
    boyText.innerHTML = `Привіт,  ${yourName} !!`
};
setTimeout (showName, 500);

setTimeout (showName1, 1900);

function showName1() {
    boyText.innerHTML = (`Мене звати Ку-Ку.`)
};

setTimeout (showName2, 5500);
function showName2() {
    boyText.innerHTML = (`Давай пограємо!`)
};

setTimeout (showName3, 8500);
function showName3() {
    boyText.innerHTML = (`Це не дуже складна гра`)
};

setTimeout (showName4, 11000);
function showName4() {
    boyText.innerHTML = (`Помісти червону кулю у зелену кулю`); 
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
};
boyMove();

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
};
boyMoveSecond();
//  -------------------------------------------------------------------

//  -----------------------------Field--------------------------------------

// let mainField = document.querySelector ('.main__field');

// mainField.addEventListener ('mousemove' , function(event){
//     mainField.innerHTML =
//     `ClientX - ${event.clientX} <br> ClientY - ${event.clientY}`;
// } );


const gragField = document.querySelector('.main__field');
const gragItem = document.querySelector('.main__ball');

gragItem.addEventListener("mousedown", function (event) {

	let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
	let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

	let gragItemSizes = {
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	let gragFieldSizes = {
		left: gragField.getBoundingClientRect().left + scrollX,
		top: gragField.getBoundingClientRect().top + scrollY,
		right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
		bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
	}

	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	moveItem(event.pageX, event.pageY);

	function moveItem(pageX, pageY) {
		let currentX = pageX - coordsItemX;
		let currentY = pageY - coordsItemY;

		if (
			currentX + gragItemSizes.width <= gragFieldSizes.right &&
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`;
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
	}

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.main__gates');
        let openNumber = document.querySelector ('.footer__codes');
                        // footer code        

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
                        // footer code
                currentDroppable.classList.remove('main-number');
                openNumber.classList.remove('main-number');
			}
            
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
                        // footer code
                currentDroppable.classList.add('main-number');
                openNumber.classList.add('main-number');
                
                

  
            }
            let oneNumber = document.querySelector('.footer-number1');
                oneNumber.style.background = 'none';
                oneNumber.innerHTML = 9;
            let twoNumber = document.querySelector('.footer-number2');
                twoNumber.style.background = 'none';
                twoNumber.innerHTML = 7;
            let threeNumber = document.querySelector('.footer-number3');
                threeNumber.style.background = 'none';
                threeNumber.innerHTML = 5;
            let foreNumber = document.querySelector('.footer-number4');
                foreNumber.style.background = 'none';
                foreNumber.innerHTML = 1;
            let fiveNumber = document.querySelector('.footer-number5');
                fiveNumber.style.background = 'none';
                fiveNumber.innerHTML = 9;
            const boyText = document.querySelector ('.main__boy-text');
                function showName() {
                    boyText.innerHTML = `Молодець!! Тепер в тебе є код до сейфу !`
                };
                setTimeout (showName, 1000);
            let openLevel = document.querySelector ('next-level');
                openLevel.style.display = 'block';
		}


	}

	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function () {
		document.removeEventListener('mousemove', onDragItem);
	}, { "once": false });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});

//  -------------------------------------------------------------------

let p = 1;
document.querySelector ('button').onclick = function (e){
    p++;
    document.querySelector ('progress').value = p;
}