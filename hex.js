class Box{
constructor(x, y) {
  var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.circle(x,y,50,options)
  World.add(world, this.body);
}
display(){
  var pos=this.body.position
  push();
  translate(this.body.position.x, this.body.position.y);
 ellipse(0,0,50)
 ellipseMode(RADIUS)
  pop();
}
}