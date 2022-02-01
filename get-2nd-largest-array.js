// Using Sort 


// function secondHighest(arr) {
//   var secondBiggest = arr.sort(function(a, b){
//     return b - a;
//   })[1];
//   return secondBiggest;
// }

// let mylist = [54, 54, 54, 85, 65, 24];
// let myLowestNum = secondHighest(mylist);
// console.log(myLowestNum);


// using condition & for loop 

function getSecondHighestNum(arr) {
  let largestNum = 0;
  let secondLargeNum = 0;

  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    if(element > largestNum){
      secondLargeNum = largestNum;
      largestNum = element;
    }
    else if(element > secondLargeNum){
      secondLargeNum = element;
    }
  }
  return secondLargeNum;
}

let myArr = [65, 58, 21, 14, 65, 94, 45, 21, 88, 85];
let outPut = getSecondHighestNum(myArr);
console.log(outPut);
