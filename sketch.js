var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  dogimg=loadImage("dogimg.png")
  happydogimg=loadImage("dogimg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();

  dog = createSprite(250,250,0,0);
  dog.addImage(dogimg);
  dog.scale=0.15;


  foodStock = database.ref('food');
  foodStock.on("value" ,readStock)
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogimg);
}

  drawSprites();
 text("note:press UP_ARROW key to feed the drago milk!", 450,250);
 textSize(20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
  x=0
  }else{
  x=x-1
  }
  database.ref('/').update({
  food:x  
  })
}

