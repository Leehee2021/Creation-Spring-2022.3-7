function enterName(){
  var name = prompt("May I ask your name?");
  alert("Let's enjoy the game together " + name + "!");
}
enterName()

var allAnswers = [];
var allWords = ["elf","elk","ice","lie","ilk","file","lick",
                "life","like","lice","flick","fleck","fickle"];
function enterWord(){
  var answer = prompt("The word you came up is...");
    for (var i = 0; i < allWords.length; i++) {
      if (answer === allWords[i]){
      alert("That's a correct answer!");
      allAnswers.push(answer);
      var answer = ""
      document.getElementById("yourWords").innerHTML = "You have brainstormed the following words: " + allAnswers ;
    }
  }
  if (answer !== "") {
    alert("Sorry but the answer is wrong~");
  }
};


function myResult(){
  if (allAnswers.length < 13) {
  alert("you got the " + allAnswers.length + " out of all 13 possible words. Continue brainstorming?" );
  }
  else {
    alert("WOW! Are you genius?! You got them all correct! 13 out of 13!");
  }
}

function checkAnswers(){
  document.getElementById("theAnswer").innerHTML = "All 13 possible words are: " + allWords;
}

function hideAnswers(){
    document.getElementById("theAnswer").innerHTML = "All 13 possible words are:";
}
