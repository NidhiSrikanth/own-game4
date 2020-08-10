var backdrop;
var gameState= 0;
var form,rulesImage;
var object1,object2,object3,object4, object5,groundImage;
var object6,object7,object8,object9, object10;
var object11, object12, object13, object14;
var object15, object16,object17;
var player,playerRunning,playerRunningImage,playerJumping,playerJumpingImage,playerStanding;
var coinImage,coin1, coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14;
var coin15,coin16,coin17,coin18,coin19,coin20, coinSound;
var coin21,coin22,coin23,coin24,coin25,coin26,coin27;
var reset;
var score=0, counter=0;


function preload(){
  backdrop= loadImage("pictures/cave.PNG");
  groundImage= loadImage("pictures/ground1.PNG");
rulesImage= loadImage("pictures/rules1.png");
playerStanding= loadImage("pictures/standing.png");
playerRunningImage= loadAnimation ("pictures/running1.png","pictures/running2.png","pictures/running3.png","pictures/running4.png","pictures/running5.png");
playerJumpingImage= loadAnimation("pictures/jumping1.png","pictures/jumping2.png","pictures/jumping3.png","pictures/jumping4.png","pictures/jumping5.png");
coinImage= loadAnimation("pictures/coin1.png","pictures/coin2.png","pictures/coin3.png","pictures/coin4.png","pictures/coin5.png","pictures/coin7.png")
coinSound= loadSound("sounds/coins.mp3");
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
  form= new Form ();
 
  object1= new Ground(150,700,50,20);
  object2= new Ground(350,700,50,20);
  object3= new Ground(700,700,50,20);
  object4= new Ground(1200,700,50,20);
  object5= new Ground(1350,700,50,20);

  object6= new Ground(150,500,50,20);
  object7= new Ground(300,500,50,20);
  object8= new Ground1(800,500,50,20);
  object9= new Ground(1300,500,50,20);
  object10= new Ground(1100,500,50,50);

  object11= new Ground2(90,300,50,20);
  object12= new Ground (300,300,50,20);
  object13= new Ground1(700,300,50,20);
  object14= new Ground(1200,300,50,20);

  object15= new Ground(500,100,50,20);
  object16= new Ground(600,100,50,20);
  object17= new Ground1(1300,100,50,20);

  coin1= new Coin(50,600,10,10);
  coin2= new Coin(250,600,10,10);
  coin3= new Coin(300,600,10,10);
  coin4= new Coin(350,600,10,10);
  coin5= new Coin(500,550,10,10);
  coin6= new Coin(550,550,10,10);
  coin7= new Coin(600,600,10,10);
  coin8= new Coin(700,600,10,10);
  coin9= new Coin(850,600,10,10);
  coin10= new Coin(1100,600,10,10);
  coin11= new Coin(1200,600,10,10);
coin12= new Coin(1300,600,10,10);
coin13= new Coin(1400,600,10,10);
coin14= new Coin(50,400,10,10);
coin15= new Coin(200,400,10,10);
coin16= new Coin(300,400,10,10);
coin17= new Coin(800,400,10,10);
coin18= new Coin( 1000,400,10,10);
coin19= new Coin(1200,400,10,10);
coin20= new Coin(1400,400,10,10);

coin21= new Coin(100,200,10,10);
coin22= new Coin(400,200,10,10);
coin23= new Coin(500,200,10,10);
coin24= new Coin(700,200,10,10);
coin25= new Coin(1000,200,10,10);
coin26= new Coin(1300,200,10,10);
coin27= new Coin(1000,50,10,10);

  player= createSprite(150,700,20,30);
  player.addAnimation("playerRunningImage",playerRunningImage);
  player.addAnimation("playerJumpingImage",playerJumpingImage);
  player.addImage("playerStandingImage",playerStanding);
  player.debug= true;
}

function draw() {
  background("white");  
  if (gameState===0){
    
    form.display();
    
    

  }

  if( gameState===1){
    image(backdrop,0,0,displayWidth,displayHeight);
image(rulesImage,displayWidth/2-300,displayHeight/2-400,700,700);
if(keyIsDown(32)){
  gameState=2;
}
  }

  if (gameState===2){
    imageMode(CENTER);

image(backdrop,displayWidth/2-30,displayHeight/2 -50,displayWidth-50,displayHeight-100);


if( keyIsDown(UP_ARROW)){
  player.velocityY= -6;

  player.changeAnimation("playerJumpingImage",playerJumpingImage);
}

player.velocityY=player.velocityY+0.5;

if(keyIsDown(RIGHT_ARROW)){
  player.velocityX=4;
  player.changeAnimation("playerRunningImage",playerRunning);

}
else{
  player.velocityX=0;
  player.changeAnimation("playerStandingImage",playerStanding);
}

if(keyIsDown(LEFT_ARROW)){
  player.velocityX=-4;
  player.changeAnimation("playerRunningImage",playerRunning);

}



object1.display();
object2.display();
object3.display();
object4.display();
object5.display();
object6.display();
object7.display();
object8.display();
object9.display();
object10.display();
object11.display();
object12.display();
object13.display();
object14.display();
object15.display();
object16.display();
object17.display();

coin1.display();
coin2.display();
coin3.display();
coin4.display();
coin5.display();
coin6.display();
coin7.display();
coin8.display();
coin9.display();
coin10.display();
coin11.display();
coin12.display();
coin13.display();
coin14.display();
coin15.display();
coin16.display();
coin17.display();
coin18.display();
coin19.display();
coin20.display();
coin21.display();
coin22.display();
coin23.display();
coin24.display();
coin25.display();
coin26.display();
coin27.display();




//playerRunning.display();
drawSprites();
textSize(24);
fill("white");
text("score: "+score,500,400);

if(player.y>displayHeight){
  gameState=3;
}
  }

  

  if(gameState===3){
    background("black");
    textSize(45);
    textFont("Ariel")
    fill("white");
text("GAME OVER",displayWidth/2-100,displayHeight/2-100);
text("press R to restart", displayWidth/2-50,displayHeight/2-50)

  }


  

}