var towerImg, tower;
//Variables de la imagen, sprite y grupo de la puerta
var doorImg, door, doorsGroup;

//Variables de la imagen, sprite y grupo de las barandillas
var climberImg, climber, climbersGroup;

//variable del fantasma e imagen
var ghost, ghostImg;

//variable para el grupo y sprite invisible
var invisibleBlockGroup, invisibleBlock;

//variable del estado del juego
var gameState="play";


function preload(){

  //cargar imagen de la torre
towerImg = loadImage("tower.png");

  //Se carga la imagen de la puerta
  doorImg = loadImage("door.png");
  
  //Se carga la imagen de la barandilla
   climberImg = loadImage("climber.png");
  
  //se carga imagen del fantasma
  ghostImg = loadImage("ghost-standing.png");
  
  //se carga el sonido
  spookySound = loadSound("spooky.wav");
}

function setup(){

  createCanvas(600,600);

  //Sprite de la torre, imagen y velocidad en y =1
  
  
  //Se crea el grupo de las puertas doorsGroup, climbersGroup
  

  //grupo para el bloque invisible
  invisibleBlockGroup = new Group();
  
  // se crea sprite ghost 200 en x e y y 50 de ancho y alto, se da escala de 0.3 y añade imagen al fantasma
  
}

function draw(){
  background(0);

    
   if(gameState === "play"){

    //Si la posicion en y de la tower es mayor a 400 se posicionará en y = 300
  
 
  //If para la barra espaciadora, flechas y gravedad del fantasma
   if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    
    ghost.velocityY = ghost.velocityY + 0.8
    
  
  //Si el grupo de la barandilla (climbersGroup) toca a fantasma (ghost) su velocidad en Y  es = 0
 

  // si el grupo invisible (invisibleBlockGroup) esta tocando al fantasma o su posicion en y es mayor a 600 destruir el fantasma (ghost) y cambiar el gameState a "end"
  
  
  
  // se manda a llamar la funcion Spawn Doors
  spawnDoors();
  drawSprites();
}

if(gameState === "end"){
  stroke("yellow");
fill("yellow");
textSize(30);
text("Game Over", 230,250)

}
}
function spawnDoors(){

  // Si el restante del conteo del frame entre 240 es igual a 0 creamos el sprite de la puerta y se le añade imagen
  if ( frameCount % 240 === 0){
    var door = createSprite(200, -50);
    door.addImage(doorImg);

    
    //creamos el sprite de la barandilla y se le añade imagen
    var climber = createSprite(200,10);
    climber.addImage(climberImg);
    
    //Crear la variable invisible, ancho, altura
    var invisibleBlock =createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    
    //Crear un numero random entre 120, 400 para la posicion en x de la puerta y darle velocidad en y para que vaya hacia abajo
    

    // Igualar la velocidad de climber en x con door en x, y aumentar 1 a la velocidad de climber
    
    
    //darle posicion y velocidad al bloque invisible
    invisibleBlock.x = door.x;
   invisibleBlock.velocityY = 1;
    
    //ciclo de vida (lifetime) de puerta y barandilla =800
   
    
    // igualar la profundidad ( depth) del fantasma (ghost) a la profundidad de la puerta (door) y sumarle 1 a la profundidad del fantasma
    
    
    //Agregar al grupo de las puertas (doorsGroup) cada objeto puerta (door)
    

    //agregar cada barandilla al grupo
    climbersGroup.add(climber);
    
    //debug y añadir el bloque invisible al grupo
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
  }
}


