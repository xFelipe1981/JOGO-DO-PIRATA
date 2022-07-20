class Cannon {
    constructor(x, y, width, height, angle){
    this.x = x
    this.y = y
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    
    
    }
    
    show(){
    //condicionais para mexer a torre
    if(keyIsDown(RIGHT_ARROW)&& this.angle < 0.35) {
    this.angle+=0.02;
    }
    if(keyIsDown(LEFT_ARROW)&& this.angle > -1.45) {
    this.angle-=0.02
    }



    fill("black")
    push();

    translate(this.x,this.y);

    rotate(this.angle);

    rect(-10,-20,this.width,this.height);//criando o cano do canhao

    pop();
    arc(this.x - 30,this.y + 90, 140, 200, PI,TWO_PI)//base do canhao
    noFill();


    }
    
    
    
    
    }