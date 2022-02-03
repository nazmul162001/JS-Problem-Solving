
let arraName = ['abul', 'babul', 'kalam', 'jalam', 'balam', 'abul', 'kalam', 'jalam'];


function removeDuplicate(names) {
  const unique =[];
  for(let i = 0; i < names.length; i++){
    const element = arraName[i];
    if(unique.indexOf(element) == -1){
      unique.push(element);
    }
  }
  return unique;
}



let uniqueNames = removeDuplicate(arraName);
console.log(uniqueNames);






  // another way to write for loop
  // for(const element of names){
  //   console.log(element);
  // }