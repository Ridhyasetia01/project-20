var tom,cat1,cat2;
var mouse1,mouse,mouse2,mouse3;


function preload() {
    cat1=loadImage("images/cat1.png");
    b1=loadImage("images/garden.png");
    mouse1=loadImage("images/mouse4.png");
    mouse2=loadImage("images/mouse3.png")
  cat2=loadImage("images/cat2.png");
  mouse3=loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(800,600);
    tom.addImage("cat",cat1);
    tom.scale=0.3;

    mouse=createSprite(200,600);
    mouse.addImage("jerry",mouse1);
    mouse.scale=0.3;

}

function draw() {

    background(b1);

  if(tom.x - mouse.x < (tom.width - mouse.width)/2);
  

    drawSprites();
}


function keyPressed(){

  if(keyCode==RIGHT_ARROW){
mouse.addAnimation("jerry2",mouse2);
mouse.changeAnimation("jerry2");
tom.addAnimation("tom2",cat2);
tom.changeAnimation("tom2");

  }




}
