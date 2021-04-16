class Block{
    constructor(x,y,width,height){
        var option={
            restitution: 0.4,
            friction: 0

        }

        this.body=Bodies.rectangle(x,y,width,height,option);
        this.w=width;
        this.h=height;
        this.visibility=255;

        World.add(world,this.body);
    }

    display(){
        if(this.body.speed < 3){
        var pos =this.body.position;
        var angle =this.body.angle;

        push();
        rectMode(CENTER)
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop();

        }

        else {

            World.remove(world,this.body);
            push();
            this.visibility = this.visibility -5;
            //tint(255,this.visibility);
          // rect(this.body.position.x,this.body.position.y,this.w,this.h);
            pop();
        }
    }
}
