document.querySelector("#signup").addEventListener("click", function () {
  //validate
  const name = document.querySelector("#nameInput").value;
  const nameRegex = [/^[a-zA-Z]/];
  console.log(name);

  const email = document.querySelector("#emailInput").value;
  const emailRegex = /^[\w]+@([\w\-.]+\.)+[\w]{3}/;
  console.log(email);

  const password = document.querySelector("#passwordInput").value;
  const passwordRegex = /^(?= .*\d)(?= .*[/w]){6}/;
  console.log(password);
  //removing all error message
  document.querySelectorAll("small").forEach((el) => el.remove());

  if (!name) {
    document
      .querySelector("#namefield")
      .append(getErrorHtml("Name is mandatory field")); //(text)
  }

  if (!email) {
    document
      .querySelector("#emailfield")
      .append(getErrorHtml("Email is mandatory field"));
  }
  if (!password) {
    document
      .querySelector("#passwordfield")
      .append(getErrorHtml("Atleast 8 Character"));
  }
});

//to add this error text again nd again we create a new element.
function getErrorHtml(text) {
  const errorHtml = document.createElement("small"); //<small></small>
  errorHtml.className = "text-danger";
  errorHtml.textContent = text;
  return errorHtml;
}
