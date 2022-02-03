
        // Problem-solving question 
/*  
1. write 3 variables (number, string, boolean)
2. declare variables using (let, const) & find difference
3.Simple Math Operation () +, -, /, *, %) & store them in a variable
4.comparison() between two or three variable
5.two conditions. Case-1: fullfil both conditions. Case-2: fullfil at least one condition
6.use if else
7. while loop to display 7 to 19 all numbers. Only display odd numbers including 7 to 19
8. declare an array. Number of elements. Update or change 4th position element. add or remove elements. Check whether a specific value exists in the array
9. use any for loop to display every elements of an array
10. you have an array of numbers. display only the numbers bigger than 80
11. write a function that takes three numbers and returns the multiplication of the three numbers
12. declare an object and change any property of that object 
                                          SPECIAL TASK
1. Conversion
  feetToInch --> Function name must be feetToInch
2. Conversion
  centimeterToMeter --> Function name must be centimeterToMeter
3. Calculation / Creat function / user can input 3 parameter of books
  //pageRequirement// Function name
  // book1 has 100 pages
  // book2 has 200 pages
  // book3 has 300 pages
  Show output total books pages
4. friends
  //bestFriend// Function name
  declare an array of your 3 best friends & show output which friends name is bigger
5. declare an array of numbers / will stop the loop if the array has any negative number and returns all the positive number before the negative number / output only positive numbers 

*/

                      // Problem-solving answer
///////////// 1. Write 3 type variable / string, number, boolean /////////////
 
  var string = "This is string";
  var number = 50;
  var boolean = true;
  

/////////// 2. declare variable / let , const & find different ///////////
 
  let different = 50;
  different = 30; // change value 50 to new value 30

  const different = 50;
  // this value can't be change 

    

///////// 3. Math operation & store them into a variable///////
 
  var simpleMath1 = 50;
  var simpleMath2 = 100;

  var total = simpleMath1 + simpleMath2;
  console.log(total);
  

/////////// 4. comparison between two or three variable ////////////
 
  var a = 50;
  var b = 70;
  var c = 40;
if( a <  b && b > c){
  console.log('Your Conparison is true');
}
else{
  console.log('Sorry, Your Comparison is not true');
}
  

/////////// 5. Fullfil both condition & fullfil one condition /////////
 
  var a = 50;
  var b = 400;
  var c = 70;
  var d = 30;
  if(a > b && b < c || c > d){
    console.log('Yeaaa, you will get this job');
  }
  else{
    console.log('sorry , you can not get this job');
  }
  

////////// 6. using while loop display output 7 to 19 all odd Number. includ 7 & 19/////////////
 
var i = 7;
while (i <= 19) {
  if(i % 2 != 0){
    console.log(i);
  }
  i++
}
  

//////// (7 & 8) declare a number of array & change 4th position & check specific number exists & write for loop to display all array element//////

 
  var arr = [50, 65, 85, 94, 32, 52, 45, 65, 85];
  arr[3] = 84;
  arr.push(90);
  arr.pop();
var unique = [];
for(let i = 0; i <arr.length; i++){
  var numbers = arr[i];
  if(unique.indexOf(numbers) == -1){
    unique.push(numbers);
  }
}
console.log(unique);

  
////////// 9. declare an array & output the only number is bigger than 80//////////
 
var arr = [52, 68, 65, 85, 95, 42, 32, 89, 95, 100];

for(i = 0; i <arr.length; i++){
  var numbers = arr[i];
  if(numbers >= 80){
    console.log(numbers);
  }
}
  

////////// 10. declare a function and it take 3 numbers and return multiplication of them/////////
 
function multiplication(num1, num2, num3) {
  var result = num1 * num2 * num3;
  return result;
}

var output = multiplication(3, 5, 6);
console.log(output);

  

/////////// 11. declare an object and change any property of that object  ///////
 
 var obj = {
   name: 'nazmul',
   age: 22,
   skill: 'Javascript, react, node'
 }
//  change age property
 obj.age = 23;
 console.log(obj);

   

                                  // SPECIAL TASK ANSWER
// 1. Conversion Feet to inch / Function name must be feetToInch
 
function feetToInch(feet) {
  var result = feet * 12;
  return result;
}
var output = feetToInch(12);
console.log(output + ' inch');
  

// 2. conversion centimeterToMeter / Function name must be centimeterToMeter 
 
function centimeterToMeter(centimeter) {
  var result = centimeter / 100;
  return result;
}
var output = centimeterToMeter(1000);
console.log(output);

  

// 3. Calculation / declare function / user can input 3 parameter / output result all books pages 
// requirement 
// book1 has 100 pages 
// book2 has 200 pages 
// book3 has 300 pages 
 
function bookPages(book1, book2, book3) {
  var firstBook = 100;
  var secondBook = 200;
  var thirdBook = 300;
  var result = book1 * firstBook + book2 * secondBook + book3 * thirdBook;
  return result;
}

var myAllBooks = bookPages(5, 3, 2);
console.log(myAllBooks);

  

// 4. declare an array of your 3 best friends name and return bigger name 

 
var friendName = ['Nazmul', 'akash', 'shohag24', 'NazmulHassan'];

function bestFriends(friends) {
  let biggerFriends = '';
  for(let i = 0; i < friends.length; i++){
    var friendsName = friends[i];
    if(friendsName.length > biggerFriends.length ){
      biggerFriends = friendsName;
    }
  }
  return biggerFriends;
}

var output = bestFriends(friendName);
console.log(output);
  

// 5. declare a number of Array and stop loop when get negative number 

let arr = [20, 60, 66, 74, 72, 79, 80, 85, 90, -5, -8, 10, 50];

function getOnlyPositive(num) {
  let getNewValue = [];
  for(let i = 0; i < num.length; i++){
    if(num[i] < 0){
      break
    } 
    getNewValue.push(num[i]);
  }
  return getNewValue;
}

var output = getOnlyPositive(arr);
console.log(output);