// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click",writePassword);


function writePassword(){
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // var firstPrompt = (prompt("How long do you want your password to be(must be between 8 and 128"));


  // using code from https://www.codespeedy.com/how-to-generate-a-random-password-in-javascript/ the below code is generating random passwords, I've hard-coded the max and min lengths for the sake of testing. 
  // now I need to reintroduce the prompt commented out above, plus all the other questions, add 'for loops' for each, and split all the character options below into seperate variables and recombine them depending on user selection. 
  
  var max = 128
  var min = 8
  var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  return randPassword;
}




// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
