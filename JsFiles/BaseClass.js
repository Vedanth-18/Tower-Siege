class BaseClass{
    constructor(x, y, width, height){
        var options={
            isStatic: true,
            restitutuion: 0.8,
            friction: 0.2,
            density: 0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.body.setStatic(this.body, stat);
        
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        width = this.body.width;
        height = this.body.height;
        // push();
        // rectMode(CENTER);
        // rect(this.image, pos.x, pos.y, 150, 120);
        // pop();
    }
}