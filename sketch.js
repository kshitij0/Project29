const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,constrain,surface1,surface2,box1



function setup() {
  createCanvas(1600,900);
  engine=Engine.create()

  world=engine.world
  
  ball=new Box(50,400)

  constrain=new Rope(ball.body,{x:80,y:400})

  surface1=new Ground(450,600,450,30)
  surface2=new Ground(1050,400,400,30)

  box1=new Boxes(350,500)
  box2=new Boxes(400,500)
  box3=new Boxes(450,500)
  box4=new Boxes(500,500)
  box5=new Boxes(550,500)
  box6=new Boxes(400,450)
  box7=new Boxes(450,450)
  box8=new Boxes(500,450)
  box9=new Boxes(430,400)
  box10=new Boxes(480,400)
  box11=new Boxes(450,350)

  box12=new Boxes(950,300)
  box13=new Boxes(1000,300)
  box14=new Boxes(1050,300)
  box15=new Boxes(1100,300)
  box16=new Boxes(1150,300)
  box17=new Boxes(1000,250)
  box18=new Boxes(1050,250)
  box19=new Boxes(1100,250)
  box20=new Boxes(1030,200)
  box21=new Boxes(1080,200)
  box22=new Boxes(1050,150)


  
 




  

}

function draw() {
  background(28,167,115)

  Engine.update(engine)
  
ball.display()

constrain.display()

surface1.display()
surface2.display()

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()

box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()


}
function mouseDragged(){
	
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
  }
  
  function mouseReleased(){
    constrain.detach()
  }