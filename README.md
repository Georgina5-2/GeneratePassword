# GeneratePassword
## Random Password Generation
# Description
## User Story
* AS AN employee with access to sensitive data
* I WANT to randomly generate a password that meets certain criteria
* SO THAT I can create a strong password that provides greater security
## Acceptance Criteria
* GIVEN I need a new, secure password
* WHEN I click the button to generate a password
* THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
* THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
* THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password
* THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
* THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
* THEN a password is generated that matches the selected criteria
* WHEN the password is generated
* THEN the password is either displayed in an alert or written to the page
# Getting Started
## Dependencies
## Prerequisites
### Browsers - Chrome, Safari, Mozilla Firefox
* Operating Systems - Windows and Mac
* Version Control Systems - Git and Github
* Coding Platform - Microsoft Visual Studio Code *Programming languages - HTML *Stylesheets - CSS *Script-file - Javascript
* Commands - Git and MS-DOS commands
### Installations and Repository creations
* Install - Gitbash, Microsoft Visual Studio Code
* Repository - Go to 'Github.com' and create a public repository in your Github account
* Execution of the program
Go to Github.com, create a public account, and go to 'Create Repository' at the top right corner of the page

![Screenshot_20230214_103135](https://user-images.githubusercontent.com/122113060/218920561-09bcec22-68c1-49e5-97d9-f9e90d15781b.png)

Click on the tab 'Code' and copy the link to the repository

![Screenshot_20230214_102708](https://user-images.githubusercontent.com/122113060/218920142-56777485-df4a-4196-ad5f-3321282cf427.png)

* Go to the Gitbash window and go to the desktop folder and use the following command: 'git clone (github repository link copied earlier from the repository)'
* The Git folder with the same repository name is created in the present directory
* Type 'cd (folder name)' and type 'code .' to go to Visual studio code to type the code. It appears like this after the functionalities are added to the Javascript code:

* First the value of the password length is validated and the character types are selected by the user

![Screenshot_20230214_103451](https://user-images.githubusercontent.com/122113060/218922425-ac0e6c0b-a562-40c7-935c-45883108ab14.png)

* Then the regular expression is build based upon the types of characters that the user had selected
 
![Screenshot_20230214_103524](https://user-images.githubusercontent.com/122113060/218922490-368aade1-1f91-4353-b1b8-4716869de984.png)

* The password is then generated and checked to see if it matches with the pattern of the regular expression for that which was generated earlier

![Screenshot_20230214_103541](https://user-images.githubusercontent.com/122113060/218922559-4518f805-31b6-4d23-9fc7-d13b258e93f5.png)

![Screenshot_20230214_103614](https://user-images.githubusercontent.com/122113060/218922735-1a4ff116-38ce-40e5-9666-3689585f0d89.png)

* Finally display the password generated on the user interface

![Screenshot_20230214_103629](https://user-images.githubusercontent.com/122113060/218922802-a64a7159-aecc-4f7b-af16-b337465ca29b.png)

* Add the changes done then and there to the Github repository by doing the following steps provided in the screenshots: Add the files and commit the changes from the Git to the Github repository by going to the local Git repository

![Screenshot_20230214_105310](https://user-images.githubusercontent.com/122113060/218925269-9e4157c1-6253-43c0-b2b1-6895d0bc6462.png)

![Screenshot_20230214_105330](https://user-images.githubusercontent.com/122113060/218925303-495f973b-c115-41e9-b4ed-9e78a2dea4c0.png)

* The changes committed to the Github folder looks like this

![Screenshot_20230214_105705](https://user-images.githubusercontent.com/122113060/218925529-9833bf60-944e-434d-b45f-38464a858f3e.png)

* Deploy the code using Github Pages

# Acknowledgements:

https://dev.to/code_mystery/random-password-generator-using-javascript-6a

https://www.javascripttutorial.net/javascript-string-match/

https://www.sitepoint.com/test-string-match-regex-javascript/#:~:text=Then%2C%20you%20can%20use%20the,the%20regular%20expression%20or%20not.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor








