var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var special = "!@#$%^&*()_+-={}[]:".split("");

// Assignment code here
function generatePassword() {
  var prePassword = [];
  var postPassword = "";

  var passwordLength = prompt(
    "How long would you like your password to be? (8-128 characters)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters. Please Retry!");
    generatePassword();
  } else {
    if (confirm("Would you like to include uppercase letters?")) {
      prePassword = prePassword.concat(upperCase);
    }
    if (confirm("Would you like to include lowercase letters?")) {
      prePassword = prePassword.concat(lowerCase);
    }
    if (confirm("Would you like to include numbers?")) {
      prePassword = prePassword.concat(numbers);
    }
    if (confirm("Would you like to include special characters?")) {
      prePassword = prePassword.concat(special);
    }
    if (prePassword.length == 0) {
      alert("You must choose at least one character type. Please Retry!");
      generatePassword();
    } else {
      for (var i = 0; i < passwordLength; i++) {
        postPassword =
          postPassword +
          prePassword[Math.floor(Math.random() * prePassword.length)];
      }
    }
    return postPassword;
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
