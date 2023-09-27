const emailForm = document.getElementById('sign-in-email');
const emailMessage = document.querySelector('.email-message');
const passwordMessage = document.querySelector('.password-message');
const submitButton = document.querySelector('.sign-up');
const buttonContainer = document.querySelector('.red-button');
const loadingGif = document.querySelector('.loading-gif');
let passwordBar = document.getElementById('password-input');
let hidden = document.querySelector(".hidden");
let emailBar = document.getElementById('email-input');

emailBar.addEventListener('keyup', () => {
    let emailValue = emailBar.value;
    if (emailValue != "") {
        emailBar.style.border = 'none';
    }
})

passwordBar.addEventListener('keyup', () => {
    let passwordValue = passwordBar.value
    if (passwordValue != "") {
        passwordBar.style.border = 'none'
    }
})

// Delay to moving on movies page
function delay() {
    setTimeout( () => 
    { 
        location.href = '/movies.html'
        hidden.style.opacity = "1";
        loadingGif.style.display = "none";
        submitButton.style.backgroundColor = '#e50914';
    }, 1000 
    );
}

// Need to add inside the if statement you clearing the value of the email and password input value
function formClear() {
    const passwordValue = passwordBar.value;
    const emailValue = emailBar.value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    setTimeout(() => {
        if (regx.test(emailValue)) {
          emailMessage.textContent = "";
          emailBar.value = "";
        } else {
          emailMessage.textContent = "Please enter a valid email.";
        }
        if (passwordValue.length > 4 && passwordValue.length < 20) {
          passwordMessage.textContent = "";
          passwordBar.value = "";
        } else {
          passwordMessage.textContent =
            "Your password must contain between 4 and 20 characters.";
        }

    }, 1000);

    if (
      regx.test(emailValue) &&
      passwordValue.length > 4 &&
      passwordValue.length < 20
    ) {
      submitButton.style.backgroundColor = "#e5091485";
      hidden.style.opacity = "0";
      loadingGif.style.display = "block";
    }
    delay();
}

submitButton.addEventListener('click', function () {
     formClear();
})


