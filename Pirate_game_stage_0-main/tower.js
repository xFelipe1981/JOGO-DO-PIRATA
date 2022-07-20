   //criando classe
   class Tower{
    constructor(x,y,height,width){
    var options = {
    isStatic:true //deixando o corpo estático
    }
    this.image = loadImage("assets-main/tower.png");
    this.width = width //largura
    this.height = height//altura
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);//criando corpo :))
    //adicionando ao mundo
    World.add(world,this.body);
    }
    show(){

    var pos = this.body.position;//para posição
    var angle=this.body.angle//para angulo
    push();
    translate(pos.x, pos.y);//parametros x e y
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height) //parametros da imagem
    pop();

    
    }
}