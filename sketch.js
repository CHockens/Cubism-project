
/*******************************************************************
 *                        CHESIRE'S ROOM
 * Program Instructions: 
 * Click the door knob to open door and close door
 * Click the light bulb to turn off the light
 * Turn off the light to see Chesire's Room
 *                             
 *                           (₌♥ᆽ♥₌)
 * *****************************************************************/
//Class Card: dynamic global variables. 
let upWidth = 0;    //Updates width of card
let angle = 0;      //Updates oscillation speed for card


// Playing Cards - Class Card 
let CardsAboveEyes = [];
let CardsBelowEyes = [];
let spinningCards = [];
let Cards2 = [];

let teethLeft;
let teethRight;
let teethRightFix;

// Arrays for card objects. Each index updates. location (x, and y) and size (w and h) of card
// xywh[0] is x coordinate of card, xywh[1] is y coordinate of card, xywh[2] is width, and xywh[3] is height
let xywh = [0, 0, 0, 0]
let xywh1 = [0, 0, 0, 0]


//Boolean - Display Interaction
let lampValue = 0;   //Click lamp to change. Shows Cheshire's room if door is closed (doorValue = 1)
let doorValue = 0;     //Click door knobs. Opens and closes door.

let infinity = 0;

let bubbleY1 = 750, bubbleY2 = 658, bubbleY3 = 705;
let bubbleX4, bubbleY4 = 680 
let bubbleX5, bubbleY5 = 680

function preload()
{
  Closed_ON = loadImage('Closed_ON.png')    // lampValue = 0   doorValue = 0
  Open_ON = loadImage('Open_ON.png')        // lampValue = 0   doorValue = 1
  Open_LOW = loadImage('Open_LOW.png')      // lampValue = 1  
  Open_OFF = loadImage('Open_OFF.jpg')      // lampValue = 2   
  
}
 
function setup() {
  createCanvas(700, 900);

  //Mushrooms Objects
  pinkMush = new eclipse(173, 655, 35, 7, 170, 660, 60, 15)
  purpleMush = new eclipse(118, 713, 15, 5, 115, 714, 40, 10)
  redMush = new eclipse(575, 750, 20, 5, 570, 750, 55, 15) 
  tiniMush = new eclipse(464, 720, 7, 5, 465, 720, 26, 6)
  
  //Object eclipse
  teethLeft = new eclipse(233, 345, 250, 250, 243, 345, 270, 290)
  teethRight = new eclipse(323, 345, 250, 250, 313, 345, 270, 290)

  //Object Cards
  for(let i = 0; i < 10; i++){
    //the xywh array offsets the card parameters: x pos, y pos, width, and height
    CardsAboveEyes[i] = new Card(110 + xywh[0], 294 + xywh[1], 10 + xywh[2], 40 + xywh[3], 0.1)
    //spinningCards[i] = new Card(120 + xywh[0], 490 - xywh[1], 15 + xywh[2], 55 + xywh[3], 0.2)
    xywh[0] += 35 
    xywh[1] -= 4; 
    xywh[2] -= 1; 
    xywh[3] -= 5;
  }

  for(let i = 0; i < 10; i++){
    //the xywh array offsets the card parameters: x pos, y pos, width, and height
      CardsBelowEyes[i] = new Card(460 + (xywh1[0]), 414 + (xywh1[1]), 20 + (xywh1[2]), 60 + (xywh1[3]), 0.1)
      xywh1[0] -= 40; 
      xywh1[1] -= 6; 
      xywh1[2] -= 2.6; 
      xywh1[3] -= 5;
    }
}

