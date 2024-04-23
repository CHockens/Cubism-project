
/*******************************************************************
 *                        CHESIRE'S ROOM
 * Program Instructions: 
 * Click the door knob to open and close the door
 * Click the lamp shade to turn off the light \
 * To see Chesire's Room, close the door AND turn off the lights
 *                              
 *                           (₌♥ᆽ♥₌)
 * *****************************************************************/
//Class Card: Non-static global variables. 
let upWidth = 0;    //Updates width of card
let angle = 0;      //Updates oscillation speed for card

//Mushrooms
let bigMush;
let miniMush;
let cornerMush;
let tiniMush;
//Card Object Instances
let CardsAboveEyes = [];
let CardsBelowEyes = [];
let spinningCards = [];
let Cards2 = [];

let teethLeft;
let teethRight;
let teethRightFix;

let aliceClock;
let miniClock;

//Card Object Arrays: "changeable" variables that updates the location (xy) and size (wh) of card
// xywh[0] is x coordinate of card, xywh[1] is y coordinate of card, xywh[2] is width, and xywh[3] is height
let xywh = [0, 0, 0, 0]
let xywh1 = [0, 0, 0, 0]


//Boolean - Display Interaction
let colorValue = 1;   //Click lamp to change. Shows Cheshire's room if door is closed (imgValue = 1)
let imgValue = 1;     //Click door knobs. Opens and closes door.


function preload()
{
  doorOpen = loadImage('doorOpen.jpg')
  doorClosed = loadImage('doorClosed.jpg')
}
    // ellipse(570, 350, 35, 7)
 


function setup() {
  createCanvas(700, 900);

  //Mushrooms
  pinkMush = new eclipse(173, 655, 35, 7, 170, 660, 60, 15)
  purpleMush = new eclipse(118, 713, 15, 5, 115, 714, 40, 10)
  redMush = new eclipse(575, 750, 20, 5, 570, 750, 55, 15) 
  tiniMush = new eclipse(464, 720, 7, 5, 465, 720, 26, 6)

  //Object Clocks
  aliceClock = new eclipse(275, 154, 75, 80, 275, 154, 58, 70)
  
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

  //Importing Images
  if(imgValue == 0)
  {image(doorOpen,50,50)
  doorOpen.resize(width*.9, height*.9)}
  if(imgValue == 1){
  image(doorClosed,50,50)
  doorClosed.resize(width*.9, height*.9)}

  //Functions
    //Lit Room
    room();
    lamp();

  
    //Chesire's Room
    if(colorValue == 1 && imgValue == 1){
      
      // Cards - Object Array
      for(let i = 0; i < 10; i++){
        CardsAboveEyes[i].spin(lightPink,"black")
        CardsBelowEyes[i].spin(lightPink,"black")
        
        //spinningCards[i].build(lightPink, "black")
      }
    cheshireEyes();
    cheshireSmile();
    cheshireNose();

    //color(65,65,65) - grey
    //color(100,0,0) - red
    aliceClock.clock(color(100,0,0), 2)
    

    //MushRooms
    // ellipse(570, 350, 35, 7)
    // ellipse(570, 350, 60, 30)
      push()
      pinkMush.mushroom(color(153, 0, 76), 5, 60, 330, 210, .9)
      purpleMush.mushroom(color(120, 23, 100), 15, 40, 30, 200, .85)
      redMush.mushroom(color(100,0,0), 9, 90, 353, 190,.85)
      tiniMush.mushroom("purple", 10, 40, 30, 200, .85)
      pop()
      push(); fill("black"); ellipse(118, 713, 15, 5); pop(); //colors inside of little mushroom
    
    }


  //Text Display: Lamp is OFF(1) or ON(0)
  textSize(15)
  fill(130,10,100)
  text('colorValue: ',300, 889);
  text(colorValue,380, 889);

  //Text Display: Door is OPEN(0) or CLOSED(1)
  textSize(15)
  fill(130,10,100)
  text('imgValue: ',400, 889);
  text(imgValue,470, 889);
}

