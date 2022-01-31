// Output result from 51 to 100 all event or odd number 

// function getOddNumber() {
//   for(i = 50; i <= 100; i++){
//     if(i % 2 != 0){
//       console.log(i + ' ' + 'is a Odd Number');
//     }
//   }
// }

// getOddNumber();


// function getOddNumber(firstNum, lastNum) {
//   for(i = firstNum; i <= lastNum; i++){
//     if(i % 2 != 0){
//       console.log(i + ' ' + 'is a Odd Number');
//     }
//   }
// }

// getOddNumber(50, 80);

function getOddNumber(firstNum, lastNum) {
  if(firstNum < lastNum){
    for(i = firstNum; i <= lastNum; i++){
      if(i % 2 != 0){
        console.log(i + ' ' + 'is a odd Number');
      }
    }
  }
  else{
    for(i = lastNum; i <= firstNum; i++){
      if(i % 2 != 0){
        console.log(i + ' ' + 'is a odd Number');
      }
    }
  }
}

let output = getOddNumber(50, 90);
// let output = getOddNumber(50, 30);