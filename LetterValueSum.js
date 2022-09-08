//Count letter value code a=1 b=2 ...

function getLetterValue(input) {
  let total = 0
  for(i=0;i<input.length;i++){
    total += input[i].charCodeAt()-96
  }
  return total
}

getLetterValue("cytotoxicity")