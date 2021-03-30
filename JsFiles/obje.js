class Obje{
    constructor(x, y){
        var options={
            isStatic: false,
            restitution:1 
        }
        this.body = Bodies.rectangle(x, y, 35, 40, options);
        this.image = loadImage("assets/square1.png");
        // this.width = width;
        // this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
    
        
        // fill("White");
        // rectMode(CENTER);
        // rect(pos2.x + 70, pos2.y + 35, 250, 20);

        //Creating boxes
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,80, 70);


        }
    }
    