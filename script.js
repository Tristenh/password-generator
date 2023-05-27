// Assignment code here
let lowerCaseList = ("abcdefghijklmnopqrstuvwxyz");
let upperCaseList = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numberList = ("1234567890");
let specialList = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
password = "";

function generatePassword(){
 if (confirm("you want lower case characters ?")){
  password += lowerCaseList;
 }
 if (confirm("you want upper case characters ?")){
  password += upperCaseList;
}
 if (confirm("you want number characters ?")){
  password += numberList;
}
 if (confirm("you want special characters ?")){
  password += specialList;
}
if (password === ""){
  alert("you need to pick at least one option")
}
else(confirm === "false")
  password = ""
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
