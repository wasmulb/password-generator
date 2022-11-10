// Arrays need for all character cases

var numbers = ["1","2","3","4","5","6","7","8","9","0"];

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}","|",";",":","'","<",">",",",".","/","?"]

var pWordArray = [""]

//Questionare for application
function overallGen () {
var passwordLength = prompt("How many characters does your password require?")
if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128")
  }
var numericals = confirm("Does your password require numericals?")
var uppercase = confirm("Does your password require uppercase letters?")
var lowercase = confirm("Does your password require lower case letters?")
var special = confirm("Does your password require special characters? (i.e. !, @, or $)")

//Makes a new array based on answered questions

if (numericals === true) {
var pWordArray = numbers.concat(pWordArray);
}

if (uppercase === true) {
    var pWordArray = upperCaseLetters.concat(pWordArray);
}

if (lowercase === true) {
    var pWordArray = lowerCaseLetters.concat(pWordArray);
    }
    
if (special === true) {
        var pWordArray = specialChars.concat(pWordArray);
    }

//Actual function that generates the password

function genPword() {
    var pWord = document.getElementById("password");
    var newPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * (pWordArray.length));
        newPassword = newPassword + pWordArray[randomNumber];
        password.innerHTML = newPassword
}
console.log(newPassword)
}

genPword ()
}
//Don't delete (Starter code not used)
// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);