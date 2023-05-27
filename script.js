// Assignment code here
let lowerCaseList = ("abcdefghijklmnopqrstuvwxyz");
let upperCaseList = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numberList = ("1234567890");
let specialList = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

function generatePassword(){
 if (confirm("you want lower case characters ?")){
  lowerCaseList;
 }
 if (confirm("you want upper case characters ?")){
upperCaseList;
}
 if (confirm("you want number characters ?")){
numberList;
}
 if (confirm("you want special characters ?")){
specialList;
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
