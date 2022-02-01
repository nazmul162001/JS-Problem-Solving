// getSumOfTotalArray

// var totalArr = [55, 85, 84, 74, 54, 45, 54];

// let sum = 0;

// for(let i = 0; i < totalArr.length; i++){
//   let numbers = totalArr[i];
//   sum = sum + numbers;
// }

// console.log(sum);



function sumOfArray(num) {
  let sum = 0;
  for(let i = 0; i < num.length; i++){
    let numbers = num[i];
    sum = sum + numbers;
  }
  return sum;
}

let outPut = sumOfArray([54, 54, 54, 54, 87, 58, 54, 54]);
console.log(outPut);
