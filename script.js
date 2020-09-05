// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click",testClick);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function testClick(){
  console.log("clicked")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
