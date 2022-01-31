// var i = 0;
//  while ( i < 0) {
//    console.log(i);
//    if(i == 5) {
//      break;
//    }
//    i++;
//  }

// //  using for loop 

// for (var i = 0; i < 15; i++) {
//   console.log(i);
//   if(i == 5) {
//     break;
//   }
// }


var numbers = [54, 35, 65, 85, 24, 90, 100]

for ( var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
  if (number > 80){
    break;
  }
}