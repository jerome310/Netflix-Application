// START OF INPUT LOGIC

signUpBtn.addEventListener("click", () => {
  //Email Address Logic
  let inputValue = input.value;
  //displayValue.push(inputValue);
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    input.classList.add("correct-placeholder-color");
    input.style.backgroundColor = "";
    document.querySelector(".email-input").placeholder = "Email Address";
  } else {
    input.style.backgroundColor = "#ffcccb";
    document.querySelector(".email-input").placeholder = "Valid Email Required";
    input.classList.add("wrong-placeholder-color");
  }
  input.value = "";

  // Password Logic
  // Regex Logic: Needs eight characters, 1 uppercase, 1 lowercase and 1 number
  let passwordValue = password.value;
  let incorrectPasswordText = document.querySelector(
    ".incorrect-password-text"
  );
  displayValue.push(inputValue, passwordValue);
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  console.log(displayValue);
  if (passwordValue.match(regex)) {
    password.style.backgroundColor = "";
    document.querySelector(".password-input").placeholder = "";
    incorrectPasswordText.textContent = "";
    incorrectPasswordText.style.color = "";
  } else {
    password.style.backgroundColor = "#ffcccb";
    document.querySelector(".password-input").placeholder =
      "Incorrect Password";
    password.classList.add("incorrect-password-color");
    incorrectPasswordText.textContent =
      "Needs 8 characters, 1 uppercase/lowercase and 1 number";
    incorrectPasswordText.style.color = "#ffcccb";
  }
  password.value = "";
});

// END OF INPUT LOGIC
