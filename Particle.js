class Particle{
    constructor(x,y){

        this.body = Bodies.circle(x,y,10);
        this.radius = 10;
        this.color = color(random(0,255),random(0,255),random(0,255));

        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position

        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}