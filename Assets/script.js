// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt for the length of password (between 8 and 128)
  var passwordLength = window.prompt("How many characters do you need?\nPlease choose a number between 8 and 128");

  // Validate prompt response and use alert method to force user to correct response
  if (!passwordLength) {
    return placeholder;
  } else {
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Input not valid");
      passwordLength = window.prompt("How many characters do you need?\nPlease choose a number between 8 and 128");
    }
  }
  console.log(passwordLength);
    
  // Confirm method to ask user character type (like lowercase, uppercase, numeric, and/or special)
  var lowercaseChar = confirm('Do you to include lowercase characters?');
  var uppercaseChar = confirm('Do you to include uppercase characters?');
  var numericChar = confirm('Do you to include numeric characters?');
  var specialChar = confirm('Do you to include special characters?');

  console.log(lowercaseChar);
  console.log(uppercaseChar);
  console.log(numericChar);
  console.log(specialChar);

  // Validate confirm method and use alert method to force user to select at least one character type
  while (!lowercaseChar && !uppercaseChar && !numericChar && !specialChar) {
    window.alert("Please select at least 1 character type");
    lowercaseChar = confirm('Do you to include lowercase characters?');
    uppercaseChar = confirm('Do you to include uppercase characters?');
    numericChar = confirm('Do you to include numeric characters?');
    specialChar = confirm('Do you to include special characters?');
    }

  // Generate random password
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  
  // Create Array with characters chosen by user
  var passwordArray = [];
  
  if (lowercaseChar) {
    passwordArray = passwordArray.concat(lowercaseArray);
  }

  if (uppercaseChar) {
    passwordArray = passwordArray.concat(uppercaseArray);
  }

  if (numericChar) {
    passwordArray = passwordArray.concat(numericArray);
  }

  if (specialChar) {
    passwordArray = passwordArray.concat(specialArray);
  }
 

  console.log(passwordArray);
  console.log(passwordArray.length);
  var tempPassword = '';

  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * passwordArray.length);
    tempPassword += passwordArray[randomNum];
    
  }
  console.log(tempPassword);
  console.log(tempPassword.length);
  return tempPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

