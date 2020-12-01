class Part{
    constructor(x, y, radius) {
    
    var opitions = {
        isStatic:false,
        restitution:0.4
    }

    this.body = Bodies.circle(x, y, radius, opitions);
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.radius = radius;
    World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        Push()
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        Fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, radius, radius)
        pop()
      }
};