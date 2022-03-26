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

// Prompt user for number between 8-128. Define paramaters greater than 8 or less than 128
  if (okay < 8 || okay > 128) {
    alert("Please pick a number between 8 and 128");
  } //If they don't give a number in criteria ask again.
    else if (!okay) {
      okay = prompt("Pick a number between 8 and 128");
  } //ask to confirm our inputs 
    else {
    userLower = confirm("Will this contain lower case letters?");
    userUpper = confirm("Will this contain Upper Case letters?");
    userNumeric = confirm("Will this contain Numeric characters?");
    userSpecial = confirm("Will this contain Special Characters?");
  }
   //create selection conditions for each combination of selections.  Concatenate the selections together. Maybe revisit this. There's almost definitely an easier way to do this. 
  // If user does !NOT! select anything ask them to make a selection.
    if (userLower && userUpper && userNumeric && userSpecial){
      selections = lowerChar.concat(upperChar, numericChar, specialChar);
    }
    
    else if (userUpper && userNumeric && userSpecial){
      selections = upperChar.concat(numericChar, specialChar);
    }

    else if (userLower && userNumeric && userSpecial){
      selections = lowerChar.concat(numericChar, specialChar);
    }

    else if (userLower && userUpper && userSpecial){
      selections = lowerChar.concat(upperChar, specialChar);
    }

    else if (userLower && userNumeric && userUpper){
      selections = lowerChar.concat(numericChar, upperChar);
    }

    else if (userLower && userUpper){
      selections = lowerChar.concat(upperChar);
    }

    else if (userLower && userNumeric){
      selections = lowerChar.concat(numericChar);

    }

    else if (userLower && userSpecial){
      selections = lowerChar.concat(userSpecial);
    }

    else if (userNumeric && userSpecial){
      selections = numericChar.concat(userSpecial);
    }

    else if (userNumeric && userUpper) {
      selections = numericChar.concat(upperChar);
    }

    else if (userLower){
      selections = lowerChar;
    }

    else if (userUpper){
      selections = upperChar;
    }

    else if (userNumeric) {
      selections = numericChar;
    }

    else if (userSpecial) {
      selections = specialChar;
    
    }

    else if (!userLower && !userUpper && !userNumeric && !userSpecial) {
      selections = alert("Please make a selection.");
      }

    
   console.log(selections);
    }

//...Give up all hope below. 




  //   for (var i = 0; i < okay; i++) {
  //     var randomSelections = selections[Math.floor(Math.random() * selections.length)];
      
  //   }

  // console.log(randomSelections);
    
  

    // Mix up the selection
    var shuffledSelections = Math.floor(Math.random() * selections.length);

    console.log(shuffledSelections);

    //Assign Password a slice from selections  the length okay (8-128), starting at the first number. 
    
    password = shuffledSelections.slice(0, okay.length);

    //Alert the user "Your password is (their new password)"
    alert("Your password is " +  password);
  





  
    








// Acceptance Criteria
// Click Button to Generate Password, I'm presented with a series of prompts for password criteria
// I select which criteria to include in password 
// When prompted for length of password I just a length of at least 8 characters and no more than 128 characters
// Input should be validated and at least one character type should be selected
// When all prompts are answered then password is generated that matches the criteria 
// When password is generated then password is either displayed in alert or written to the page.