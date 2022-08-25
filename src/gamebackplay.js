let leftWall = 5
let rigthWall = 791
let playerx = 0
let ballx = 0
let leftStickX =0
let leftStickY=0
let rigthStickX=880
let rigthStickY=0
let topStickX=20
let topStickY=0
let speedX = 2
let speedY = -5
let  score= 0 
let bricksCount
let count = 0

class Game {
  constructor(){
    this.bricks = [];
    for(let i = 2; i<17; i++){
      this.bricks.push(new Brick(0, 50*i, 100))
    }
    for(let i = 2; i<17; i++){
      this.bricks.push(new Brick(1, 50*i -20, 140))
    }
    for(let i = 2; i<17; i++){
      this.bricks.push(new Brick(2 ,50*i ,180))
    }    
    for(let i = 2; i<17; i++){
      this.bricks.push(new Brick(3 ,50*i -20, 220))
    }  
    for(let i = 2; i<17; i+=3){
      this.bricks.push(new Brick(1 ,50*i, 260))
    }     
     for(let i = 2; i<17; i+=3){
      this.bricks.push(new Brick(3 ,50*i -40, 280))
    }  
    for(let i = 3; i<17; i+=3){
      this.bricks.push(new Brick(1 ,50*i , 300))
    }  
    console.log(this.bricks.length)
  }
  draw(){
		this.bricks.forEach(function (brick) {
      // console.log(brick)
			brick.draw()
		})
    this.bricks = this.bricks.filter(brick => {
			// console.log(this)
			if (brick.collision(ball.ball) ) {
				return false
			} else {
				return true
			}
		})
    bricksCount = this.bricks.length

	}

  
  
  preload(){
   this.backgroundImage=loadImage("../png/background.jpg")
   this.bricksColors =[ loadImage("../png/orange-brick.png") , 
                        loadImage("../png/blue-brick.png"), 
                        loadImage("../png/green-brick.png"), 
                        loadImage("../png/violet-brick.png")]
  }


}
class Player {
  constructor(){
		this.x = 20
		this.y = 550
  }
  draw(){
// console.log("drawing")
   playerx = constrain(mouseX, leftWall, rigthWall);
    image(this.playerimage, playerx, this.y, 100,25);
  }
  
  
  preload(){
    this.playerimage=loadImage("../png/table.png")

  }
}
class Background {
  draw() {
  image(game.backgroundImage, 0, 0, 900, 600)
  }
}

class Ball {
  constructor(x, y,speed){
    this.x= x;
    this.y= player.y -22;
    this.speed= speed;
  }

  draw(){
    image(this.ball, ballx , this.y, 25 ,25 )

    if(frameCount<40){
      ballx = constrain(mouseX, leftWall, rigthWall)+40;
    }else {
    ballx += speedX
    this.y += speedY}
    image(this.leftStick,leftStickX,leftStickY,20,550)
    image(this.topStick,topStickX,topStickY,860,20)
    image(this.rigthStick,rigthStickX,rigthStickY,20,550)
    //here the ball hits thee walls
    if(this.y <20){
      speedY +=2
        }
    if( ballx >860){
      speedX -=2
    }
    if(ballx <20){
      speedX +=2
    }

    //here the ball hits the table
    let distBallPlayer = Math.round(dist(ballx, this.y -15, playerx+50, player.y))
    if(distBallPlayer<50 && frameCount>45){
      speedY *= -1 *(Math.random() * 0.5 +0.80) 
    } 

  }

  preload(){
    this.ball= loadImage("../png/ball.png")
    this.leftStick= loadImage("../png/leftwall.png")
    this.topStick= loadImage("../png/topwall.png")
    this.rigthStick = loadImage("../png/rigthwall.png")
  } 
}

class Brick {
  preload(){

  }
  constructor(color, x, y){
  this.color = color
  this.y = y;
  this.x = x;
}

draw(){
  image(game.bricksColors[this.color], this.x, this.y, 50, 20)
}
collision() {
  // get the middle of the bricks
  let brickX = this.x + 50 / 2
  let brickY = this.y + 20 / 2
  // get the middle of the player
  if (dist(brickX, brickY, ballx, ball.y) > 25) {
    return false
  } else {
    // increment the score
        speedX  *= (Math.random() * 0.25 +0.80)
        speedY *= -1 *(Math.random() * 0.6 +0.70)
        document.querySelector(".score").innerText=score+=10;
        document.querySelector(".brickscount").innerText=bricksCount;
    
        
        return true
  }
}
}