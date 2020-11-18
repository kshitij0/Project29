class Boxes{
    constructor(x,y){
        var ops={
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,ops)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle)
       rectMode(CENTER)
        rect(0,0,50,50)
        
        pop()

    }
}