function draw() {
  background(220);
  angleMode(DEGREES)
  drawGrid();

  //Color
  let lightPink = color(194,120,184)


  if(lampValue == 0 && doorValue == 0)
    {image(Closed_ON, 50, 40)
      Closed_ON.resize(width*.9, height*.9)}

  if(lampValue == 0 && doorValue == 1)
  {image(Open_ON, 50, 40)
    Open_ON.resize(width*.9, height*.9)}  

  if(lampValue == 1)      //Cheshires Room
  {image(Open_LOW, 50, 40)
    Open_LOW.resize(width*.9, height*.9)}

  if(lampValue == 2)      //Cheshires Room
  {image(Open_OFF, 50, 40)
    Open_OFF.resize(width*.9, height*.9)}

    //Chesire's Room
    if(lampValue == 2){
      
      // Cards - Object Array
      for(let i = 0; i < 10; i++){
        CardsAboveEyes[i].spin(lightPink,"black")
        CardsBelowEyes[i].spin(lightPink,"black")
        
        //spinningCards[i].build(lightPink, "black")
      }
    cheshireEyes();
    cheshireSmile();
    mushroomDots();


  
      //MushRooms
      push()
      pinkMush.mushroom(color(153, 0, 76), 5, 60, 330, 210, .9)
      purpleMush.mushroom(color(120, 23, 100), 15, 40, 30, 200, .85)
      //redMush.mushroom(color(100,0,0), 9, 90, 353, 190,.85)
      tiniMush.mushroom("purple", 10, 30, 30, 200, .85)

      //Bubbles
      if(bubbleY1 < 50){bubbleY1 = 741}
      bubbleY1--;
      if(bubbleY2 < 50){bubbleY2 = 658}
      bubbleY2--;
      if(bubbleY3 < 50){bubbleY3 = 705}
      bubbleY3--;
      bubbles(bubbleY1, bubbleY2, bubbleY3);

      if(bubbleY1 <= 500){
         bubbleX4 = 120 + 20*cos(infinity)
         bubbleY4--;
         if (bubbleY4 < 50){bubbleY4 = 680}
         ellipse(bubbleX4, bubbleY4, 9, 9)
      }
         
      if(bubbleY2 <= 500){
        bubbleX5 = 165 - 25*cos(infinity)
        bubbleY5--;
        if (bubbleY5 < 50){bubbleY5 = 680}
        ellipse(bubbleX5, bubbleY5, 5, 5)

      }

      //Diamonds
      infinity++;
      diamond = new eclipse(400, 100, 1, 70, 400, 100, 0 + abs(50*cos(infinity)), 1) //vertica, then horizontal
      diamond.diamond(color(120, 23, 80))
      smallDiamond = new eclipse(435, 125, 1, 40, 435, 125, 0 + abs(20*cos(infinity)), 1)
      smallDiamond.diamond(color(120, 23, 80))
    
    }


  //Text Display: Lamp is OFF(1) or ON(0)
  textSize(15)
  fill(130,10,100)
  text('lampValue: ',300, 889);
  text(lampValue,380, 889);

  //Text Display: Door is OPEN(0) or CLOSED(1)
  textSize(15)
  fill(130,10,100)
  text('doorValue: ',400, 889);
  text(doorValue,470, 889);
}

//Functions

function room()
{
  if (lampValue == 2){   //Dark Room
  fill(0,0,0)
  stroke(64,64,122)}
  else                  //Lit Room
   {noFill()    
  }
  quad(95,210,480,220,475,730,88,723)
  beginShape();
  vertex(480,220),vertex(577,51),vertex(679,51),vertex(677,858),vertex(475,730) //wall 2
  endShape();
  beginShape();
  vertex(95,210),vertex(49,112),vertex(50,50),vertex(577,51),vertex(480,220) //wall3
  endShape();
  beginShape();
  vertex(88,723),vertex(475,730),vertex(682,858),vertex(50,858),vertex(50,750),vertex(88,723) //wall4
  endShape();
  quad(49,112,95,210,88,723,50,750)

}

function cheshireEyes()
{
  push();
    stroke(132,122,122)
    fill("turquoise")
    beginShape(); //Eye R
    vertex(355,331), vertex(394,336), vertex(409,350), 
    vertex(402,362),vertex(384,378),vertex(354,389),vertex(325,385),
    vertex(308,373),vertex(313,359),vertex(330,344),
    vertex(355,331)
    endShape();
    beginShape(); //Eye L
    vertex(192,325),vertex(216,340),vertex(227,352),
    vertex(234,370),vertex(219,384),vertex(191,385),
    vertex(163,373),vertex(144,342),vertex(165,332),
    vertex(192,325)
    endShape();
  
    fill(0,0,0)
    quad(394,336,425,345,402,362,409,350) //Eye Details R
    quad(325,385,308,373,313,359,297,379)
    quad(227,352,247,375,219,384,234,370) //Eye Details L
    quad(165,332,132,338,163,373,144,342)
    
    noStroke();
    ellipse(355,360,10,56)
    ellipse(193,356,10,56)
    pop();


}

