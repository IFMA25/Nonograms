const body = document.querySelector('body');
const size = 60;
let shablon = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
];


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
const widthCanvas = canvas.width = shablon[0].length * size + 100;
const heightCanvas = canvas.height = shablon.length *size + 100;


class Play{
    constructor(row, column, size){
        this.row = row;
        this.column = column;
        this.size = size;
        this.fieldGame = this.createPlayField();
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
        for(let i = 0; i <= this.row; i++){
            if(i == 0 || i == this.row){
                ctx.lineWidth = 5;
            } else{
                ctx.lineWidth = 1;
            }
            ctx.beginPath();
            ctx.moveTo(50, i*this.size+50);
            ctx.lineTo(this.column * this.size + 50, i*this.size + 50);
            ctx.closePath();
            ctx.stroke();
        }
        for(let j = 0; j <= this.column; j++){
            if(j == 0 || j == this.column){
                ctx.lineWidth = 5;
            } else{
                ctx.lineWidth = 1;
            }
            ctx.beginPath();
            ctx.moveTo(j*this.size + 50, 50);
            ctx.lineTo(j*this.size + 50, this.row*this.size + 50);
            ctx.closePath();
            ctx.stroke();
        }
    }
    render
}
const nonogram = new Play(shablon[0].length, shablon.length, size)
nonogram.renderField(ctx)
