const body = document.querySelector('body');
const sizeCanvas = {
    fontSize:{
        easy: 22,
        medium: 20,
        hard: 13
    },
    widthCanvas:{
        easy: 500,
        medium: 500,
        hard: 500
    },
    heightCanvas:{
        easy: 400,
        medium: 400,
        hard: 400
    }
}

let level = 'easy';
let fontSize = 22; 
let widthCanvas = 500; 
let heightCanvas = 400;
let shablon = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
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
    y: [
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
        [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 1, 1, 0, 0]
    ],
    'elephant': [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    'donut': [
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
    ],
    'thumbs-up': [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
    ],
    'house': [
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 0]
    ],
};
let shablonHard = {
    'ice-skate': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    porcupine: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
        [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0]
    ],
    duck: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    ],
    clover: [
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    lamp: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]
    ],
}

let shablonChoose ;
let row;
let column
let color = false;
let timerStatus =false;
let startSecund;
let secundCount = 0;
let minutCount = 0;
let size;
console.log(shablonEasy)
let winMsg = {nameGame: 'PLUS', time:'', level: 'easy'};;
let saveShablon;
let saveField;
let soundList = [];
let imgCanvasLight = null;
const storageGame = localStorage.setItem;



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
    constructor(){
        this.fieldGame = this.createPlayField();
    }
    createPlayField(){
        const field = [];
        row = shablon.length;
        column = shablon[0].length;
        size = (widthCanvas - 200) / shablon[0].length;
        for(let i = 0; i < row; i++){
            const rows = [];
            for(let j = 0; j < column; j++){
                rows.push({ value: 0, mark: false });
            }
            field.push(rows);
        }
        return field
    }
    renderField(ctx){
        ctx.strokeStyle = 'black';
        for(let i = 1; i <= row-1; i++){
            if(i % 5 ===0){
                if(document.body.classList.contains('dark')){
                    ctx.strokeStyle = '#f2f2f2';
                }else{
                    ctx.strokeStyle = 'black';
                }
                ctx.lineWidth = 5;
            } else{
                if(document.body.classList.contains('dark')){
                    ctx.strokeStyle = '#f2f2f2';
                }else{
                    ctx.strokeStyle = 'black';
                }
                ctx.lineWidth = 1;
            }
            ctx.beginPath();
            ctx.moveTo(100, i*size+100);
            ctx.lineTo(column * size + 100, i*size + 100);
            ctx.closePath();
            ctx.stroke();
        }
        for(let j = 1; j <= column-1; j++){
            if(j % 5 ===0){
                if(document.body.classList.contains('dark')){
                    ctx.strokeStyle = '#f2f2f2';
                }else{
                    ctx.strokeStyle = 'black';
                }
                ctx.lineWidth = 5;
            } else{
                if(document.body.classList.contains('dark')){
                    ctx.strokeStyle = '#f2f2f2';
                }else{
                    ctx.strokeStyle = 'black';
                }
                ctx.lineWidth = 1;
            }
            ctx.beginPath();
            ctx.moveTo(j*size + 100, 100);
            ctx.lineTo(j*size + 100, row*size + 100);
            ctx.closePath();
            ctx.stroke();
        }
    }
    updateBoard(ctx){
        for(let i = 0; i <= row; i++){
            if(i == 0 || i == row){
                ctx.lineWidth = 5;
                if(document.body.classList.contains('dark')){
                    ctx.strokeStyle = '#f2f2f2';
                }else{
                    ctx.strokeStyle = 'black';
                }
                ctx.beginPath();
                ctx.moveTo(97, i*size+98.5);
                ctx.lineTo(column * size + 100, i*size + 98.5);
                ctx.closePath();
                ctx.stroke();
            }
        }
        for(let j = 0; j <= column; j++){
            if(j == 0 || j == column){
                ctx.lineWidth = 5;
                if(document.body.classList.contains('dark')){
                    ctx.strokeStyle = '#f3f3f3';
                }else{
                    ctx.strokeStyle = 'black';
                }
                ctx.beginPath();
                ctx.moveTo(j*size + 98.5, 98.5);
                ctx.lineTo(j*size + 98.5, row*size + 98.5);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
    renderClues(ctx){
        ctx.font = `${fontSize}px Roboto`;
        if(document.body.classList.contains('dark')){
            ctx.fillStyle = 'white';
        } else{
            ctx.fillStyle = 'black';
        }
        let text = '';
        let cluesX = [];
        let cluesY = [];
        for(let i = 0; i < row; i++){
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
            if(cluesRow.length == 0){
                cluesRow.push(0);
            }
            cluesX.push(cluesRow);
        }
        let arrTextWidth = [];
        for(let i=0; i < cluesX.length; i++){
            text = cluesX[i].join('  ');
            let textWidth = ctx.measureText(text).width;
            ctx.fillText(text, 90 - textWidth, 90 + fontSize +size/2 + i*size);
            arrTextWidth.push(textWidth);
        }
        for(let i=0; i < cluesX.length; i++){
            if(i%5-4 == 0){
                ctx.lineWidth = 4;
            }else{
                ctx.lineWidth = 1;
            }
            ctx.beginPath();
            if(i%5-4 == 0){
                ctx.moveTo( 90 - Math.max(...arrTextWidth), 99 + (i+1) * size);
                ctx.lineTo(100, 99 + (i+1) * size);
            }else{
                ctx.moveTo( 90 - Math.max(...arrTextWidth), 100 + (i+1) * size);
                ctx.lineTo(100, 100 + (i+1) * size);
            }
            ctx.closePath();
            ctx.stroke();
        }

        let arrTextColumn = [];
        for(let i = 0; i < shablon[0].length; i++){
            let cluesColumn = [];
            let count = 0;
            for(let j = 0; j < row; j++){
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
            if(cluesColumn.length == 0){
                cluesColumn.push(0);
            }
            cluesY.push(cluesColumn);
            arrTextColumn.push(cluesColumn.length)
        }

        for(let i=0; i < cluesY.length; i++){
            for(let j = 0; j < cluesY[i].length; j++){
                text = cluesY[i][j];
                ctx.fillText(text, 95 +size/2 + i*size, 90 - fontSize*j);
            }
        }
        for(let i=0; i < cluesY.length; i++){
            if(i%5 -4 ==0){
                ctx.lineWidth = 4;
            } else{
                ctx.lineWidth = 1;
            }
            ctx.beginPath();
            if(i%5 -4 ==0){
                ctx.moveTo( 99 + i*size + size, 100);
                ctx.lineTo(99 + i*size+size, 98-Math.max(...arrTextColumn)*fontSize);
            } else{
                ctx.moveTo( 100 + i*size + size, 100);
                ctx.lineTo(100 + i*size+size, 98-Math.max(...arrTextColumn)*fontSize);
            }
            ctx.closePath();
            ctx.stroke();
        }
    }
    positionCell(event){
        let rowIndex = Math.floor((event.offsetX - 100)/size);
        let columnIndex =Math.floor((event.offsetY - 100)/size);
        return {rowIndex, columnIndex}
    }
    drawCell(rowIndex, columnIndex, ctx){
        ctx.fillRect((100 + rowIndex*size+1), (100 + columnIndex*size+1), size-2, size-2);
    }
    drawMark(rowIndex, columnIndex, ctx){
        ctx.lineWidth = 1;
        if(document.body.classList.contains('dark')){
            ctx.strokeStyle = 'white';
        }else{
            ctx.strokeStyle = 'black';
        }
        ctx.beginPath();
        ctx.moveTo( 100 + rowIndex * size, 100 + columnIndex * size);
        ctx.lineTo(100 + (rowIndex + 1) * size, 100 + (columnIndex + 1) * size);
        ctx.moveTo(100 + (rowIndex + 1) * size, 100 + columnIndex * size);
        ctx.lineTo(100 + rowIndex * size, 100 + (columnIndex + 1) * size);
        ctx.closePath();
        ctx.stroke();
    }
    colorCell(rowIndex, columnIndex, ctx){
        if(rowIndex >=0 && rowIndex < row && columnIndex >=0 && columnIndex < column){
            this.fieldGame[columnIndex][rowIndex].value = this.fieldGame[columnIndex][rowIndex].value === 0 ? 1 : 0;
            if(document.body.classList.contains('dark')){
                ctx.fillStyle = this.fieldGame[columnIndex][rowIndex].value ? 'white' : 'black';
            } else{
                ctx.fillStyle = this.fieldGame[columnIndex][rowIndex].value ? 'black' : 'white';
            }
            if(this.fieldGame[columnIndex][rowIndex].mark){
                
                this.fieldGame[columnIndex][rowIndex].mark = false;
            }
            this.drawCell(rowIndex, columnIndex, ctx);
            this.updateBoard(ctx);
            // console.log(this.fieldGame[columnIndex][rowIndex])
        }
        return this.fieldGame;
    }
    markCell(rowIndex, columnIndex, ctx){
        if(rowIndex >=0 && rowIndex < row && columnIndex >=0 && columnIndex < column){
            if(!this.fieldGame[columnIndex][rowIndex].mark){
                this.fieldGame[columnIndex][rowIndex].value = 0;

                if(document.body.classList.contains('dark')){
                    ctx.fillStyle = 'black';
                } else{
                    ctx.fillStyle = 'white';
                }
                this.drawCell(rowIndex, columnIndex, ctx);
                this.drawMark(rowIndex, columnIndex, ctx);
                this.fieldGame[columnIndex][rowIndex].mark = true;
            }else if(this.fieldGame[columnIndex][rowIndex].mark){
                
                if(document.body.classList.contains('dark')){
                    ctx.fillStyle = this.fieldGame[columnIndex][rowIndex].value == 0 ? 'black' : 'white';
                } else{
                    ctx.fillStyle = this.fieldGame[columnIndex][rowIndex].value == 0 ? 'white' : 'black';
                }
                this.drawCell(rowIndex, columnIndex, ctx);
                this.fieldGame[columnIndex][rowIndex].mark = false;
            }
            // console.log(this.fieldGame[columnIndex][rowIndex])
            this.updateBoard(ctx);
        }
        return this.fieldGame;
    }
    showSolution(ctx) {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (shablon[i][j] === 1) {
                    this.colorCell(j, i, ctx);
                }
            }
        }
    }
}


// create element on page

const container = new Element('div', 'container', '', body).createElement();
const header = new Element('header', 'header', '', container).createElement();
const topElement = new Element('div', 'top-element', '', header).createElement();
const menu = new Element('div', 'menu', '', header).createElement();
const navigation = new Element('nav', 'nav', '', header).createElement();
const themeBox = new Element('div', 'theme-box', '', topElement).createElement();
const themeLight = new Element('button','btn-theme theme-light', '', themeBox).createElement();
const themeDark = new Element('button', 'btn-theme theme-dark', '', themeBox).createElement();
const soundBox = new Element('label', 'sound-box', '', topElement).createElement();
const soundInput = new Element('input', 'btn-sound', '', soundBox).createElement();
soundInput.setAttribute('type', 'checkbox');
const soundIcon = new Element('span', 'sound-icon', '', soundBox).createElement();
const timer = new Element('div', 'timer', '', container).createElement();
const timerMinuts = new Element('span', 'minuts', 'XX', timer).createElement();
const timerSlash = new Element('span', '', ':', timer).createElement();
const timerSecunds = new Element('span', 'secunds', 'XX', timer).createElement();
const chooseGame = new Element('div', 'choose-game', '', container).createElement();
const innerBlock = new Element('div', 'inner', '', container).createElement();
const innerWin = new Element('div', 'inner-win', '', innerBlock).createElement();
const winTitle = new Element('h2', 'win-title', 'Winning table', innerWin).createElement();
const winTable = new Element('div', 'win-table', '', innerWin).createElement();
const innerCanvas = new Element('div', 'inner-canvas', '', innerBlock).createElement();
const btnReset = new Element('button', 'btn-reset', 'Reset game', menu).createElement();
const btnRandomGame = new Element('button', 'btn-random', 'Random game', menu).createElement();
const saveGame = new Element('button', 'btn-save', 'Save game', menu).createElement();
const continueGame = new Element('button', 'btn-continue', 'Continue last game', menu).createElement();
continueGame.disabled = true;
const audioModal = new Audio('sounds/sound-modal.mp3');
const audioColor = new Audio('sounds/sound-color.mp3');
const audioMark = new Audio('sounds/sound-mark.mp3');
soundList.push(audioModal, audioColor, audioMark);


const canvas = new Element('canvas', 'canvas', '', innerCanvas).createElement();
const btnSolution = new Element('button', 'solution', 'Solution', innerCanvas).createElement();

let ctx = canvas.getContext('2d', { willReadFrequently: true });
canvas.width = widthCanvas;
canvas.height = heightCanvas;
inverColorField();

let nonogram = new Play(size);


function createLevelBtn (levelName, text, shablon){
    const btnLevel = new Element('button', `btn-${levelName}`, text, navigation).createElement();
    btnLevel.addEventListener('click', function(){
        body.classList.add('choose');
        level = levelName;
        fontSize = sizeCanvas.fontSize[level];
        canvas.width = sizeCanvas.widthCanvas[level];
        canvas.height = sizeCanvas.heightCanvas[level];
        shablonChoose = shablon;
        chooseShabloneGame();
    })
}

createLevelBtn('easy', 'Easy', shablonEasy);
createLevelBtn('medium', 'Medium', shablonMedium);
createLevelBtn('hard', 'Hard', shablonHard);



// create chosw block on page
function chooseShabloneGame(){
    chooseGame.innerHTML = '';
    for(let i =0; i < Object.keys(shablonChoose).length; i++){
    const innerChoose = new Element('div', 'choose-inner', '', chooseGame).createElement();
    const imgChoose = new Element('img', 'choose-img', '', innerChoose).createElement();
    imgChoose.setAttribute('src', `img/${Object.keys(shablonChoose)[i]}.png`)
    innerChoose.dataset.choose = i;
    const nameChoose = new Element('p', 'choose-name', '', innerChoose).createElement();
    nameChoose.textContent = ` "${Object.keys(shablonChoose)[i].toUpperCase()}"`

    //choose shablon
    innerChoose.addEventListener('click', function(){
        canvas.style.pointerEvents = 'auto';
        ctx.clearRect(0, 0, widthCanvas, heightCanvas);
        inverColorField();
        shablon = shablonChoose[Object.keys(shablonChoose)[i]];
        nonogram.fieldGame = nonogram.createPlayField();
        init();
        nameGame = Object.keys(shablonChoose)[i];
        secundCount = 0;
        minutCount = 0;
        console.table(shablon)
        // console.log('fieldGame ' +nonogram.fieldGame.value);
        winMsg = {nameGame: nameGame.toUpperCase(), time:'', level: level};
        body.classList.remove('choose');
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
    const { rowIndex, columnIndex } = nonogram.positionCell(event);
    if(event.button === 0){
        color = !color;
        nonogram.colorCell(rowIndex, columnIndex, ctx);
        audioOnOff(audioColor);
        endTheGame();
    }
    if(event.button === 2){
        nonogram.markCell(rowIndex, columnIndex, ctx);
        audioOnOff(audioMark);
    }
});
canvas.addEventListener('contextmenu', function(event){
    if(
        event.offsetX >= 100 &&
        event.offsetX <= 100 + shablon[0].length * size &&
        event.offsetY >= 100 &&
        event.offsetY <= shablon.length *size + 100

    ){
        event.preventDefault();
    }
});

btnReset.addEventListener('click', function(){
    canvas.style.pointerEvents = 'auto';
    nonogram.fieldGame = nonogram.createPlayField();
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    inverColorField();
    secundCount = 0;
    minutCount = 0;
    init();
});

btnRandomGame.addEventListener('click', function(){
    canvas.style.pointerEvents = 'auto';
    const allShablon = [Object.values(shablonEasy), Object.values(shablonMedium), Object.values(shablonHard)].flat();
    const indexRandom = Math.floor((Math.random()*allShablon.length));
    if(indexRandom<=4){
        level = 'easy';
    } else if(indexRandom > 4 && indexRandom <=9){
        level = 'medium';
    } else if(indexRandom > 9 && indexRandom <=14){
        level = 'hard'
    }
    shablon = allShablon[indexRandom];
    fontSize = sizeCanvas.fontSize[level];
    canvas.width = sizeCanvas.widthCanvas[level];
    canvas.height = sizeCanvas.heightCanvas[level];
    inverColorField();
    nonogram.fieldGame = nonogram.createPlayField();
    init();
    secundCount = 0;
    minutCount = 0;
});

btnSolution.addEventListener('click', function(){
    
    canvas.style.pointerEvents = 'none';
    nonogram.fieldGame = nonogram.createPlayField();
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    inverColorField();
    nonogram.showSolution(ctx);
    nonogram.fieldGame = nonogram.createPlayField();
    init();
});


saveGame.addEventListener('click', function(){
    let saveGameStoradge = JSON.parse(localStorage.getItem('Save_Game')) || [];
    let saveGame = {
        saveField: JSON.parse(JSON.stringify(nonogram.fieldGame)),
        saveShablon: JSON.parse(JSON.stringify(shablon)),
        time: stopTimer()
    }
    saveGameStoradge = [];
    saveGameStoradge.push(saveGame);
    localStorage.setItem('Save_Game', JSON.stringify(saveGameStoradge));
    continueGame.disabled = false;
})

continueGame.addEventListener('click', function(){
    canvas.style.pointerEvents = 'auto';
    let saveGameStoradge = JSON.parse(localStorage.getItem('Save_Game')) || [];
    shablon = saveGameStoradge[0].saveShablon;
    
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    inverColorField();
    nonogram.fieldGame = nonogram.createPlayField();
    

    for(let i=0; i <nonogram.fieldGame.length; i++){
        for(let j = 0; j < nonogram.fieldGame[0].length; j++){
            nonogram.fieldGame[i][j] = { ...saveGameStoradge[0].saveField[i][j] };
            if(document.body.classList.contains('dark')){
                nonogram.fieldGame[i][j].value === 1 ? ctx.fillStyle = 'white' : ctx.fillStyle = 'black';
            }else{
                nonogram.fieldGame[i][j].value === 1 ? ctx.fillStyle = 'black' : ctx.fillStyle = 'white';
            }
            
            nonogram.drawCell(j, i, ctx);

            if (nonogram.fieldGame[i][j].mark) {
                nonogram.drawMark(j, i, ctx)
            }
        }
    }
    minutCount = saveGameStoradge[0].time.minut;
    secundCount = saveGameStoradge[0].time.secund;
    timerStart();
    init();
})

function audioOnOff(sound){
    if (soundInput.checked) {
        sound.pause();
        sound.muted = true;
    } else {
        sound.muted = false;
        sound.play();
    }
}
soundInput.addEventListener('input', function() {
    soundList.forEach(sound => {
        sound.muted = soundInput.checked;
    });
});

themeDark.addEventListener('click', function(){
    body.classList.add('dark');
    invertColor();
})
themeLight.addEventListener('click', function(){
    body.classList.remove('dark');
    invertColor();
})
function endTheGame(){
    let result = nonogram.fieldGame.every((row, rowIndex) => row.every((col, columnIndex) => col.value === shablon[rowIndex][columnIndex]));
    modalActive(result);
}

//modal window
function modalActive(result){
    if(result){
        let time = stopTimer()
        winMsg.time = time.secund + time.minut;
        const modalWindow = new Element('div', 'modal-window', '', body).createElement();
        const modalContent = new Element('div', 'modal-content', `Great! You have solved the nonogram in ${winMsg.time} seconds!`, modalWindow).createElement();
        const modalClose = new Element('button', 'modal-close', '', modalContent).createElement();
        const modalCloseItem = new Element('i', 'fa-solid fa-xmark', '', modalClose).createElement();
        addWinGameStoradge();
        audioOnOff(audioModal);

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
        startSecund = setInterval(
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
function stopTimer(){
    let time = {
        minut: minutCount,
        secund: secundCount
    }
    if(timerStatus){
        clearInterval(startSecund);
        timerStatus = false;
    }
    return time;
}
function chahgeTimer(time, timeBox){
    timeBox.textContent = time < 10 ? '0' + time : time;
}
function addWinGameStoradge(){
    const gameStoradge = JSON.parse(localStorage.getItem('Win_Game')) || [];
    if(gameStoradge.length > 4){
        gameStoradge.shift();
    }
    gameStoradge.push(winMsg);
    winMsg = {};
    localStorage.setItem('Win_Game', JSON.stringify(gameStoradge));
    showWinGame();
}

function showWinGame(){
    const gameWin = JSON.parse(localStorage.getItem('Win_Game')) || [];
    gameWin.sort((a,b) => a.time - b.time);
    winTable.innerHTML = '';
    gameWin.forEach(win => {
        let minuts = '';
        if((win.time/60) < 1){
            minuts = '00';
        } else{
            minuts = (win.time/60) < 10 ? '0' + (win.time/60) : (win.time/60);
        }
        let secunds = win.time%60 < 10 ? '0' + (win.time%60) : (win.time%60);
        new Element('p', 'win-item', `${win.nameGame} (${win.level}) in ${minuts}:${secunds} min`, winTable).createElement();
    });
}
document.addEventListener('DOMContentLoaded', showWinGame);
init();

function inverColorField(){
    if(document.body.classList.contains('dark')){
        ctx.fillStyle = 'black';
    }else{
        ctx.fillStyle = 'white';
    }
    ctx.fillRect(100, 100, canvas.width-200, canvas.height-100);
}

function invertColor(){
    if(document.body.classList.contains('dark')){
        document.querySelectorAll('*').forEach(element => {
            const color = window.getComputedStyle(element).color;
            const borderColor = window.getComputedStyle(element).border.split(' ').slice(2).join(' ');
            if (color === 'rgb(0, 0, 0)' || color === 'black') {
                element.style.color = 'white';
            }
            if(borderColor === 'rgb(128, 128, 128)'){
                element.style.border = '1px solid #e0e0e0';
            }
        });

        imgCanvasLight = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const imgCanvas = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(let i=0; i < imgCanvas.data.length; i+=4){
            imgCanvas.data[i] = 255 - imgCanvas.data[i];
            imgCanvas.data[i+1] = 255 - imgCanvas.data[i+1];
            imgCanvas.data[i+2] = 255 - imgCanvas.data[i+2];
        }
        ctx.putImageData(imgCanvas, 0, 0)
    } else {
        document.querySelectorAll('*').forEach(element => {
            element.style.color = '';
            element.style.border = '';
        });
        if(imgCanvasLight){
            ctx.putImageData(imgCanvasLight, 0, 0);
        }
    }
}

window.addEventListener('load', function() {
    activateButton();
});
function activateButton() {
    let saveGameStorage = JSON.parse(localStorage.getItem('Save_Game')) || [];
    if (Array.isArray(saveGameStorage) && saveGameStorage.length > 0) {
        continueGame.disabled = false;
    } else {
        continueGame.disabled = true;
    }
}
winTitle.addEventListener('click', function(){
    innerWin.classList.toggle('show');
})