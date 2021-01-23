class Box {
    constructer(x,y,width,height){
 

this.body = Bodies.rectangle(100,100,20,20);

World.add(world, this.body);
}
display(){

var pos  = this.body.position;

rectMode(CENTER);
fill(rgb(255,0,0));
rect(pos.x,pos.y,this.width,this.height);
}


};
