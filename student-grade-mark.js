var marks = 100;


if (marks >= 80 && marks <= 100){
  console.log("You Got A+");
}
else if(marks >= 70 && marks <= 79){
  console.log("You Got A");
}
else if(marks >= 60 && marks <= 69){
  console.log("You Got A-");
}
else if(marks >= 50 && marks <= 59){
  console.log("You Got B");
}
else if(marks >= 40 && marks <= 49){
  console.log("You Got C");
}
else if(marks >= 33 && marks <= 39){
  console.log("You Got D");
}
else if(marks >= 0 && marks <= 32){
  console.log("Sorry, You are fail. Please try again next year");
}
else{
  console.log("Please input a valid Result From '0-100' ");
}

console.log(marks);