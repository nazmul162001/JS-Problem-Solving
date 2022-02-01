// get a largest number of an array 

function getLargestNumber(numbers) {
  let largest = 0;
  
  for(let i = 0; i < numbers.length; i++){
    let getNum = numbers[i];
    if(getNum > largest){
      largest = getNum;
    }
  }
  return largest;
}

let myArr = [54, 74, 54, 62, 85, 65, 32];
let oldestNum = getLargestNumber(myArr);
console.log(oldestNum);