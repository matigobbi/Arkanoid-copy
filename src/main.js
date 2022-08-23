const game = new Game()
const background = new Background()
const player = new Player()
const ball = new Ball(20, 20, 0)
// this is used to load the game assets

function preload() {
game.preload()
player.preload()
ball.preload()
}

function setup() {
	console.log('this is the setup')
	createCanvas(900, 600)
}

function draw(){
  background.draw()
  ball.draw() 
  player.draw()
  game.draw()
}

function mouseClicked(){
  ball.x +=1

}