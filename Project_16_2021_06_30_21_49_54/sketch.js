
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey =createSprite(80,315,20,20)
monkey.addAnimation ("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite (400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  
  bananaGroup= new Group ()
}


function draw() {
background("white")
  drawSprites()
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);
  
  var survivalTime=0
  
  stroke("white")
  textSize(20)
  fill ("white")
  text("Score:"+ score, 500, 50)
  
  makeObstacles()
  food()

  
//stroke ("black")
  //textSize(20)
  //fill("black")
  //survivialTime=math.ceil(frameCount/frameRate())
  //text("Survival Time:"+ survivalTime,100,50)
}

function makeObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,320,10,40);
   obstacle.velocityX = -6
   
   obstacle.addImage("obstacleImage",obstacleImage)
   
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
 }
}

function food(){
   if (frameCount % 60 === 0){

  banana =createSprite(400,130,20,20)
  banana.addImage (bananaImage);
  banana.velocityX=-6;
  banana.lifetime = 300;
  banana.scale=0.1
  bananaGroup.add(banana);
   }
}