function cheshireSmile(){
  push()
  stroke("turquoise")
  noFill()
  arc(233, 345, 250, 250, 69, 180)    //Top Left Lip
  arc(323, 345, 250, 250, 0, 111)     //Top Right Lip
  arc(243, 345, 270, 290, 75, 190 )   //Bottom Left Lip
  arc(313, 345, 270, 290, 355, 104 )  //Bottom Right

  teethLeft.build(77, 180, 10, 0)   //Left Teeth Lines (point toward L eye)
  teethLeft.build(68, 180, 10, 1)   //Left Teeth.Lines (point toward R eye)
  teethRight.build(30, 110, 10, 0)  //Right Teeth Lines (point toward R eye)
  teethRight.build(30, 110, 10, 2)  //Right Teeth Lines (point toward L eye)

  //Nose
  arc(258,460,40, 40, 260, 0)
  arc(298,460,40,40, 180,280)
  point(210,443); point(225, 439); point(220,447) //Left Whiskers
  point(325,441); point(340, 445); point(330,449) //Right Whiskers
  }

function cheshireTail(){
  stroke("turquoise")
  noFill()
  ellipse(570,770,200)
}

function lamp()
{
  function lampShape()
  {
    beginShape()
    vertex(390,630),vertex(429,630),vertex(420,655),vertex(438,681),vertex(380,677)
    vertex(401,656),vertex(390,630)
    endShape()
  }

  if (lampValue == 1){
    stroke(64,64,122)
    lampShape();
    quad(410,680,415,680,410,830,417,830)
  }
  else{
    stroke(0,0,0)
    fill(84,4,74)
    quad(410,680,415,680,410,830,417,830)
    fill(194,120,184)
    lampShape();
    quad(390,630,420,630,) 
  }
}

function mushroomDots(){
  push()
  noStroke()
  fill(color(153, 0, 76))
  //Pink Mushroom Dots
  ellipse(159, 640, 15, 9); 
  ellipse(185, 645, 8, 8); 
  ellipse(174, 635, 6, 3)
  //Purple Mushroom Dots
  fill(color(120, 23, 100))
  ellipse(110, 700, 7, 7); 
  ellipse(119, 705, 4, 4)
  //Small Purple Mushroom dots
  fill("purple")
  ellipse(464,706, 4, 3)
  ellipse(468,713, 5, 5)
  pop()
}

function drawGrid() {
    stroke(200);
    strokeWeight(1)
    fill(30,80,200);
    for (let x = -width; x < width; x += 50) {
      line(x, -height, x, height);
      text(x, x + 1, 12);
    }
    for (let y = -height; y < height; y += 50) {
      line(-width, y, width, y);
      fill(75, 30, 200);
      text(y, 1, y + 12);
    }
  
    textSize(15)
    fill(130,10,100)
    text("(" + mouseX + ", " + mouseY + ")", 100, 889);
}

function mouseClicked() {


  if ((mouseX >= 414 && mouseX <= 440) && (mouseY >= 610 && mouseY <= 650)){
  lampValue++;
  if (lampValue == 3) {   // Cheshire's Room
    lampValue = 0;
  }
}
if ((mouseX >= 143 && mouseX <= 221) && (mouseY >= 556 && mouseY <= 715)) 
{
  doorValue++;
  if (doorValue == 2) {
    doorValue = 0;
  }
  }

  if(doorValue == 1){ //Once you open the door, you've let cat in
    catInside = 1;
  }
}

function bubbles(y1, y2, y3){
  ellipse(89, y1, 5, 5)
  ellipse(149, y2, 7, 7)
  ellipse(184, y3, 5, 5)
}


//Classes

class Card{
  constructor(x, y, width, height, spinSpeed){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spinSpeed = spinSpeed;
  }

    build(colorCard, colorDiamond){
      let yMid = this.y + this.height/2;
      fill(colorCard)
      rect(this.x, this.y, this.width, this.height)
      rect(this.x, this.y, this.width*-1, this.height)
      //noStroke()
      fill(colorDiamond)
      quad(this.x, this.y, this.x + this.width, yMid, this.x, this.y + this.height, this.x - this.width, yMid)
    }

