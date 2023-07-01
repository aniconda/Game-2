var Runner1Animation, track, runner1;
var Runner2Animation, runner2;
// var Runner3Animation, runner3;


function preload() {
    Runner1Animation = loadAnimation("./assets/Runner1_1.png", "./assets/Runner1_2.png", "./assets/Runner1_3.png", "./assets/Runner1_4.png", "./assets/Runner1_5.png");
    track = loadImage("./assets/track.jpg");
    Runner2Animation = loadAnimation("./assets/Runner2_1.png","./assets/Runner2_2.png","./assets/Runner2_3.png","./assets/Runner2_4.png","./assets/Runner2_5.png")
  }

function setup() {
    canvas = createCanvas(500, 500);
    runner1 = createSprite(100,100);
    runner1.addAnimation("Runner1", Runner1Animation);
    runner1.scale = 1;

    runner2 = createSprite(200,100)
    runner2.addAnimation("Runner2", Runner2Animation);
    runner2.scale = 0.92;

    // runner3 = createSprite(300,100)
    // runner3.addAnimation("Runner3", Runner3Animation);
    // runner3.scale = 1;
}
function draw() {
    background("white");
    // if(KeyDown("up")){
    // runner1.y=runner1.y + 5;
    // }
    
    drawSprites();
}