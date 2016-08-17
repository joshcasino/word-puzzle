$(document).ready(function() {
  function removeVowels(sentence) {
    for(i=0; i <= sentence.length; i++ ) {
      ["a", "e", "i", "o", "u"].forEach(function(vowel) {
        if (sentence[i] === vowel) {
          sentence = sentence.replace(sentence[i], "-");
        }
      })
    }
    return sentence;
  }

  $("form#wordPuzzle").submit(function(event) {
      var sentence = $("#sentence").val();
      $(".show-sentence").text(removeVowels(sentence));
      $("#sentence").hide();
     event.preventDefault();
  })
})
