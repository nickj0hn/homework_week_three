// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click",writePassword);

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

function writePassword(){
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var firstPrompt = (prompt("first prompt test"));
}




// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
