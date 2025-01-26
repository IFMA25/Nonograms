const body = document.querySelector('body');
const size = 60;
const fontSize = 22;
let shablon = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

let shablonEasy = {
    plus: [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    arrow: [
        [1, 1, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]
    ],
    'yin-and-yang': [
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1]
    ],
    Y: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    2: [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0]
    ],
};
let shablonMedium = {
    'baby-stroller': [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0]
    ],
    'umbrella': [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0]
    ],
    'baby-stroller': [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0]
    ],
   'baby-stroller': [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0]
    ],
    'baby-stroller': [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0]
    ],
};
let shablonHard = {
    plus: [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    arrow: [
        [1, 1, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]
    ],
    'yin-and-yang': [
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1]
    ],
    Y: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    2: [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0]
    ],
}
let shablonChoose ;

let color = false;
let timerStatus =false;
let secundCount = 0;
let minutCount = 0;

class Element{
    constructor (tag, className, text, parent){
        this.tag = tag;
        this.className = className;
        this.text = text;
        this.parent = parent;
    }
    createElement(){
        const element = document.createElement(this.tag);
        if(this.className){
            const classes = this.className.split(' ');
            element.classList.add(...classes);
        }
        element.textContent = this.text;
        this.parent.appendChild(element);
        return element
    }
}
class Play{
    constructor(row, column, size){
        this.row = row;
        this.column = column;
        this.size = size;
        this.fieldGame = this.createPlayField();
        console.log(this.fieldGame)
    }
    createPlayField(){
        const field = [];
        for(let i = 0; i < this.row; i++){
            const rows = [];
            for(let j = 0; j < this.column; j++){
                rows.push(0)
            }
            field.push(rows);
        }
        return field
    }
    
