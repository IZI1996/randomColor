// class ColorGuessingGame {
//     constructor() {
//         this.numSquares = 6;
//         this.colors = [];
//         this.pickedColor = null;
//         this.squares = document.querySelectorAll(".square");
//         this.colorDisplay = document.querySelector("#color-display");
//         this.messageDisplay = document.querySelector("#message");
//         this.h1 = document.querySelector("h1");
//         this.resetButton = document.querySelector("#reset");
//         this.modeButtons = document.querySelectorAll(".mode");

//         this.init();
//     }

//     init = () => {
//         this.setupSquares();
//         this.setupMode();
//         this.reset();
//     }

//     reset = () => {
//         this.colors = this.genRandomColors(this.numSquares);
//         this.pickedColor = this.chooseColor();
//         this.colorDisplay.textContent = this.pickedColor;
//         this.h1.style.backgroundColor = "#2C8E99";
//         this.resetButton.textContent = "New Colors";
//         this.messageDisplay.textContent = "";
//         this.squares.forEach((square, index) => {
//             if (this.colors[index]) {
//                 square.style.display = "block";
//                 square.style.backgroundColor = this.colors[index];
//             } else {
//                 square.style.display = "none";
//             }
//         });
//     }

//     setupSquares = () => {
//         this.squares.forEach((square, index) => {
//             square.addEventListener("click", () => {
//                 const clickedColor = square.style.backgroundColor;
//                 if (clickedColor === this.pickedColor) {
//                     this.messageDisplay.textContent = "Correct";
//                     this.resetButton.textContent = "Play Again";
//                     this.changeColors(this.pickedColor);
//                 } else {
//                     square.style.backgroundColor = "#232323";
//                     this.messageDisplay.textContent = "Try again";
//                 }
//             });
//         });
//     }

//     setupMode = () => {
//         this.modeButtons.forEach((button, index) => {
//             button.addEventListener("click", () => {
//                 this.modeButtons.forEach((btn, idx) => {
//                     btn.classList.remove("selected");
//                 });
//                 button.classList.add("selected");
//                 this.numSquares = button.textContent === "Easy" ? 3 : 6;
//                 this.reset();
//             });
//         });
//     }

//     changeColors = (color) => {
//         this.squares.forEach((square) => {
//             square.style.backgroundColor = color;
//             this.h1.style.backgroundColor = color;
//         });
//     }

//     chooseColor = () => {
//         const random = Math.floor(Math.random() * this.colors.length);
//         return this.colors[random];
//     }

//     genRandomColors = (num) => {
//         const arr = Array.from({ length: num }, () => this.makeColor());
//         return arr;
//     }

//     makeColor = () => {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         return `rgb(${r}, ${g}, ${b})`;
//     }
// }

// const game = new ColorGuessingGame();


let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#color-display");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
const easyButton = document.querySelector(".mode");

init();

function init() {
  colorDisplay.textContent = pickedColor;
  setupSquares();
  setupMode();
  reset();
}

resetButton.addEventListener("click", () => {
  reset();
});

function setupSquares() {
  squares.forEach((square, index) => {
    square.style.backgroundColor = colors[index];
    square.addEventListener("click", () => {
      const clickedColor = square.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColors(pickedColor);
      } else {
        square.style.backgroundColor = "#232323";
        messageDisplay.textContent = "try again";
      }
    });
  });
}

function setupMode() {
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modeButtons.forEach((btn) => {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
      numSquares = button.textContent === "Easy" ? 3 : 6;
      reset();
    });
  });
}

function reset() {
  colors = genRandomColors(numSquares);
  pickedColor = chooseColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#2C8E99";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  squares.forEach((square, index) => {
    if (colors[index]) {
      square.style.display = "block";
      square.style.backgroundColor = colors[index];
    } else {
      square.style.display = "none";
    }
  });
}

function changeColors(color) {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
    h1.style.backgroundColor = color;
  });
}

function chooseColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
// kay3amar wahd table b diff color li creana flwel lhajm dyal 
// arr 3la hsab parm num li kat3ta mn number box 
function genRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(makeColor());
  }
  return arr;
}

// funct creat color
function makeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
