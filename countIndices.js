var indices = {}

function countIndices(inputWords) {
  var joinedLetters = inputWords.split(" ").join("").toLowerCase();
  for (var i = 0; i < joinedLetters.length; i++) {
    var currentLetter = joinedLetters[i];
    if (indices[currentLetter] === undefined) {
      indices[currentLetter] = [i];
      } else {
      indices[currentLetter].push(i);
      }
  }
  return indices;
}


console.log(countIndices("Lighthouse in the house"));