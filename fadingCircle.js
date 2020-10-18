class fadingCircle {

  
  constructor(x,y,targetSize){
    this.x=x;
    this.y=y;
    this.targetSize=targetSize;
    this.startingSize=0;
    this.R=random(100,250);
    this.G=random(100,250);
    this.B=random(100,250);
  }
  
  draw(){
    FadingEillipse(this.x,this.y,this.startingSize,this.R,this.G,this.B,0,0,0,10);
    this.update();
  }
  
  update(){
      this.startingSize++;
  }
  
  isFinish(){
    return (this.startingSize>this.targetSize);      
  }
  
}