function clearAll() {
    localStorage.clear();
}

function onRegister(event) {
    event.preventDefault();

    let username = document.getElementById('username_register');
    let email = document.getElementById('email_register');
    let password = document.getElementById('password_register');
    let passwordConfirm = document.getElementById('passwordconfirm_register');
    let passwordError = document.getElementById('password_register_error');
    let usernameError = document.getElementById('username_register_error');
    let passwordConfirmError = document.getElementById('password_confirm_register_error');
    let emailError = document.getElementById('email_register_error');

    let formData = [[username.value], [email.value], [password.value], [passwordConfirm.value]];
    let localStorageData = window.localStorage.getItem(username.value, formData);
    if (localStorageData) {
        usernameError.innerHTML = "Username already exists";
        setTimeout(() => {usernameError.innerHTML = ""}, 3000);
    }else if(email.value.length < 10 && username.value.length < 4){
        emailError.innerHTML = "Email must be at least 10 characters";
        setTimeout(() => {emailError.innerHTML = ""}, 3000);
        usernameError.innerHTML = "Username must be at least 4 characters";
        setTimeout(() => {usernameError.innerHTML = ""}, 3000);
    } else if(username.value.length < 4){
        usernameError.innerHTML = "Username must be at least 4 characters";
        setTimeout(() => {usernameError.innerHTML = ""}, 3000);
    }else if(email.value.length < 10){
        emailError.innerHTML = "Email must be at least 10 characters";
        setTimeout(() => {emailError.innerHTML = ""}, 3000);
    }else if(email.value === username.value){
        emailError.innerHTML = "Email cannot match username";
        setTimeout(() => {emailError.innerHTML = ""}, 3000);
    } else{
        if(passwordConfirm.value === password.value){
            if(passwordConfirm.value.length < 8){
                passwordError.innerHTML = "Password has to be at least 8 characters";
                setTimeout(() => {passwordError.innerHTML = ""}, 3000);
            } else if(username.value === passwordConfirm.value){
                passwordError.innerHTML = "Password cannot match username";
                setTimeout(() => {passwordError.innerHTML = ""}, 3000);
            } else if(email.value === passwordConfirm.value){
                passwordError.innerHTML = "Password cannot match email";
                setTimeout(() => {passwordError.innerHTML = ""}, 3000);
            } else{ 
                window.localStorage.setItem(username.value, JSON.stringify(formData));
                alert("Account has been created");
                window.location = 'signin.html';
            }
            
        } else{
            passwordError.innerHTML = "Passwords do not match";
            setTimeout(() => {passwordError.innerHTML = ""}, 3000);
        }
     };
  }
