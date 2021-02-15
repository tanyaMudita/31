class  Drops{

    constructor(){

        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:1.2,
        }

        this.body=Bodies.circle(Math.round(random(0,600)),0,10,options);
        World.add(world,this.body);
       
    }

display(){

var pos=this.body.position;


push()
translate(pos.x,pos.y)
ellipseMode(CENTER);
fill("blue");
ellipse(0,0,10);
pop()



}
}