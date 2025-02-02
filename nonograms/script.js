const body = document.querySelector('body');
const sizeCanvas = {
    fontSize:{
        easy: 22,
        medium: 20,
        hard: 18
    },
    widthCanvas:{
        easy: 500,
        medium: 550,
        hard: 600
    },
    heightCanvas:{
        easy: 500,
        medium: 550,
        hard: 600
    }
}

let level = 'easy';
let fontSize = 22; 
let widthCanvas = 500; 
let heightCanvas = 500;
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
let shablonBeforeSolution = [];
let shablonChoose ;
let row;
let column
let color = false;
let timerStatus =false;
let startSecund;
let secundCount = 0;
let minutCount = 0;
let size;
let winMsg = {};
let solution = false;


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
        console.log(this.fieldGame)
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
                ctx.lineWidth = 5;
            } else{
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
                ctx.lineWidth = 5;
            } else{
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
        ctx.fillStyle = 'black';
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
            ctx.fillText(text, 90 - textWidth, 88 + fontSize +size/2 + i*size);
            arrTextWidth.push(textWidth);
        }
        
        for(let i=0; i < cluesX.length; i++){
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo( 90 - Math.max(...arrTextWidth), 100 + (i+1) * size);
            ctx.lineTo(100, 100 + (i+1) * size);
            ctx.closePath();
            ctx.stroke();
        }


        let arrTextColumn = [];
        for(let i = 0; i < shablon[0].length; i++){
            let cluesColumn = [];
            // console.log(cluesColumn)
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
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo( 100 + i*size + size, 100);
            ctx.lineTo(100 + i*size+size, 98-Math.max(...arrTextColumn)*fontSize);
            ctx.closePath();
            ctx.stroke();
        }
    }
    positionCell(event){
        let rowIndex = Math.floor((event.offsetX - 100)/size);
        let columnIndex =Math.floor((event.offsetY - 100)/size);
        // console.log(`x: ${rowIndex}, y: ${columnIndex}`);
        return {rowIndex, columnIndex}
    }
    colorCell(rowIndex, columnIndex, ctx){
        if(rowIndex >=0 && rowIndex < row && columnIndex >=0 && columnIndex < column){
            this.fieldGame[columnIndex][rowIndex].value = this.fieldGame[columnIndex][rowIndex].value === 0 ? 1 : 0;
            ctx.fillStyle = this.fieldGame[columnIndex][rowIndex].value ? 'black' : 'white';
            ctx.fillRect((100 + rowIndex*size+1), (100 + columnIndex*size+1), size-2, size-2);
            this.updateBoard(ctx);
        }
        return this.fieldGame;
    }
    markCell(rowIndex, columnIndex, ctx){
        if(rowIndex >=0 && rowIndex < row && columnIndex >=0 && columnIndex < column){
            if(this.fieldGame[columnIndex][rowIndex].mark){
                ctx.fillStyle = 'white';
                ctx.fillRect((100 + rowIndex*size+1), (100 + columnIndex*size+1), size-2, size-2);
                this.fieldGame[columnIndex][rowIndex].mark = false;
            }else if(this.fieldGame[columnIndex][rowIndex].value === 0 && this.fieldGame[columnIndex][rowIndex].mark == false){
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'black';
                ctx.beginPath();
                ctx.moveTo( 100 + rowIndex * size, 100 + columnIndex * size);
                ctx.lineTo(100 + (rowIndex + 1) * size, 100 + (columnIndex + 1) * size);
                ctx.moveTo(100 + (rowIndex + 1) * size, 100 + columnIndex * size);
                ctx.lineTo(100 + rowIndex * size, 100 + (columnIndex + 1) * size);
                ctx.closePath();
                ctx.stroke();
                this.fieldGame[columnIndex][rowIndex].mark = true;
                this.updateBoard(ctx);
            }
            this.updateBoard(ctx);
        }
        return this.fieldGame;
    }
    showSolution(ctx) {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (shablon[i][j] === 1) {
                    this.colorCell(j, i, ctx); // Передаём (rowIndex, columnIndex)
                }
            }
        }
    }
}


// create element on page
const container = new Element('div', 'container', '', body).createElement();
const header = new Element('header', 'header', '', container).createElement();
const chooseGame = new Element('div', 'choose-game', '', container).createElement();
const winTable = new Element('div', 'win-table', '', container).createElement();
const timer = new Element('p', 'timer', '', header).createElement();
const timerMinuts = new Element('span', 'minuts', 'XX', timer).createElement();
const timerSlash = new Element('span', '', ':', timer).createElement();
const timerSecunds = new Element('span', 'secunds', 'XX', timer).createElement();
const btnReset = new Element('button', 'btn-reset', 'Reset game', header).createElement();
const btnRandomGame = new Element('button', 'btn-random', 'Random game', header).createElement();
const btnSolution = new Element('button', 'solution', 'Solution', container).createElement();


