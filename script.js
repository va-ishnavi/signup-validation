//on click of the  login button
document.querySelector("#login").addEventListener("click", function () { //$('.btn').click(function(){})  (in jquery)
    //validate name
    const name = document.querySelector("#nameInput").value;
    //console.log(name);
    //validate email
    const email = document.querySelector("#emailInput").value;
    //validate password
    const password = document.querySelector("#passwordInput").value;
  
    //removing all error message
    document.querySelectorAll('small').forEach(el=>el.remove()); //remove all the error msgs before even checking starting
  
    
    if (!name) { //checking for name, it is not existing
      document.querySelector("#name-field").append(getErrorHtml("Name is mandatory field")); //(text)
    }
    
    if (!email) {
      document.querySelector("#email-field").append(getErrorHtml("Email is mandatory field"));
    }
    if (!password) {
      document.querySelector("#password-field").append(getErrorHtml("Atleast 6 Character"));
    }

    if(name== "Vaishnavi Gupta" && email=="vaishnavigupta123@gmail.com" && password== "123456"){
      alert("successful!")
    }
  });

   //to add this error text again nd again we create a new element.
     function getErrorHtml(text){
       const errorHtml = document.createElement('small'); //<small></small>
       errorHtml.className = "text-danger";
       errorHtml.textContent = text;
       return errorHtml;
     } 
 //get value

 
