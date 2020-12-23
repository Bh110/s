class paper{
    constructor( x,y,r){
        var options={
            isstatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
this.x=x;this.y=y;
this.r=r;


        this.body=Bodies.circle( this.x,this.y,this.r,options);
        World.add( world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
      
        ellipseMode( RADIUS);
        fill( "pink");
      
        ellipse(pos.x,pos.y,this.r)

        pop();
    }

}