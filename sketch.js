var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var wall1, wall2, wall3, wall4;;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(750,540,130,20);
    surface1.shapeColor = "green"; 
     
    surface2 = createSprite(600,540,130,20);
    surface2.shapeColor = "pink";

    surface3 = createSprite(450,540,130,20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(300,540,130,20);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    box =createSprite(750,500,30,30);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = -5;
    
    wall1 = createSprite(400,600,800,10);
    wall1.shapeColor = "rgb(169,169,169)";

    wall2 = createSprite(400,0,800,10);
    wall2.shapeColor = "rgb(169,169,169)";

    wall3 = createSprite(0,200,10,800);
    wall3.shapeColor = "rgb(169,169,169)";

    wall4 = createSprite(800,200,5,800);
    wall4.shapeColor = "rgb(169,169,169)";
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);
    box.bounceOff(wall4);
       music.play();
    


    isTouching();

    drawSprites();
}

function isTouching(){

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor = "pink";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box)&& box.bounceOff(surfac3)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

}