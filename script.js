// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordLength = function getRandomLenth(min, max) {
    min = Math.ceil(8);
    max = Math.floor(128);
    return Math.floor(Math.random() * (max - min) + min);

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var special = "!@#$%^&*()";
    var passwordLength = randomLength

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);