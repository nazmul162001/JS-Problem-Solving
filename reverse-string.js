const greetings = 'Hello, how are you?';

function reverString(text) {
  let reverse = '';

  for(const letter of text){
    reverse = letter + reverse;
  }
  return reverse;
}

const reversed = reverString(greetings);
console.log(reversed);


