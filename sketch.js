var form;
var gameState;
var game;
var gs=0;
var player;
var playerCount;
var database;
var T1,T2,T3;
var t4;
var token;
function preload(){
T1=loadImage("T1.png");
T2=loadImage("T2.png");
T3=loadImage("T3.png");
}
function setup() {
  database=firebase.database();
  console.log(database)
  createCanvas(displayWidth,displayHeight);
  t4=createSprite();
  t4.addImage(T2);
 
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);  
 if(playerCount===2){
   game.updateState(1);
 }
  drawSprites();
}