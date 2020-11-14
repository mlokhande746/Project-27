class Bob{
    constructor(x,y,r){
    var options={
        'isStatic':false,
        'restitution':1,
        'friction':0.3,
        'density':0.8

    }
    this.x=x
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,(this.r)/2,options);
    World.add(world,this.body);
}
    display(){
      var bobpos=this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(bobpos.x,bobpos.y,this.r,this.r);
    
    }
};