class Polygon{
    constructor(x, y, sides, radius, angle){
        var options ={
            restitution:0.6,
            friction:0.4,
            density:0.3
        }
       this.body = Bodies.polygon(x, y, sides, radius, options);
       x = this.x;
       y = this.y;
       this.image = loadImage("assets/polygon.png");
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        // var angle = this.body.angle;
        // push();
        // translate(pos.x, pos.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 100, 100);
        //pop();
    }
}