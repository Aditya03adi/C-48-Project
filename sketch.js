var canvas;

var gameState = 0;
var square1,square2,square3,square4,square5,redImg,blueImg,greenImg,yellowImg,start;
var startImg;
var squares;
var score=0; 
var rand;


function preload(){
    blueImg=loadImage("blueSquare.png");
    greenImg=loadImage("greenSquare.png");
    redImg=loadImage("redSquare.png");
    yellowImg=loadImage("yellowSquare.jpg");
    startImg=loadImage("start2.jpg");
  }


  function setup(){
    
    canvas = createCanvas(1200,600);


    square1=createSprite(240,50);
    square1.addImage(redImg);
    square1.scale=0.2;

    square2=createSprite(480,50);
    square2.addImage(greenImg);
    square2.scale=0.2;

    square3=createSprite(720,50);
    square3.addImage(blueImg);
    square3.scale=0.2;

    square4=createSprite(960,50);
    square4.addImage(yellowImg);
    square4.scale=0.2;

    start=createSprite(600,550);
    start.addImage(startImg);
    start.scale=0.3;
    

    
   
  }


  function draw(){
    
    background("brown");
        if(mousePressedOver(start)){
      gameState=1;
      console.log(gameState);
          }
          if (gameState===1){
            play();
          }
    fill("black")
    textSize(25);
   text("Score:"+score,555,590)

   
      
    

    drawSprites();
}




     
     
     

     function play(){
      console.log("play")
     hide();
     //console.log(square5.x)
     square5=createSprite(600,500,30,30);
     square5.scale=0.2;
    rand = Math.round(random(1,4));
   switch(rand) {
     
    case 1: square5.addImage(redImg);
           break;
     case 2: square5.addImage(greenImg);
             break;
     case 3: square5.addImage(yellowImg);
             break;
     case 4: square5.addImage(blueImg);
            break;
     
     default: break;
   }
      
  // if(keyIsDown(39)){
    // square5.x=square5.x+5;
   //}

   //if(keyIsDown(37)){
    // square5.x=square.x-5;
  // }

      square1.velocityY=5;
square2.velocityY=5;
square3.velocityY=5;
square4.velocityY=5;
    


      

if(square1.y>square5.y){
  reset();
}

 
  

  
  if(square5.addImage(redImg)&&square1.isTouching(square5)){
score+=1
  }

 else if(square5.addImage(redImg)&&square5.isTouching(square2)){
  reset();
  score=score-1;
  }

 else  if(square5.addImage(redImg)&&square5.isTouching(square3)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(redImg)&&square5.isTouching(square4)){
reset();
  score=score-1;
  }


 else  if(square5.addImage(greenImg)&&square5.isTouching(square1)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(greenImg)&&square5.isTouching(square3)){
reset();
  score=score-1;
  }

  else if(square5.addImage(greenImg)&&square5.isTouching(square4)){
  reset();
  score=score-1;
  }


else if(square5.addImage(blueImg)&&square5.isTouching(square1)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(blueImg)&&square5.isTouching(square2)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(blueImg)&&square5.isTouching(square4)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(yellowImg)&&square5.isTouching(square1)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(yellowImg)&&square5.isTouching(square2)){
  reset();
  score=score-1;
  }

  else if(square5.addImage(yellowImg)&&square5.isTouching(square3)){
  reset();
  score=score-1;
  }

    


  else if (square5.addImage(greenImg)&&square2.isTouching(square5)){
score+=1
  }

else if(square5.addImage(blueImg)&&square3.isTouching(square5)){
score+=1;
}

else if(square5.addImage(yellowImg)&&square4.isTouching(square5)){
score+=1;
}


      //console.log("hi");

     }


     function reset(){
      console.log("reset");
      
        square1.x=240;
        square1.y=100;
        square2.x=480;
        square2.y=100;
        square3.x=720;
        square3.y=100;
        square4.x=960;
        square4.y=100;
        square5.x=600;
        square5.y=500
        
     }

     function hide(){
       start.visible=false;
     }
