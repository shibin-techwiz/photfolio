const name = document.getElementById("name");

const email = document.getElementById("email");

const subject = document.getElementById("subject");

const message = document.getElementById("message");

const form = document.getElementById("form");

const name_error = document.getElementById("name_error");

const email_error = document.getElementById("email_error");

const password_error = document.getElementById("password_error");

form.addEventListener("submit", (e) => {
  var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.value === "" || name.value == null) {
    e.preventDefault();
    name_error.innerHTML = "name is required";
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = "valid email is required";
  }
  if (password.value.length <= 5) {
    e.preventDefault();
    password_error.innerHTML = "password more than 5 charachteer";
  }
});
