// Grad System 

function gradMark(mark){
  if(mark >= 90 && mark <= 100){
    console.log('You got Golden A+');
  }
  else if(mark >= 80 && mark <= 89){
    console.log('You got A+');
  }
  else if(mark >= 70 && mark <= 79){
    console.log('You got A');
  }
  else if(mark >= 60 && mark <= 69){
    console.log('You got A-');
  }
  else if(mark >= 50 && mark <= 59){
    console.log('You got B');
  }
  else if(mark >= 40 && mark <= 49){
    console.log('You got C');
  }
  else if(mark >= 33 && mark <= 39){
    console.log('You got D');
  }
  else if(mark >= 0 && mark <= 32){
    console.log('You are Fail');
  }
  else{
    console.log('Pleasae input a Valid Result From (0 to 100)');
  }
}

var nazmulResult = gradMark(90);
var abdulResult = gradMark(50);