    renderField(ctx){
        ctx.strokeStyle = 'black';
        for(let i = 1; i <= this.row-1; i++){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(100, i*this.size+100);
            ctx.lineTo(this.column * this.size + 100, i*this.size + 100);
            ctx.closePath();
            ctx.stroke();
        }
        for(let j = 1; j <= this.column-1; j++){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(j*this.size + 100, 100);
            ctx.lineTo(j*this.size + 100, this.row*this.size + 100);
            ctx.closePath();
            ctx.stroke();
        }
    }
    updateBoard(ctx){
        for(let i = 0; i <= this.row; i++){
            if(i == 0 || i == this.row){
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(97, i*this.size+98.5);
                ctx.lineTo(this.column * this.size + 100, i*this.size + 98.5);
                ctx.closePath();
                ctx.stroke();
            }
        }
        for(let j = 0; j <= this.column; j++){
            if(j == 0 || j == this.column){
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(j*this.size + 98.5, 98.5);
                ctx.lineTo(j*this.size + 98.5, this.row*this.size + 98.5);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
    renderClues(ctx){
        ctx.font = `${fontSize}px Roboto`;
        ctx.fillStyle = 'black';
        let text = '';
        let cluesX = [];
        let cluesY = [];
        for(let i = 0; i < shablon.length; i++){
            let cluesRow = [];
            let count = 0;
            for(let j = 0; j < shablon[i].length; j++){
                if(shablon[i][j] == 1){
                    count ++;
                } else if(count > 0){
                    cluesRow.push(count);
                    count = 0;
                }
            }
            if(count > 0){
                cluesRow.push(count);
            }
            cluesX.push(cluesRow);
        }
        for(let i=0; i < cluesX.length; i++){
            text = cluesX[i].join(' | ');
            let textWidth = ctx.measureText(text).width;
            ctx.fillText(text, 90 - textWidth, 90 + fontSize/2 +size/2 + i*size);
        }

        for(let i = 0; i < shablon[0].length; i++){
            let cluesColumn = [];
            let count = 0;
            for(let j = 0; j < shablon.length; j++){
                if(shablon[j][i] == 1){
                    count ++;
                } else if(count > 0){
                    cluesColumn.push(count);
                    count = 0;
                }
            }
            if(count >0){
                cluesColumn.push(count)
            }
            cluesY.push(cluesColumn);
        }
        for(let i=0; i < cluesY.length; i++){
            for(let j = 0; j < cluesY[i].length; j++){
                text = cluesY[i][j];
                ctx.fillText(text, 90 +size/2 + i*size, 90 - fontSize*j);
            }
        }
    }
    positionCell(event){
        let rowIndex = Math.floor((event.offsetX - 100)/this.size);
        let columnIndex =Math.floor((event.offsetY - 100)/this.size);
        console.log(`x: ${rowIndex}, y: ${columnIndex}`);

        if(rowIndex >=0 && rowIndex < this.row && columnIndex >=0 && columnIndex < this.column){
            this.fieldGame[columnIndex][rowIndex] = this.fieldGame[columnIndex][rowIndex] === 0 ? 1 : 0;
            ctx.fillStyle = this.fieldGame[columnIndex][rowIndex] ? 'black' : 'white';
            ctx.fillRect((100 + rowIndex*this.size+1), (100 + columnIndex*this.size+1), this.size-2, this.size-2);
            this.updateBoard(ctx);
        }
        return this.fieldGame;
    }
}


// create element on page
const container = new Element('div', 'container', '', body).createElement();
const header = new Element('header', 'header', '', container).createElement();
const chooseGame = new Element('div', 'choose-game', '', container).createElement();

const canvas = new Element('canvas', 'canvas', '', container).createElement();
let ctx = canvas.getContext('2d');
const widthCanvas = canvas.width = shablon[0].length * size + 200;
const heightCanvas = canvas.height = shablon.length *size + 200;
const nonogram = new Play(shablon[0].length, shablon.length, size);


const navigation = new Element('nav', 'nav', '', header).createElement();
const btnLevelEasy = new Element('button', 'btn-easy', 'Easy', navigation).createElement();
btnLevelEasy.addEventListener('click', function(){
    shablonChoose = shablonEasy;
    chooseShabloneGame();
})
const btnLevelMedium = new Element('button', 'btn-medium', 'Medium', navigation).createElement();
btnLevelMedium.addEventListener('click', function(){
    shablonChoose = shablonMedium;
    chooseShabloneGame();
    console.log(shablonChoose)
})
const btnLevelHard = new Element('button', 'btn-hard', 'Hard', navigation).createElement();
btnLevelHard.addEventListener('click', function(){
    shablonChoose = shablonHard;
    chooseShabloneGame();
})
const timer = new Element('p', 'timer', '', header).createElement();
const timerMinuts = new Element('span', 'minuts', 'XX', timer).createElement();
const timerSlash = new Element('span', '', ':', timer).createElement();
const timerSecunds = new Element('span', 'secunds', 'XX', timer).createElement();
const btnReset = new Element('button', 'btn-reset', 'Reset game', header).createElement();

// create chosw block on page
function chooseShabloneGame(){
    chooseGame.innerHTML = '';
    for(let i =0; i < Object.keys(shablonChoose).length; i++){
    const innerChoose = new Element('div', 'choose-inner', '', chooseGame).createElement();
    const imgChoose = new Element('img', 'choose-img', '', innerChoose).createElement();
    imgChoose.setAttribute('src', `img/${Object.keys(shablonChoose)[i]}.png`)
    innerChoose.dataset.choose = i;
    console.log(Object.keys(shablonChoose)[i])
    const nameChoose = new Element('p', 'choose-name', '', innerChoose).createElement();
    nameChoose.textContent = `Puzzle "${Object.keys(shablonChoose)[i].toUpperCase()}"`

    //choose shablon
    innerChoose.addEventListener('click', function(){
        ctx.clearRect(0, 0, widthCanvas, heightCanvas);
        shablon = shablonChoose[Object.keys(shablonChoose)[i]];
        nonogram.fieldGame = nonogram.createPlayField();
        init();
        console.log(shablon)
        console.log(nonogram.fieldGame);
    })
}
}




function init(){
    nonogram.renderField(ctx);
    nonogram.updateBoard(ctx);
    nonogram.renderClues(ctx);
}

canvas.addEventListener('mousedown', function(event){
    if(
        event.offsetX >= 100 &&
        event.offsetX <= 100 + shablon[0].length * size &&
        event.offsetY >= 100 &&
        event.offsetY <= shablon.length *size + 100

    ){
        timerStart();
    }
    color = !color;
    nonogram.positionCell(event);
    endTheGame();
});
btnReset.addEventListener('click', function(){
    nonogram.fieldGame = nonogram.createPlayField();
    console.log(nonogram.fieldGame);
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    init();
})

// end game if all cell == shablon
function endTheGame(){
    let result = nonogram.fieldGame.every((row, rowIndex) => row.every((col, columnIndex) => col === shablon[rowIndex][columnIndex]))
    modalActive(result)
}

//modal window
function modalActive(result){
    if(result){
            const modalWindow = new Element('div', 'modal-window', '', body).createElement();
            const modalContent = new Element('div', 'modal-content', 'Great! You have solved the nonogram!', modalWindow).createElement();
            const modalClose = new Element('button', 'modal-close', '', modalContent).createElement();
            const modalCloseItem = new Element('i', 'fa-solid fa-xmark', '', modalClose).createElement();
            modalClose.addEventListener('click', function(){
            modalWindow.remove();
            });
            modalWindow.addEventListener('click', function(e){
                if(!modalContent.contains(e.target)){
                    modalWindow.remove();
                }
            })
        }
}

// timer

function timerStart(){
    if(!timerStatus){
        timerStatus = true;
        chahgeTimer('0', timerSecunds);
        chahgeTimer('0', timerMinuts);
        let startSecund = setInterval(
            function(){
                secundCount++;
                if(secundCount > 59){
                    secundCount = 0;
                    minutCount++;
                    if(minutCount >59){
                        minutCount = 0;
                    }
                }
                chahgeTimer(secundCount, timerSecunds);
                chahgeTimer(minutCount, timerMinuts);
            }, 1000
        )
    }
}
function chahgeTimer(time, timeBox){
    timeBox.textContent = time < 10 ? '0' + time : time;
}

init();