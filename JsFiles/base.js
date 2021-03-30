class Base{
    constructor(x, y){
       var options={
         isStatic: true
       }
       this.body = Bodies.rectangle(x, y, 400, 20, options);
       World.add(world, this.body);
    }
    display(){
      
      push();
      var pos1 = this.body.position;
      rectMode(CENTER);
      rect(pos1.x, pos1.y, 250, 15);
      pop();
    }
}