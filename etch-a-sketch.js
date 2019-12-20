// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height} = canvas; // Destructuring. Take width property and put it into a variable called width. Same for height.


// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);

ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); //start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();
// write a draw function

// write a handler for the keys

// clear / shake function 

// listen for arrow keys