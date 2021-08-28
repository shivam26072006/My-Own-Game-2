var bg,bg2,form,system,code,security;
var score=0, earscore=0;
var sound1, sound2, sound3, sound4, sound5, sound6 ;
var eyes, eye, ear, ears ;

function preload() {
 
  
  bg= loadImage("background1.jpeg");

 

  ears = loadImage("ear.jpg");

  sound1 = loadSound("1.mp3");
  sound2 = loadSound("2.mp3");
  sound3 = loadSound("3.mp3");
  sound4 = loadSound("4.mp3");
  sound5 = loadSound("5.mp3");
  sound6 = loadSound("feedback.mp3");

}

function setup() {
  createCanvas(1500,750);
  security = new Security();
  system = new System();
  
 

  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("EYES SCORE: " + score, 100, 25);

  text("EAR SCORE: " + earscore, 400, 25);

  textSize(25);
  fill("white");
  text(":- Shivam", 1350, 720);

  
 // if(score === 5) {
        
  //  sound6.play();

 //   }
  
  


  drawSprites()
} 