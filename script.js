// Assignment Code
 var generateBtn = document.querySelector("#generate");
// //Creating the criteria for password selection
// //Lowercase letters
 function generatePassword() {

  var passwdlength; 

  //password length and selection criteria is set
  do {

        passwdlength=Number(window.prompt("What is the maximum length of your password between the span of 8-128 characters?"));
        var isValidInput = Number.isInteger(passwdlength) && (passwdlength > 7 && passwdlength < 129)
        if (!isValidInput) {
            alert("Please enter only numbers between 8-128!");
        }
      }while (!isValidInput);
  var confirmLowerCase;
  var confirmUpperCase;
  var confirmSpecialCharacter;
  var confirmNumericCharacter;

  //type of characters input from the user
  do {

        confirmLowerCase = window.confirm("do you need a lowercase letter"); 
        console.log('lowercase : ', confirmLowerCase);
        confirmUpperCase = window.confirm("do you need a uppercase letter");
        console.log('uppercase : ', confirmUpperCase);

        confirmSpecialCharacter = window.confirm("do you need a special character");
        console.log('specialchar : ', confirmSpecialCharacter);

        confirmNumericCharacter = window.confirm("do you need a number");
        console.log('number : ', confirmNumericCharacter);

        var isAtleastOneCriteriaSelected=(confirmLowerCase || confirmUpperCase || confirmSpecialCharacter || confirmNumericCharacter);
        if (!isAtleastOneCriteriaSelected)
        {
          console.log('----Select atleast 1 criteria----');
          alert("You must select 'ok' for atleast one of the prompts");
        }
    }while(!isAtleastOneCriteriaSelected);

  alert('collected password criteria sucessfully');


  var generatedPassword = getValidPassword(confirmLowerCase, confirmUpperCase, confirmSpecialCharacter, confirmNumericCharacter, passwdlength);

  return generatedPassword;
}

//password validated against the generated regular expression
function getValidPassword(confirmLowerCase, confirmUpperCase, confirmSpecialCharacter, confirmNumericCharacter, passwordLength) {
  
  var regExStart='^';
  var regExEnd='$';
  var lowerCaseRegEx='(?=.*[a-z])';
  var upperCaseRegEx='(?=.*[A-Z])';
  var specialCharRegEx='(?=.*[!@#$%])';
  var numericRegEx='(?=.*[0-9])';
  var lengthRegEx='.{'+passwordLength+'}'

  const alphaLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphaUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacters = "!@#$%" ;
  const numbers = "0123456789";


  let regexString=regExStart, userSelectedCharacters='';
  if(confirmLowerCase) 
  {
    regexString = regexString + lowerCaseRegEx;
    userSelectedCharacters = userSelectedCharacters + alphaLowerCase
  } 
  console.log('After lowercase condition regexString value : ', regexString)
  console.log('After lowercase condition userSelectedCharacters value : ', userSelectedCharacters)

  if(confirmUpperCase) 
  {
      regexString= regexString+upperCaseRegEx;
      userSelectedCharacters = userSelectedCharacters + alphaUpperCase
  }
  console.log('After uppercase condition regexString value : ', regexString)
  console.log('After uppercase condition userSelectedCharacters value : ', userSelectedCharacters)

  if(confirmSpecialCharacter)
  {
    regexString= regexString+specialCharRegEx;
    userSelectedCharacters = userSelectedCharacters + specialCharacters

  }
  console.log('After splchar condition regexString value : ', regexString)
  console.log('After splchar condition userSelectedCharacters value : ', userSelectedCharacters)

  if(confirmNumericCharacter)
  {
    regexString= regexString+numericRegEx;
    userSelectedCharacters = userSelectedCharacters + numbers
  }
  regexString=regexString+lengthRegEx+regExEnd
  console.log('After numeric condition regexString value : ', regexString);
  console.log('After numeric condition userSelectedCharacters value : ', userSelectedCharacters);

  let generatedPassword, isPasswordMatchPattern=false;
  var passwordPattern = new RegExp(regexString);
  console.log('passwordPattern value : ', passwordPattern)

  do {
    generatedPassword = passwdGenerate(passwordLength, userSelectedCharacters);
    console.log('generatedPassword value inside do while : ', generatedPassword)
    isPasswordMatchPattern = passwordPattern.test(generatedPassword)
    console.log('isPasswordMatchPattern do while : ', isPasswordMatchPattern)
  } while(!isPasswordMatchPattern)

  console.log('generatedPassword value : ', generatedPassword)
  return generatedPassword;

}

//password generation
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
generateBtn.addEventListener("click", writePassword);
