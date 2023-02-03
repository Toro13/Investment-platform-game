function onLogin(event) {
    event.preventDefault();

    let usernameLogin = document.getElementById('username_login');
    let password = document.getElementById('password_login');
    let localStorageData = JSON.parse(window.localStorage.getItem(usernameLogin.value));
    let passwordError = document.getElementById('password_login_error');
    let usernameError = document.getElementById('username_login_error')
    if(localStorageData){
        if(localStorageData[2] == password.value){
            window.localStorage.setItem('usernameLogin', usernameLogin.value);
            window.location = 'mainpage.html';
        } else{
            passwordError.innerHTML = "Passwords do not match";
            setTimeout(() => {passwordError.innerHTML = ""}, 3000);
        }
    } else{
        usernameError.innerHTML = "Account does not exist";
        setTimeout(() => {usernameError.innerHTML = ""}, 3000);
    }
}