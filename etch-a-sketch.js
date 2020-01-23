// Select the elements on the page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
const MOVE_AMOUNT = 20; /* True constant (value will never change) use uppercase and underscores */
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas; // Destructuring. Take width property and put it into a variable called width. Same for height.

ctx.linejoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;
// don't touch anything above here...
// create random x and y starting points on the canvas
let line1x = Math.floor(Math.random() * width);
let line1y = Math.floor(Math.random() * height);

let line1hue = 0;
ctx.strokeStyle = `hsl(${line1hue}, 100%, 50%)`;
ctx.beginPath(); //start the drawing
ctx.lineTo(line1x, line1y);
ctx.moveTo(line1x, line1y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  //object destructuring - taken properties and renamed them into proper variables. Gives us shorter variable names.
  // increment the hue
  line1hue += 1;
  ctx.strokeStyle = `hsl(${line1hue}, 100%, 50%)`;
  console.log(key);

  //Start the path
  ctx.beginPath();
  ctx.moveTo(line1x, line1y);

  //move our x and y values depending on what the user did
  switch (key) {
    case "ArrowUp":
      line1y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      line1x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      line1y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      line1x -= MOVE_AMOUNT;
      break;
    // case "a":
    //   x -= MOVE_AMOUNT;
    default:
      break;
  }

  ctx.lineTo(line1x, line1y);
  ctx.stroke();
}
//.............................................................................................................................
// create random x and y starting points on the canvas
let line2x = Math.floor(Math.random() * width);
let line2y = Math.floor(Math.random() * height);

let line2hue = 50;
function createStartingPoint(x, y, hue) {
  ctx.strokeStyle = `hsl(${line2hue}, 100%, 50%)`;
  ctx.beginPath(); //start the drawing
  ctx.moveTo(line2x, line2y);
  ctx.lineTo(line2x, line2y);
  ctx.stroke();
}
createStartingPoint(line1x, line1y, line1hue)
createStartingPoint(line2x, line2y, line2hue)

// write a draw function
function drawLineTwo({ key }) {
  //object destructuring - taken properties and renamed them into proper variables. Gives us shorter variable names.
  // increment the hue
  line2hue += 1;
  ctx.strokeStyle = `hsl(${line2hue}, 100%, 50%)`;

  //Start the path
  ctx.beginPath();
  ctx.moveTo(line2x, line2y);

  //move our x and y values depending on what the user did
   switch (key) {
    case "w":
      line2y -= MOVE_AMOUNT;
      break;
    case "d":
      line2x += MOVE_AMOUNT;
      break;
    case "s":
      line2y += MOVE_AMOUNT;
      break;
    case "a":
      line2x -= MOVE_AMOUNT;
      break;
    // case "a":
    //   x -= MOVE_AMOUNT;
    default:
      break;
  }

  ctx.lineTo(line2x, line2y);
  ctx.stroke();
} //.............................................................................................................................
// write a handler for the keys
function handleKey(e) {
  if (e.key.includes("Arrow"))  {
    e.preventDefault();
    draw({ key: e.key });
  }


  if (["a", "w", "d", "s"].includes(e.key)) {
    drawLineTwo({ key: e.key });
  }

  if (e.keyCode == 32) {
    //remove drawings when pressed
    //repeat every time key is pressed
    clearCanvas();
  }
}

// clear / shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height); //clearRect clears part or all of it
  canvas.addEventListener(
    "animationend",
    function() {
      console.log("Done the shake!");
      canvas.classList.remove("shake");
    },
    { once: true } //If you set once to be true, that addEventListener will unbind itself
  );
}

// listen for arrow keys
window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas);

// ADDING A SECOND LINE
// Requirements:
// Can control one dot with  up down left right
// The second line is controlled with w a s d
// When you click shake both lines are cleared
// The two lines are different colours

// Steps:
// 1) Canvas setup: Create second starting line on canvas *
//  - Get new new random x y values for the new line's position *
//  - Create different colour for the new line *
//  - Draw the first line *
//
// 2) Event listener for key codes 
//  - Check the correct key has been pressed before running draw
//
// 3) Draw a line on the canvas
// - Reuse draw()
// - Update switch statement for the new letters *
// - Update new colour
//
