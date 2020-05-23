// Assignment Code
var generateBtn = document.querySelector("#generate");


var len=0;

// Write password to the #password input
function writePassword() {
   
  while(true){
  len=prompt("enter the length of the password ( 8 to 128 )");

if(len<8 || len>128){
  alert("The Password length must be between 8 to 128");

}
else{
  break;
}
}
    var questions = [
        
      {q: "Do you want uppercase in the password", a: true},
        {q: "Do you want lowercase in the password", a: true},
        {q: "Do you want special char in the password", a: true},
        {q: "Do you want numeric value in the password", a: true},
       
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
  
  

  let values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let password="";
  for(var i=0; i<len;i++){
  password=password+values.charAt(Math.floor(Math.random()*Math.floor(values.length-1)))
  }
  
  return password;
  }
 