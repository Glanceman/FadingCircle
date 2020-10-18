// let fft;
// let peakDetect;
let disappear;
let song;
let amplitude;
let p;
let fadingCircles=[];

function preload(){
  song=loadSound('Day One.m4a');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  disappear=255;
  amplitude=new p5.Amplitude();
  // fft=new p5.FFT();
  // peakDetect=new p5.PeakDetect();
}

function draw() {
  background(0,0,0);
  if(disappear>0){
    display("Fading Cirlce",windowWidth/2,windowHeight/2-50,disappear,disappear);
    display("Coded by Ben",windowWidth/2,windowHeight/2,disappear,disappear);
    display("BGM: Day One ",windowWidth/2,windowHeight/2+50,disappear,disappear);
   disappear--; 
  }else{
    if (song.isPlaying()==false){
      song.play();
    }
    // fft.analyze();
    // peakDetect.update(fft);
    let level= amplitude.getLevel()*5;
    if (level>0.12 && frameCount%60==0){
      let varibleSize=windowHeight*level;
      if(varibleSize>400){
        varibleSize=400
      }
      p=new fadingCircle(random(1,windowWidth),random(1,windowHeight),varibleSize);
      fadingCircles.push(p);
      frameCount=0;
    }
    for(let i=fadingCircles.length-1;i>=0;i--){
      fadingCircles[i].draw();
      if(fadingCircles[i].isFinish()){
        fadingCircles.splice(i,1);
      }
    }
  }
}