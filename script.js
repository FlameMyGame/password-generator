// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
    var password = "";
    var passwordText = document.querySelector("#password");
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var special = "!@#$%^&*()";

    var passwordLength;
    var flag = true;
    while (flag) {
        passwordLength = Number(prompt("Enter password length: 8-128 characters?"));

        if (passwordLength >= 8 && passwordLength <= 128) {
            flag = false;
        }
    }

    var includeCaps;
    var flag = true;
    while (flag) {
        includeCaps = prompt("Include caps? (Y/N)").toLowerCase();

        if (includeCaps == "y") {
            flag = false;
            lowerCase = lowerCase + upperCase;
        } else if (includeCaps == "n") {
            flag = false;
        }
    }

    var includeNumbers;
    flag = true;
    while (flag) {
        includeNumbers = prompt("Include numbers? (Y/N)").toLowerCase();

        if (includeNumbers == "y") {
            flag = false;
            lowerCase = lowerCase + numbers;
        } else if (includeNumbers == "n") {
            flag = false;
        }
    }

    var includeSpecial;
    flag = true;
    while (flag) {
        includeSpecial = prompt("Include special characters? (Y/N)").toLowerCase();

        if (includeSpecial == "y") {
            flag = false;
            lowerCase = lowerCase + special;
        } else if (includeSpecial == "n") {
            flag = false;
        }
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * lowerCase.length);
        password += lowerCase.substring(randomNumber, randomNumber + 1);
    }

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);