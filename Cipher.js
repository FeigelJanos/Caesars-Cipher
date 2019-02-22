function rot13(str) { // LBH QVQ VG!
  //Create an array for every letter of the ABC
  const abc=["A", "B", "C", "D", "E", "F", "G", "H", "I",
             "J", "K", "L", "M", "N", "O", "P", "Q", "R",
             "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //create an array of the input characters
  const inputArr=str.split("");
  
  //create a var for the answer string
  let answerArr=[];
  
  
  //Walk through the inputArr
  for (let i=0; i<inputArr.length; i++){
     //If the element is a letter move it 13 positions to the right in the abc array
        switch(inputArr[i]){
            case "A":
            //and return that element
            answerArr.push(abc[13]);
            break;
            case "B":
            answerArr.push(abc[14]);
            break;
            case "C":
            answerArr.push(abc[15]);
            break;
            case "D":
            answerArr.push(abc[16]);
            break;
            case "E":
            answerArr.push(abc[17]);
            break;
            case "F":
            answerArr.push(abc[18]);
            break;
            case "G":
            answerArr.push(abc[19]);
            break;
            case "H":
            answerArr.push(abc[20]);
            break;
            case "I":
            answerArr.push(abc[21]);
            break;
            case "J":
            answerArr.push(abc[22]);
            break;
            case "K":
            answerArr.push(abc[23]);
            break;
            case "L":
            answerArr.push(abc[24]);
            break;
            case "M":
            answerArr.push(abc[25]);
            break;
         //If it would run over the array, step from the beginning with however many steps it would overrun by
            case "N": 
            //Then add the letter to the answer string
            answerArr.push(abc[0]);
            break;
            case "O":
            answerArr.push(abc[1]);
            break;
            case "P":
            answerArr.push(abc[2]);
            break;
            case "Q":
            answerArr.push(abc[3]);
            break;
            case "R":
            answerArr.push(abc[4]);
            break;
            case "S":
            answerArr.push(abc[5]);
            break;
            case "T":
            answerArr.push(abc[6]);
            break;
            case "U":
            answerArr.push(abc[7]);
            break;
            case "V":
            answerArr.push(abc[8]);
            break;
            case "W":
            answerArr.push(abc[9]);
            break;
            case "X":
            answerArr.push(abc[10]);
            break;
            case "Y":
            answerArr.push(abc[11]);
            break;
            case "Z":
            answerArr.push(abc[12]);
            break;
            //If the element does not equal a letter, concatenate into the answer unchanged
            default:
            answerArr.push(inputArr[i]);
            break;
        }
 
  }
  
  
  
  
 
   let answer=answerArr.join("");
   
  //return the answer
  return answer;
}
