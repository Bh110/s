class ground{  
    constructor( x,y,width,height){
    var options={
        isStatic:true}      
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle( x,y,width,height,options);
  
        World.add( world,this.body)
}
display(){
    var pos=this.body.position;
  
    rectMode( CENTER);
    fill ("yellow"); 
    rect(pos.x,pos.y,this.width,this.height);

}
}