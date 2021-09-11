class Ground{

    constructor(x,y,w,h){
        var option = {
            isStatic : true   
        }

     this.Bodies.rectangle(x,y,w,h,option);
     World.add(myWorld,this.Bodies);
     this.w = w;
     this.h = h;
    }

    display(){
        push();
        var posi = this.Bodies.position;
        rectMode(CENTER);
        fill("yellow");
        rect(posi.x,posi.y,this.w,this.h);
        pop();
    }
}