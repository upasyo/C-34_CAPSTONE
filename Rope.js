class Rope{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:250
        }
        this.pointB = pointB;
        this.rope= Constraint.create(options);
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA= null;
    }
    attach(body){
        this.rope.bodyA=body;
    }
    display(){
        if(this.rope.bodyA){//It checks that the body is not null means it has a value or not
           var pointA= this.rope.bodyA.position;
           var pointB= this.pointB;
           push();
              stroke(48,22,8);
              strokeWeight(3);
              line(pointA.x,pointA.y,pointB.x,pointB.y);
           pop();
        }
    }
};