const emailForm = document.getElementById('sign-in-email');
const emailMessage = document.querySelector('.email-message');
const passwordMessage = document.querySelector('.password-message');
const submitButton = document.querySelector('.sign-up');
const buttonContainer = document.querySelector('.red-button');
const loadingGif = document.querySelector('.loading-gif');
let passwordBar = document.getElementById('password-input');
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


// Testing to see if this can work once the screen size is 500px width
// function mobileButton(){
//     let w = window.innerWidth;
//     if(w = '500px'){
//         submitButton.style.padding = '30px 150px';
//     }
// }

// function delay() {
//     setTimeout( () => 
//     { location.href = '/movies.html'}, 2000 
//     );
// }

submitButton.addEventListener('click', function () {
    const passwordValue = passwordBar.value
    const emailValue = emailBar.value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        if (regx.test(emailValue)) {
            emailMessage.textContent = ''
        } else {
            emailMessage.textContent = 'Please enter a valid email.';    
        }
        if(passwordValue.length > 4 && passwordValue.length < 20){
            passwordMessage.textContent = ''
        } else {
            passwordMessage.textContent = 'Your password must contain between 4 and 20 characters.'
        }
        if(regx.test(emailValue) && passwordValue.length > 4 && passwordValue.length < 20){
            setTimeout(() => {
                submitButton.style.backgroundColor = '#e5091485';
                submitButton.textContent = "";
                // loadingGif.style.display = 'block';
                // submitButton.style.padding = "15px 90px";
                // mobileButton()
                delay()
            }, 1000);
        }
})


