// HTML DOM ELEMENTS
const loadingGif = document.querySelector('.loading-gif');
let hidden = document.querySelector(".hidden");
let forms = document.querySelectorAll("form");
let input = document.querySelector("#email-input");
let signUpBtn = document.querySelector(".sign-up-button");
let passwordInput = document.querySelector("#password-input");
let displayValue = [];

// Keep Input Value from clearing on refresh
forms.forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

// Login Input Fields Authenification Section
signUpBtn.addEventListener("click", () => {

// Email Address Logic
  let inputValue = input.value;
  let incorrectEmailText = document.querySelector(".email-message");
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    input.placeholder = "Email or phone number";
    input.style.fontWeight = "normal";
    input.classList.remove("placeholder-color");
    input.style.backgroundColor = "";
    incorrectEmailText.textContent = "";
  } else {
    input.style.backgroundColor = "#ffcccb";
    input.placeholder = "Valid Email Required";
    input.style.fontWeight = "bold";
    input.classList.add("placeholder-color");
    incorrectEmailText.style.color = "red";
    incorrectEmailText.textContent = "Please enter a valid email";
  }
  input.value = "";

  // Password Logic
  // Regex Logic: Needs eight characters, 1 uppercase, 1 lowercase and 1 number
  let passwordValue = passwordInput.value;
  let incorrectPasswordText = document.querySelector(".password-message");

  displayValue.push(inputValue, passwordValue);
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  console.log(displayValue);
  if (passwordValue.match(regex)) {
    passwordInput.style.backgroundColor = "";
    document.querySelector("#password-input").placeholder = "Password";
    incorrectPasswordText.textContent = "";
    passwordInput.classList.remove("placeholder-color");
    passwordInput.style.fontWeight = "normal";
  } else {
    passwordInput.style.backgroundColor = "#ffcccb";
    document.querySelector("#password-input").placeholder =
      "Incorrect Password";
    passwordInput.classList.add("placeholder-color");
    passwordInput.style.fontWeight = "bold";
    incorrectPasswordText.textContent =
      "Needs 8 characters, 1 uppercase/lowercase and 1 number";
    incorrectPasswordText.style.color = "red";
  }
  passwordInput.value = "";

  // CSS TO CHANGE THE LOOK OF THE BUTTON WHEN CLICKED
  if (
    inputValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) &&
    passwordValue.match(regex)
  ) {
    signUpBtn.style.backgroundColor = "#e5091485";
    hidden.style.opacity = "0";
    loadingGif.style.display = "block";
  }

  // CONDITION TO GET ME OVER TO THE MOVIE PAGE WHEN THE LOGIC IS CORRECT 
  setTimeout(() => {
    if (
      inputValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) &&
      passwordValue.match(regex)
    ) {
      location.href = "/movies.html";
    }
  }, 1000);
});




