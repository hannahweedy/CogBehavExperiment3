let angle = [14,21,35,1,11,3,1,7];
let length = [12.5 , 25, 5, 4, 8, 10, 3, 3]
let lean = [66, 100, 87.5 , 93.4, 66, 50, 90, 90];
let i = 0;
/*
let colour = [[255, 84, 71,], [125, 208, 219], 
              [191, 222, 91], [92, 76, 85],
            [90, 103, 196],[255, 162, 0],
            [222, 227, 211],[247, 0, 255]];
let x = 0;

*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(0);
  strokeWeight(3);
  stroke(255);
 // stroke(colour[x]);
  translate(width/2, height); // changes where the origin is 
  branch(200);


  // drawing the trunk of the fractal tree
  //var length ;
  //line(200, height, 200, height - length);
}

/*function mousePressed(){
  branch (200);
}
*/

// make function to draw branch
function branch(length){

  //mousePressed(branch);

  line(0, 0, 0, -length); // redraws branch at the new origin
  translate(0, -length); // translates new origin to end of original branch
  // so new branch can be drawn
  if (length > 20) 
    
    {let mappedAngle = map(angle[i], 0, 100, 0, 360);

      let adjustedAngleRight = mappedAngle + lean[i]; // Right branch lean
      let adjustedAngleLeft = -mappedAngle + lean[i];

  push();
  rotate(radians(adjustedAngleRight));
  branch(length * 0.67);
  pop();
  push();
  rotate(radians(adjustedAngleLeft));
  branch(length * 0.67);
  pop();
  

  } // this if statement means that the line will not be drawn if it smaller than 4 px
  //line(0, 0, 0, -length * 0.5 ); // redraws branch at the new origin
                                 // * 0.5 makes branch smaller
   
                                 

}                              

function mousePressed (){

  console.log ('pressed');

  i = i + 1;

  if(i == angle.length){
    i = 0;
  }

  x = x + 1;
  if(x == colour.length){
    x = 0;
  }
}