  spin(colorCard, colorDiamond){
    let xSpin = this.x;
    let ySpin = this.y;
    let widthSpin = this.width;
    let h = this.height;
    let speed = this.spinSpeed;

    let upWidth  = 0 + widthSpin*sin(angle);
    angle += speed;
    let yMid = ySpin + h/2;

    noStroke()
    fill(colorCard)
    rect(xSpin, ySpin, upWidth, h)
    rect(xSpin, ySpin, upWidth*-1, h)
    fill(colorDiamond)
    quad(xSpin, ySpin, xSpin + upWidth, yMid, xSpin, ySpin + h, xSpin - upWidth, yMid)
  }

}



class eclipse{

  //This class draws two ellipses and connects thier (x,y) points.
  // You can specify how many lines to draw (lineSpace)
  // You can specify the regions to connect  (angleEnd and angleStart)
  constructor(x, y, w, h, x1, y1, w1, h1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.x1 = x1;
        this.y1 = y1;
        this.w1 = w1;
        this.h1 = h1;
  }
  build(angleStart,angleEnd,lineSpace, mode){
    // mode 0 has no offset. Ex: (x,y) is the point at 5 degrees. (x1,y1) is the point at 5 degrees.
    if(mode == 0){
      for (let angle = angleStart; angle < angleEnd; angle += lineSpace) {

        let x = this.x + (this.w/ 2) * cos(angle);
        let y = this.y + (this.h/ 2) * sin(angle);
        let x1 = this.x1 + (this.w1/2) * cos(angle);
        let x2 = this.y1 + (this.h1/2) * sin(angle);
        
        line(x,y, x1,x2)
        }
    }
    // mode 1 offsets the points of the second ellipse by "lineSpace" degree.
    // Ex: If angle = 5 annd lineSpace = 1 
    // then (x,y) is the point at 5 degrees. (x1,y1) is the point at 6 degrees.
    if (mode == 1){
      for (let angle = angleStart; angle < angleEnd; angle += lineSpace) {

        let x = this.x + (this.w/ 2) * cos(angle);
        let y = this.y + (this.h/ 2) * sin(angle);
        let x1 = this.x1 + (this.w1/2) * cos(angle + lineSpace);
        let x2 = this.y1 + (this.h1/2) * sin(angle + lineSpace);
        
        line(x,y, x1,x2)
        }
    }
    // mode 1 offsets the points of the first ellipse by "lineSpace" degree. .
    if(mode == 2){
      for (let angle = angleStart; angle < angleEnd; angle += lineSpace) {

        let x = this.x + (this.w/ 2) * cos(angle+ lineSpace);
        let y = this.y + (this.h/ 2) * sin(angle + lineSpace);
        let x1 = this.x1 + (this.w1/2) * cos(angle);
        let x2 = this.y1 + (this.h1/2) * sin(angle);
        
        line(x,y, x1,x2)
        }
    }

  }

  mushroom(color, lineSpace, headHeight, Lstart, Rend, slitHeight){
    push();
    stroke(color)
    let rightStem;
    let leftStem; 
    this.build(0, 360, lineSpace, 0)
    arc(this.x1, this.y1, this.w1, headHeight, 180, 0) //Mushroom Head

    line(this.x, this.y + this.h, this.x, this.y + headHeight)
    line(this.x + this.w/7, this.y + this.h, this.x, this.y + headHeight/2)
    line(this.x, this.y + headHeight/2, this.x + this.w/7, this.y + headHeight*1.1)
    //line(this.x, this.y + headHeight, this.x + this.w/8, this.y + headHeight*1.1)
    push()
    pop()

    let stemSize = this.w
    let yPos = this.y
    for(let i = 0; i < 30; i ++){
      if (yPos >= this.y && yPos < (this.y + headHeight*.15) && stemSize > 0){
        ellipse(this.x, yPos, stemSize, this.h)
        yPos += 2;
        stemSize -= 8
      }

    }

  }

  diamond(color){
    stroke(color)
    this.build(0, 360,  2 + abs(3*cos(infinity)), 0)

  }
}