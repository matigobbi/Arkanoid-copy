let leftWall = 5
let rigthWall = 771


class Game {
  constructor(){

  }
  draw(){
    // console.log("drawing")

  }
  
  preload(){
   this.backgroundImage=loadImage("../png/background.jpg")
  }
}

class Player {
  constructor(){
		this.x = 20
		this.y = 550
  }
  draw(){
// console.log("drawing")
    let playerx = constrain(mouseX, leftWall, rigthWall);
    image(this.playerimage, playerx, this.y, 100,25)
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
    this.x= ballx;
    this.y= player.y -22;
    this.speed= speed;
  }

  draw(){
    // console.log(".")
    let ballx = constrain(mouseX, leftWall, rigthWall)+40;
    image(this.ball, ballx, this.y, 25 ,25 )
  }
  preload(){
    this.ball= loadImage("../png/ball.png")
  }
}


