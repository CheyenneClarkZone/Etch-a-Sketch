// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height} = canvas; // Destructuring. Take width property and put it into a variable called width. Same for height.


// create random x and y starting points on the canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //start the drawing
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();
// write a draw function
function draw({key}) { //object destructuring - taken properties and renamed them into proper variables. Gives us shorter variable names.
    console.log(key);

}

// write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
        console.log(e.key);
        console.log('HANDLING KEY'); 
    }
} 

// clear / shake function 

// listen for arrow keys
window.addEventListener('keydown', handleKey);
