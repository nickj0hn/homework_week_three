
var generateBtn = document.querySelector("#generate").addEventListener("click",writePassword);

// have separated out character options, lowercase will be the default and remains 'passwordChars' 
var passwordNum = "0123456789";
var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordSpec = "#@!%&()/";

var passwordChars = "abcdefghijklmnopqrstuvwxyz";

function writePassword(){
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var passwordLength = (prompt("How long do you want your password to be? (must be between 8 and 128)"));
// used while statement to add restrictions on length. (https://www.w3schools.com/JSREF/jsref_while.asp)
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("Password length must be between 8 and 128 Please re-enter preference.");
    var passwordLength = (prompt("How long do you want your password to be? (must be between 8 and 128)"));
    } 
  // using code from https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box in order to plug it in to code below
  var userLengthChoice = parseInt(passwordLength);

  // using 'confirm() Method' - https://www.w3schools.com/jsref/met_win_confirm.asp 
  var upperCase = (confirm("Do you wish to include uppercase characters?"));
    if (upperCase == true) {
      var passwordChars = passwordChars + passwordUpper;
    }
  var upperCase = (confirm("Do you wish to include special characters?"));
  if (upperCase == true) {
   var passwordChars = passwordChars + passwordSpec;
    }
  var upperCase = (confirm("Do you wish to include numbers?"));
   if (upperCase == true) {
     var passwordChars = passwordChars + passwordNum;
     }
  // using code from https://www.codespeedy.com/how-to-generate-a-random-password-in-javascript/ 
  var randPassword = Array(userLengthChoice).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  return randPassword;
}