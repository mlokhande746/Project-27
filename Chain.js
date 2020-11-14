class Chain{
    constructor(bodyA,bodyB,xOffset,yOffset){
     var options={
         bodyA:bodyA,
         bodyB:bodyB,
         pointB:{x:xOffset,y:yOffset}
     }
     this.chain=Constraint.create(options);
     this.xOffset=xOffset;
     this.yOffset=yOffset;
     World.add(world,this.chain);
    }
    display(){
     var posA=this.chain.bodyA.position;
     var posB=this.chain.bodyB.position;
     strokeWeight(3);
     stroke("white");
     line(posA.x,posA.y,posB.x+this.xOffset,posB.y+this.yOffset);
    }
};