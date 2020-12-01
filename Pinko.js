class Pinko{
    constructor(x, y, radius) {
    
    var opitions = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1
    }

    this.body = Bodies.circle(x, y, radius/2, opitions);
    this.radius = radius;
    World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
};