//Functions

function room()
{
  if (colorValue == 1){   //Dark Room
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
  }

function cheshireNose(){
  arc(258,460,40, 40, 260, 0)
  arc(298,460,40,40, 180,280)
  point(210,443); point(225, 439); point(220,447) //Left Whiskers
  point(325,441); point(340, 445); point(330,449) //Right Whiskers
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

  if (colorValue == 1){
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

  if ((mouseX >= 395 && mouseX <= 420) && (mouseY >= 630 && mouseY <= 680)){
  colorValue++;
  if (colorValue == 2) {
    colorValue = 0;
  }
}
if (((mouseX >= 150 && mouseX <= 160) && (mouseY >= 635 && mouseY <= 665)) ||
    ((mouseX >= 180 && mouseX <= 185) && (mouseY >= 645 && mouseY <= 665))) 

{
  imgValue++;
  if (imgValue == 2) {
    imgValue = 0;
  }
  }
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
  //This method used the overlappingg ellipse design to make a clock.
  clock(color, lineSpace){
    push();
    stroke(color)
    strokeWeight(1) //this isnt working?
    ellipse(this.x, this.y, this.w, this.h)
    ellipse(this.x1, this.y1, this.w1, this.h1)

    ellipse()

    this.build(0, 360, lineSpace, 0)

    ellipse(this.x1, this.y1, this.w1*.9, this.h1*.9) //
    ellipse(this.x1, this.y1, this.w1*.85, this.h1*.85)



    ellipse(this.x1, this.y1, this.w1/2, this.h1/2) //mid outter circle
    ellipse(this.x1, this.y1, this.w1/1.9) //mid inner circle

    strokeWeight(.5)//not working?
    line(this.x, this.y + 30, this.x, this.y - 30) //Hour Hand
    fill("black")
    quad(this.x, this.y - 30, this.x - 5, this.y - 35,
       this.x, this.y - 60, this.x + 5, this.y - 35)
    line(this.x, this.y, this.x, this.y - 70)

    strokeWeight(this.w/50)
    ellipse(this.x, this.y, 2) //Clock center circle
    ellipse(this.x, this.y + 23, .7) //Hour Hand small circle
    ellipse(this.x, this.y + 30, 2)  //Hour Hand large circle
    

    pop();
  }

  mushroom(color, lineSpace, headHeight, Lstart, Rend, slitHeight){
    push();
    stroke(color)
    let rightStem;
    let leftStem; 
    this.build(0, 360, lineSpace, 0)
    arc(this.x1, this.y1, this.w1, headHeight, 180, 0) //Mushroom Head



    //The left and right stems are arcs of ellipses
    // leftStem = arc(this.x - this.w1*.35, this.y1, this.w1*.5, headHeight*2.1, Lstart, 90)
    // rightStem = arc(this.x + this.w1*.2, this.y1, this.w1*.5, headHeight*2.7, 95, Rend)
    // ellipse(this.x - this.w1*.35, this.y1, this.w1*.5, headHeight*2.1)
    // ellipse(this.x + this.w1*.2, this.y1, this.w1*.5, headHeight*2.7)

    //Dividing stem lines. 
    // I used parametric ellipse equation to calcualte point on the arc to middle of stem.
    // line(this.x - this.w1*.35 + (this.w1*.5/2) * cos(74),    //left line detail
    //      this.y1 + ( headHeight*2.1/2) * sin(74),
    //      this.x1 - 2, this.y1 + headHeight*slitHeight)
   
    // line(this.x + this.w1*.2 + (this.w1*.5/2)*cos(130),  //right detail line
    //       this.y1 + (headHeight*2.7/2)*sin(130),
    //      this.x1 - 2, this.y1 + headHeight*slitHeight)

    ellipse(this.x, this.y + headHeight, this.w, this.h)
    line(this.x, this.y, this.x, this.y + headHeight)

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
}