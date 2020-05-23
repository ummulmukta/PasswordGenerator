// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variable declared/initialized for use in later functions
var len=0;

// Write password to the #password input
function writePassword() {
  //Endless loop till user makes the correct selection
  while(true){
  len=prompt("enter the length of the password ( 8 to 128 )");

if(len<8 || len>128){
  alert("The Password length must be between 8 to 128");

}
else{
  //Coming out of the lopp once correct choices have been made.
  break;
}
}
    var questions = [
        
      {q: "You have to choose uppercase in the password", a: true},
        {q: "You have to choose lowercase in the password", a: true},
        {q: "You have to choose special char in the password", a: true},
        {q: "You have to choose numeric value in the password", a: true},
       
      ];
      
      for( var i = 0; i < questions.length; i ++) {
        var answer = confirm(questions[i].q);
        
        if (answer!==questions[i].a) {
            alert("must need all ok");
            i--;
             }
        }
      
      var password = generatePassword();
   
      var passwordText = document.querySelector("#password");

   passwordText.value=password;
   
 
      
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  
  
  //Array of probable characters
  let values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let password="";
  for(var i=0; i<len;i++){
  password=password+values.charAt(Math.floor(Math.random()*Math.floor(values.length-1)))
  }
  
  return password;
  }
 