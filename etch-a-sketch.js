// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20; /* True constant (value will never change) use uppercase and underscores */  
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height} = canvas; // Destructuring. Take width property and put it into a variable called width. Same for height.


// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //start the drawing
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();
// write a draw function
function draw({key}) { //object destructuring - taken properties and renamed them into proper variables. Gives us shorter variable names.
    // increment the hue
    hue -= 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);

    //Start the path
    ctx.beginPath();
    ctx.moveTo(x, y);

    //move our x and y values depending on what the user did
    switch (key) {
        case 'ArrowUp':
        y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
        x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
        y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
        x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}


// write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
    }
} 

// clear / shake function 

// listen for arrow keys
window.addEventListener('keydown', handleKey);
