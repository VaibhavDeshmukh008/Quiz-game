var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(600,300);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink")
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
