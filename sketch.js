// todo: add more symbols, numbers and letters

var symbols = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  var yStart = 0;
  var gStart = 0;
  var r = 0;
  var g = 200;
  var b = 0;

  for (var i = 0; i < random(15, 40); i++) {
    if (yStart == 0) {
      symbols.push(
        new Symbol(10, yStart, 255, 255, 255)
      );      
    } else {
      symbols.push(
        new Symbol(10, yStart, r, g, b)
      );
      g -= 8;
    }
    yStart -= 18;
  }
}

function draw() {
  background(0);
  for (var i = 0; i < symbols.length; i++) {

    var symbol = symbols[i];

    fill(symbol.r, symbol.g, symbol.b);
    textSize(24);

    if (!symbol.convert && symbol.convertInterval == 400) {
      symbol.character = String.fromCharCode(
        0x30A0 + Math.random() * (0x30FF-0x30A0+1)
      );
      symbol.convertInterval = Math.round(random(0, 200));
    }

    text(symbol.character, symbol.x, symbol.y);
    symbol.scroll();
    symbol.convertInterval++;

  }
}

function Symbol(x, y, r, g, b) {
  this.character = String.fromCharCode(
    0x30A0 + Math.random() * (0x30FF-0x30A0+1)
  );
  this.x = x;
  this.y = y;

  this.r = r;
  this.g = g;
  this.b = b;

  // if this is the first number, always have it convert.
  this.convert = y.start ? Math.round(random(0, 5)) : 0; 
  // set the pace at which it converts
  this.convertInterval = Math.round(random(0, 400));

  this.scroll = function() {
    this.y += 1.8;
  }
}

// function mousePressed() {
//   chars.push(new Char(mouseX, mouseY));
// }

function mouseDragged() {
  Symbol.push(new Symbol(mouseX, mouseY));
}