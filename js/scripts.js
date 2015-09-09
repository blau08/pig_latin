var pig_latin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");
  var rest_of_word = "";
  var beginning_of_word = "";
  var foundVowel = false;

  letters.forEach(function(letter) {
    if (!foundVowel && vowels.indexOf(letter) != -1) {
      foundVowel = true;
    }
    if (!foundVowel) {
      rest_of_word += letter;
    } else {
      beginning_of_word += letter;
    }
  });

  return beginning_of_word + rest_of_word + "ay";
};
