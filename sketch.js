var starImg,bgImg
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada ,fadam,vozFada
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadam = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    vozFada=loadSound("sound/JoyMusic.mp3")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
vozFada.play()
    //criar sprite de fada e adicionar animação para fada

fada=createSprite (150,600,50,50)
fada.addAnimation("fadaf",fadam)
fada.scale=0.2
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg)
    star.x=starBody.position.x
    star.y=starBody.position.y
    if(star.y > 470 && starBody.position.y > 550){
        Matter.Body.setStatic(starBody,true);
        }
fada.display()
star.display()

}
function keyPressed(){
if(keyDown(LEFT_ARROW)){
    fada.x = fada.x -10
}
if(keyDown(RIGHT_ARROW)){
fada.x = fada.x +10}
if(keyDown(DOWN_ARROW)){
    Matter.Body.setStatic(starBody,false)
    }
}