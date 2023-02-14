// Assignment Code
 var generateBtn = document.querySelector("#generate");
// //Creating the criteria for password selection
// //Lowercase letters
 function generatePassword() {

  var passwdlength;
  do {

    passwdlength=Number(window.prompt("What is the maximum length of your password between the span of 8-128 characters?"));
    var isValidInput = Number.isInteger(passwdlength) && (passwdlength > 7 && passwdlength < 129)
    console.log('isValidInput : ', isValidInput);
    console.log('Not isValidInput : ', !isValidInput);
    if (!isValidInput) {
        alert("Please enter only numbers between 8-128!");
      }
  }while (!isValidInput);
  var confirmLowerCase;
  var confirmUpperCase;
  var confirmSpecialCharacter;
  var confirmNumericCharacter;
  do {

        confirmLowerCase = window.confirm("do you need a lowercase letter"); 
        confirmUpperCase = window.confirm("do you need a uppercase letter");
        confirmSpecialCharacter = window.confirm("do you need a special character");
        confirmNumericCharacter = window.confirm("do you need a number");
        var isAtleastOneCriteriaSelected=(confirmLowerCase || confirmUpperCase || confirmSpecialCharacter || confirmNumericCharacter);


        if (!isAtleastOneCriteriaSelected)
        {
          alert("You must select 'ok' for atleast one of the prompts");
        }
    }while(!isAtleastOneCriteriaSelected);

  alert('collected password criteria sucessfully');
  // console.log('lowercase : ', confirmLowerCase);
  // console.log('uppercase : ', confirmUpperCase);
  // console.log('specialchar : ', confirmSpecialCharacter);
  // console.log('number : ', confirmNumericCharacter);

  var generatedPassword = getValidPassword(confirmLowerCase, confirmUpperCase, confirmSpecialCharacter, confirmNumericCharacter, passwdlength);

  return generatedPassword;
}

function getValidPassword(confirmLowerCase, confirmUpperCase, confirmSpecialCharacter, confirmNumericCharacter, passwordLength) {
  
  // var lowerCaseRegExp='^(?=.*[a-z])$';
  // var upperCaseRegExp='^(?=.*[A-Z])$';
  // var specialCharRegExp='^(?=.*[!@#$%^&*(),.?":{}|<>])$';
  // var numericRegExp='^[0-9]$';

  const alphaLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacters = "!@#$%" ;
  const numbers = "0123456789";


  var regexBuilder, userSelectedCharacters;
  if(confirmLowerCase) 
  {
    // regexBuilder = regexBuilder + lowerCaseRegExp;
    userSelectedCharacters = userSelectedCharacters + alphaLowerCase
  } 
  console.log('After lowercase condition regexBuilder value : ', regexBuilder)
  console.log('After lowercase condition userSelectedCharacters value : ', userSelectedCharacters)

  if(confirmUpperCase) 
  {
      // regexBuilder= regexBuilder+upperCaseRegExp;
      userSelectedCharacters = userSelectedCharacters + alphaUpperCase
  }
  console.log('After uppercase condition regexBuilder value : ', regexBuilder)
  console.log('After uppercase condition userSelectedCharacters value : ', userSelectedCharacters)

  if(confirmSpecialCharacter)
  {
    // regexBuilder= regexBuilder+specialCharRegExp;
    userSelectedCharacters = userSelectedCharacters + specialCharacters

  }
  console.log('After splchar condition regexBuilder value : ', regexBuilder)
  console.log('After splchar condition userSelectedCharacters value : ', userSelectedCharacters)

  if(confirmNumericCharacter)
  {
    // regexBuilder= regexBuilder+numericRegExp;
    userSelectedCharacters = userSelectedCharacters + numbers

  }
  console.log('After numeric condition regexBuilder value : ', regexBuilder);
  console.log('After numeric condition userSelectedCharacters value : ', userSelectedCharacters);

  let generatedPassword;
  generatedPassword = passwdGenerate(passwordLength, userSelectedCharacters);
  console.log('generatedPassword value : ', generatedPassword)

  return generatedPassword;

  // do {
  //   generatedPassword = passwdGenerate(passwordLength, userSelectedCharacters);
  // } while(generatedPassword.match(regexBuilder))

}

function passwdGenerate(passwdlength, characters)
{
  let result='';
  var charactersLength=characters.length;
  let counter=0;
  while(counter<passwdlength)
  {
    result+=characters.charAt(Math.floor(Math.random() * charactersLength));
    counter+=1;
  }
  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
