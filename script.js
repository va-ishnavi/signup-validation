
document.querySelector("#login").addEventListener("click", function () { 
  //$('#login').click(function(){})  (in jquery)
    //validate name
    const name = document.querySelector("#nameInput").value;
    //$('#nameInput').val();(jQuery)
    const nameRegex =[/^[a-zA-Z]/]   
    console.log(name);
    //validate email
    const email = document.querySelector("#emailInput").value;
    const emailRegex = /^[\w]+@([\w\-.]+\.)+[\w]{3}/
    console.log(email);
    //validate password
    const password = document.querySelector("#passwordInput").value;
    const passwordRegex =  /^(?= .*\d)(?= .*[/w]){6}/
    console.log(password);
    //removing all error message
    document.querySelectorAll('small').forEach(el=>el.remove());
  
    
    if (!name) {
      document.querySelector("#name-field").append(getErrorHtml("Name is mandatory field")); //(text)
    }
    
    if (!email) {
      document.querySelector("#email-field").append(getErrorHtml("Email is mandatory field"));
    }
    if (!password) {
      document.querySelector("#password-field").append(getErrorHtml("Atleast 8 Character"));
    }
   //Verification
  //   if(name== "Vaishnavi Gupta" && email=="vaishnavigupta123@gmail.com" && password== "123456"){
  //     alert("successful!")
  //   }
  });

   //to add this error text again nd again we create a new element.
     function getErrorHtml(text){
       const errorHtml = document.createElement('small'); //<small></small>
       errorHtml.className = "text-danger";
       errorHtml.textContent = text;
       return errorHtml;
     } 
 
 var Details ={
  
  name: $('#nameInput').val(),
  email: $('#emailInput').val(),
  password: $('#passwordInput').val()
 }
  console.log(Details);
  


 
   

 
