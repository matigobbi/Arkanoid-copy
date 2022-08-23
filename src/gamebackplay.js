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
let speedY = -7
let score = 0
let count = 0
console.log(score)

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
      this.bricks.push(new Brick(2 ,50*i, 180))
    }    
    for(let i = 2; i<17; i++){
      this.bricks.push(new Brick(3 ,50*i -20, 220))
    }  
    // console.log(this.bricks)
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
      speedY +=4
        }
    if( ballx >860){
      speedX -=3
    }
    if(ballx <20){
      speedX+=3
    }

    //here the ball hits the table
    let distBallPlayer = Math.round(dist(ballx, this.y -15, playerx+50, player.y))
    if(distBallPlayer<50 && frameCount>50){
      speedY *= -1 *(Math.random() * 0.5 +0.85) 
      // speedX *= -1 * (Math.random() * 0.5 +0.75)
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
collision(ballInfo) {
  // console.log('collision', playerInfo)
  // dist(x, y, 2ndx, 2ndy) returns the distance
  // get the middle of the obstacle
  let brickX = this.x + 50 / 2
  let brickY = this.y + 20 / 2
  let ballX = ballInfo.x + ballInfo.width / 2
  let ballY = ballInfo.y + ballInfo.height / 2
  // get the middle of the player
// console.log("ok")
  if (dist(brickX, brickY, ballx, ball.y) > 25) {
    return false
  } else {
    // increment the score
        // speedX *= -1
        // speedY *= -1
        // score+= 1
        document.querySelector(".score").innerText=score+=1;
        
        return true
  }
}
}