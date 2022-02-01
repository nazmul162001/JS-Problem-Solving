// Creat two function to output a maximum & minimum number from 3 numbers 

// getIntoMaximumNumber //

// function getMaxNum(num1, num2, num3) {
//   if(num1 > num2 && num1 > num3){
//     console.log(num1 + ' is big');
//   }
//   else if(num2 > num1 && num2 > num3){
//     console.log(num2 + ' is big');
//   }
//   else if(num3 > num1 && num3 > num2){
//     console.log(num3 + ' is big');
//   }
// }

// let outPut = getMaxNum(700, 500, 650);



// getIntoMinimumNumber//

function getMinimumNumber(num1, num2, num3) {
  if(num1 < num2 && num1 < num3){
    console.log(num1 + ' is Small');
  }
  else if(num2 < num1 && num2 < num3){
    console.log(num2 + ' is Small');
  }
  else if(num3 < num1 && num3 < num2){
    console.log(num3 + ' is Small');
  }
}

let outPut = getMinimumNumber(300, 652, 24);