const canvas = new Element('canvas', 'canvas', '', container).createElement();

let ctx = canvas.getContext('2d');
canvas.width = widthCanvas;
canvas.height = heightCanvas;

let nonogram = new Play(size);


const navigation = new Element('nav', 'nav', '', header).createElement();

function createLevelBtn (levelName, text, shablon){
    const btnLevel = new Element('button', `btn-${levelName}`, text, navigation).createElement();
    btnLevel.addEventListener('click', function(){
        document.querySelector('.choose-game').style.display = 'block';
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
        ctx.clearRect(0, 0, widthCanvas, heightCanvas);
        shablon = shablonChoose[Object.keys(shablonChoose)[i]];
        nonogram.fieldGame = nonogram.createPlayField();
        init();
        nameGame = Object.keys(shablonChoose)[i];
        secundCount = 0;
        minutCount = 0;
        // console.log('shablon '+ shablon)
        // console.log('fieldGame ' +nonogram.fieldGame.value);
        winMsg = {nameGame: nameGame.toUpperCase(), time:'', level: level, solution:false};
        console.log('choose' + winMsg)
        btnSolution.style.display = 'block';

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
        if(solution) {
            ctx.clearRect(0, 0, widthCanvas, heightCanvas);
            init();
            console.log(shablonBeforeSolution)
            nonogram.fieldGame = shablonBeforeSolution;
            solution = false;
            console.log(nonogram.fieldGame)

            nonogram.fieldGame.forEach((row, i) => {
                row.forEach((cell, j) => {
                    if (cell.value === 1) {
                        nonogram.colorCell(i, j, ctx); // Черная ячейка
                    }
                });
            });
        } else {
            timerStart();
        }
    }
    const { rowIndex, columnIndex } = nonogram.positionCell(event);
    if(event.button === 0){
        color = !color;
        nonogram.colorCell(rowIndex, columnIndex, ctx);
        new Audio('sounds/sound-color.mp3').play();
        endTheGame();
    }
    if(event.button === 2){
        nonogram.markCell(rowIndex, columnIndex, ctx);
        new Audio('sounds/sound-mark.mp3').play();
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
    nonogram.fieldGame = nonogram.createPlayField();
    console.log(nonogram.fieldGame)
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    init();
});
btnRandomGame.addEventListener('click', function(){
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
    nonogram.fieldGame = nonogram.createPlayField();
    console.log(nonogram.fieldGame)
    init();
});
btnSolution.addEventListener('click', function(){
    shablonBeforeSolution = nonogram.fieldGame;
    nonogram.fieldGame = nonogram.createPlayField();
    console.log(nonogram.fieldGame)
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    nonogram.showSolution(ctx);
    nonogram.fieldGame = nonogram.createPlayField();
    solution = true;
    winMsg.solution = true;
    init();
    console.log(shablonBeforeSolution)
})

// function restoreMarkedCells() {
//     nonogram.fieldGame = shablonBeforeSolution;
    
// }
// end game if all cell == shablon
function endTheGame(){
    let result = nonogram.fieldGame.every((row, rowIndex) => row.every((col, columnIndex) => col.value === shablon[rowIndex][columnIndex]));
    modalActive(result);
}

//modal window
function modalActive(result){
    if(result){
            winMsg.time = stopTimer();
            const modalWindow = new Element('div', 'modal-window', '', body).createElement();
            const modalContent = new Element('div', 'modal-content', `Great! You have solved the nonogram in ${winMsg.time} seconds!`, modalWindow).createElement();
            const modalClose = new Element('button', 'modal-close', '', modalContent).createElement();
            const modalCloseItem = new Element('i', 'fa-solid fa-xmark', '', modalClose).createElement();
            console.log(winMsg)
            // winGame.push(winMsg);
            addWinGameStoradge();
            new Audio('sounds/sound-modal.mp3').play();

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
    if(timerStatus){
        clearInterval(startSecund);
        timerStatus = false;
    }
    return secundCount + minutCount*60
}
function chahgeTimer(time, timeBox){
    timeBox.textContent = time < 10 ? '0' + time : time;
}
function addWinGameStoradge(){
    if(winMsg.solution == true)return;
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
    // console.log(gameWin)
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