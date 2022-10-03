// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiceArray = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ':', '"', '+', '[', ']', '{', '}'];
var uppererArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArr = ['0','1','2','3','4','5','6','7','8','9']


generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();

    if(correctPrompts) {
      var finPassword = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = finPassword;

    } else {
        passwordText = "";
    }

}

function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomLetter = Math.floor(Math.random() * choiceArray.length);
      password = password + choiceArray[randomLetter];
    }
    return password;
}

function getPrompts() {
  choiceArray = [];
  
  characterLength = parseInt(prompt("Select between 8 and 128 characters"));
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }
  
  if (confirm("Would you like to use special characters?")) {
      choiceArray = choiceArray.concat(specialCharArr);
  }

  if (confirm("Would you like to use lower-case characters?")) {
  choiceArray = choiceArray.concat(lowerArr);
  }

  if (confirm("Would you like to use upper-case characters?")) {
  choiceArray = choiceArray.concat(upperArr);
  }

  if (confirm("Would you like to use numbers?")) {
  choiceArray = choiceArray.concat(numArr);
  }
  return true;
}


