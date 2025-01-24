const body = document.querySelector('body');
const size = 60;
const fontSize = 22;
let shablon = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
];
let color = false;


class Element{
    constructor (tag, className, text, parent){
        this.tag = tag;
        this.className = className;
        this.text = text;
        this.parent = parent;
    }
    createElement(){
        const element = document.createElement(this.tag);
        element.classList.add(this.className);
        element.textContent = this.text;
        this.parent.insertAdjacentElement("afterbegin", element);
        return element
    }
}

const containerElement = new Element('div', 'container', '', body);
const container = containerElement.createElement();
const canvasElement = new Element('canvas', 'canvas', '', container);
const canvas = canvasElement.createElement();
let ctx = canvas.getContext('2d');
const widthCanvas = canvas.width = shablon[0].length * size + 200;
const heightCanvas = canvas.height = shablon.length *size + 200;


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
        console.log(cluesX)

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
        console.log(cluesY)
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
        console.log(`Top: ${rowIndex}, Left: ${columnIndex}`);

        if(rowIndex >=0 && rowIndex < this.row && columnIndex >=0 && columnIndex < this.column){
            this.fieldGame[rowIndex][columnIndex] = this.fieldGame[rowIndex][columnIndex] === 0 ? 1 : 0;
            ctx.fillStyle = this.fieldGame[rowIndex][columnIndex] ? 'black' : 'white';
            ctx.fillRect((100 + rowIndex*this.size+1), (100 + columnIndex*this.size+1), this.size-2, this.size-2);
            this.updateBoard(ctx);
        }
        return this.fieldGame;
    }
}
const nonogram = new Play(shablon[0].length, shablon.length, size)
console.log(shablon.length)
nonogram.renderField(ctx);
nonogram.updateBoard(ctx);
nonogram.renderClues(ctx);

canvas.addEventListener('mousedown', function(event){
    color = !color;
    nonogram.positionCell(event);
});

function endTheGame(){
    let result = nonogram.fieldGame.every((row, rowIndex) => row.every((col, columnIndex) => col === shablon[rowIndex][columnIndex]))
    console.log(result)
}
endTheGame()