
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 200);

  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.11;
  
  ground = createSprite(200,190,400,5);
  ground.x = ground.width /2;
  
  score = 0;
  
}


function draw() {
 background("white");
  
  spawnObstacles();
  Bananas();
  
  
  
  ground.velocityX =-5;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("UP_ARROW")&& monkey.y>=100){
        monkey.velocityY = -12;
  }
  
   monkey.velocityY = monkey.velocityY + 0.6
  
  monkey.collide(ground);
  
score = score + Math.round(getFrameRate()/60);
  
 drawSprites();
  text("Survival time: "+ score, 500,50);
}

function spawnObstacles(){
  if (frameCount % 100 === 0){
   var obstacle = createSprite(600,165,10,40);
    obstacle.addImage("obstacle1",obstacleImage);
    obstacle.scale=0.1
   obstacle.velocityX = -5;
  }
}
  
  function Bananas(){
    if (frameCount % 100 === 0){
    rand=Math.round(random(35,85));
   var banana = createSprite(600,55,10,40);
    banana.addImage("banana2",bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.y=rand;
  }
  }
  

