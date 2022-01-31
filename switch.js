// normally

var color = 'yellow';

if(color == 'blue') {
  console.log('color is blue')
}
else if( color == 'red') {
  console.log('color is red');
}
else if( color == 'green') {
  console.log('color is green');
}
else if( color == 'blue') {
  console.log('color is blue');
}
else{
  console.log('color is black')
}


// use switch 

switch(color){
  case 'blue':
      console.log('color is blue');
      break;
  case 'red':
      console.log('color is red');
      break;
  case 'green':
      console.log('color is green');
      break;
  case 'magenta':
      console.log('color is magenta');
      break;
  default:
      console.log('color is black');
}