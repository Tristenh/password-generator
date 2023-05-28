// Assignment code here
let lowerCaseList = ("abcdefghijklmnopqrstuvwxyz");
let upperCaseList = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let numberList = ("1234567890");
let specialList = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

function rangeSet(){
  while(true){
    let range = prompt("Enter range between 8 and 126");
    if ((range < 8) || (range > 126)){
      alert("Invalid range, please try again")
    }
    else{
      return range
    }
  }
};
function generatePassword(){
  let range = rangeSet()
  let characterList = "";
  if (confirm("you want lower case characters ?")){
    characterList += lowerCaseList;
  }
  if (confirm("you want upper case characters ?")){
    characterList += upperCaseList;
  }
  if (confirm("you want number characters ?")){
    characterList += numberList;
  }
  if (confirm("you want special characters ?")){
    characterList += specialList;
  }
  if (characterList === ""){
    alert("you need to pick at least one option")
    return characterList
  }
  let password = ""
  for (let i = 0; i < range; i ++){
    let randomIndex = Math.floor(Math.random() *characterList.length)
    password += characterList[randomIndex];
  }
  return password;
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

