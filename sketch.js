const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0);  
  Engine.update(engine);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40;j<= width; j = j+50){

    plinkos.push(new Plinko(j,75));

  }

  for(var i = 15;i<= width-10; i = i+50){

    plinkos.push(new Plinko(i,175));

  }

  for(var p = 40;p<= width; p = p+50){

    plinkos.push(new Plinko(p,275));

  }

  for(var q = 15;q<= width-10; q = q+50){

    plinkos.push(new Plinko(q,375));

  }

  for(var k = 0;k< divisions.length; k = k++){

    divisions[k].display();

  }

  for(var j = 0;j< particles.length; j = j++){

    paticles[j].display();

  }

  for(var i = 0;i< particles.length; i = i++){

    paticles[i].display();

  }

  for(var p = 0;p< particles.length; p = p++){

    paticles[p].display();

  }

  for(var q = 0;q< particles.length; q = q++){

    paticles[q].display();

  }

}