// get a Smallest number of an array 

function getSmallestNumber(numbers) {
  let Smallest = myArr[0];
  
  for(let i = 0; i < numbers.length; i++){
    let getNum = numbers[i];
    if(getNum < Smallest){
      Smallest = getNum;
    }
  }
  return Smallest;
}

let myArr = [54, 74, 54, 62, 85, 65, 32];
let smallestNum = getSmallestNumber(myArr);
console.log(smallestNum);