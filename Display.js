function display(str,x,y,c,a){
  push();
  textAlign(CENTER);
  noStroke();
  fill(c,a);
  textSize(30);
  text(str,x,y);
  pop();
}