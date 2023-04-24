// Assignment code here
function generatePassword() {
  //String of possible characters for the password to choose from
  const characters =
    "01233456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //length of the password, the for loop will iterate this many times.
  const passwordLength = 8;
  //temporary empty string that will have characters added to it.
  let randomPassword = "";

  for (i = 0; i <= passwordLength; i++) {
    //randomly select a character from the string of possible characters, Math.floor() will round the result down to the nearest whole number.  Math.random() creates a random decimal between 0 and 1 then is multiplied by the length of the string to get a random character placement.
    const randomCharacter = Math.floor(Math.random() * characters.length);
    //here we use the substring method to grab one character from the string and add it to the randomPassword value.
    randomPassword += characters.substring(
      randomCharacter,
      randomCharacter + 1
    );
  }
  //Once the for loop has finished the value of the randomPassword is returned out of the function.
  return randomPassword;
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
