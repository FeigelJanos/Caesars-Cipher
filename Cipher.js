function rot13(str) { // LBH QVQ VG!
  //Create an array for every letter of the ABC
  const abc=["A", "B", "C", "D", "E", "F", "G", "H", "I",
             "J", "K", "L", "M", "N", "O", "P", "Q", "R",
             "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //create an array of the input characters
  const inputArr=str.split("");
  //create a var for the answer string
  let answer="";
  
  //Walk through the inputArr
  for (let i=0; i<inputArr.length; i++){
    
  }
  //If the element does not equal a letter, concatenate into the answer unchanged
  //If the element is a letter move it 13 positions to the right in the abc array
  //and return that element
  //If it would run over the array, step from the beginning with however many steps it would overrun by
  //Then add the letter to the answer string
  
  //return the answer
  return answer;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
