// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Lets code this badboii. 

// User Inputs

var userLower;
var userUpper;
var userNumeric;
var userSpecial ;

// Declare Inputs. Could have used text.toUpperCase for upperChar's .. but.. let's not complicate things. 
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = [1,2,3,4,5,6,7,8,9,0];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","~","+","-","<",">","?","|",";"];

//Declare Vars for clicking "ok", password output, and user selections
var okay;
var password;
var selections;

// Our Password Generating Function 
function generatePassword() {
  okay = prompt("Choose how many characters. Selection must be between 8 and 128");

  var selectedChar = [];


// Prompt user for number between 8-128. Define parameters greater than 8 or less than 128

 //If they don't give a number in criteria ask again.
   if (!okay || okay < 8 || okay > 128 ) {
      alert("Pick a number between 8 and 128");
      return null;
  } //ask to confirm our inputs 
    userLower = confirm("Will this contain lower case letters?");
    userUpper = confirm("Will this contain Upper Case letters?");
    userNumeric = confirm("Will this contain Numeric characters?");
    userSpecial = confirm("Will this contain Special Characters?");
  
    if(userLower){ 
    selectedChar = selectedChar.concat(lowerChar);
  }

  
  
  if(userNumeric){
    selectedChar = selectedChar.concat(numericChar);
  }
  
  if(userSpecial){
    selectedChar = selectedChar.concat(specialChar);

  }

  if(userUpper){
    selectedChar = selectedChar.concat(upperChar);
  }

  var selectedPass = []
  for (var i = 0; i < okay; i++) { 
    var chosenChar = randomChar(selectedChar)
    selectedPass.push(chosenChar)
    }

  return selectedPass.join('');

  function randomChar(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randomIndex]
    return randElement;
    
  }
}

  



// Acceptance Criteria
// Click Button to Generate Password, I'm presented with a series of prompts for password criteria
// I select which criteria to include in password 
// When prompted for length of password I just a length of at least 8 characters and no more than 128 characters
// Input should be validated and at least one character type should be selected
// When all prompts are answered then password is generated that matches the criteria 
// When password is generated then password is either displayed in alert or written to the page.