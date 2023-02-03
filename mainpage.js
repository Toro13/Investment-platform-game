let info = document.getElementById('info');
let infoRed = document.getElementById('infoRed');
let infoGreen = document.getElementById('infoGreen');
let balanceResult = document.getElementById('balance');
let usernameLogin = window.localStorage.getItem('usernameLogin');
let getUser = JSON.parse(window.localStorage.getItem(usernameLogin));
let workBtn = false;
let stakeOneBtn = false;
let stakeTwoBtn = false;
function mainPageLoad(){
    let signin = document.getElementById('signin');
    let signup = document.getElementById('signup');
    let logout = document.getElementById('logout');
    let noUser = document.getElementById('noUser');
    let title = document.getElementById('brand-title');
    window.localStorage.removeItem('usernameLogin');
    let formHolderContainer = document.getElementById('formHolderContainer');
    if(usernameLogin){
        signin.style.visibility = "hidden";
        signup.style.visibility = "hidden";
        logout.style.visibility = "visible";
        title.innerHTML = usernameLogin;
        signin.style.marginRight = "-200px";
        signup.style.marginRight = "-200px";
        noUser.style.visibility = "hidden";
        if(getUser[4]){
            finalBal = JSON.parse(getUser[4]);
            balanceResult.innerHTML = "Balance: " + finalBal;
        } else{
            finalBal = 100000;
            getUser.push([finalBal]);
            balanceResult.innerHTML = "Balance: " + finalBal;
        }
        } else{
        signin.style.visibility = "visible";
        signup.style.visibility = "visible";
        title.innerHTML = "Investment platform";
        logout.style.visibility = "hidden";
        title.style.marginRight = "50px";
        signup.style.marginRight = "-150px";
        signin.style.marginRight = "-10px";
        formHolderContainer.style.visibility = "hidden";
        }      
    
}
function logout(){
    usernameLogin = "";
    window.location = 'signin.html';
}
function workButton(event){
    event.preventDefault();
    if(stakeOneBtn == true || stakeTwoBtn == true){
        infoRed.innerHTML = "You are staking, you cant work and stake at the same time";
    } else{
        workBtn === true;
        if(info.innerHTML == "You are working a 5 second shift"){
            infoRed.innerHTML = "You are already working a shift";
        } else{
            info.innerHTML = "You are working a 5 second shift"
            setTimeout(() => { info.innerHTML = ""}, 5000);
            setTimeout(() => { infoRed.innerHTML = ""}, 5000);
            setTimeout(() => { 
            let workProfit = finalBal / 500;
            finalBal = finalBal + workProfit;
            balanceResult.innerHTML = "Balance: " + Math.round(finalBal);
            infoGreen.innerHTML = "You have made " + Math.round(workProfit) + " by working a 5 second shift";
            getUser[4] = [Math.round(finalBal)];
            window.localStorage.setItem(usernameLogin, JSON.stringify(getUser));
            setTimeout(() => { infoGreen.innerHTML = ""}, 5000);
            workBtn === false;
            }, 5000);
            if(info.innerHTML == "" && infoRed.innerHTML == ""){ 
            infoGreen.innerHTML = "";
            }
        }
    
    }
    
}
function stakeOne(event){
    event.preventDefault();
    if(workBtn == true){
        infoRed.innerHTML = "You are are working, you dont have time to stake";
    } else if(stakeTwoBtn == true || stakeOneBtn == true){
        infoRed.innerHTML = "You are already staking";
    } else{
        stakeOneBtn == true;
        let input = document.getElementById('inputOneFunction');
        finalBal = JSON.parse(getUser[4]);
        if(input.value > finalBal){
            infoRed.innerHTML = "You cant stake more than you have";
            setTimeout(() => { infoRed.innerHTML = ""}, 10000);
        } else if(input.value == 0){
            infoRed.innerHTML = "You must stake more than zero";
            setTimeout(() => { infoRed.innerHTML = ""}, 10000);
        } else if(input.value > 0){
            info.innerHTML = "You have successfully staked " + JSON.parse(input.value);
            let subBal = finalBal - JSON.parse(input.value);
            balanceResult.innerHTML = "Balance: " + Math.round(subBal);
            setTimeout(() => { info.innerHTML = ""}, 10000);
            setTimeout(() => { 
            let profit = input.value / 100 * 5;
            finalBal = subBal + profit + JSON.parse(input.value);
            balanceResult.innerHTML = "Balance: " + Math.round(finalBal);
            infoGreen.innerHTML = "You have made " + Math.round(profit) + " by staking " + JSON.parse(input.value);
            getUser[4] = [Math.round(finalBal)];
            window.localStorage.setItem(usernameLogin, JSON.stringify(getUser));
            setTimeout(() => { infoGreen.innerHTML = ""}, 10000);
            stakeOneBtn == true;
            }, 5000);
        }
    }
}
function stakeTwo(event){
    event.preventDefault();
    if(workBtn == true){
        infoRed.innerHTML = "You are are working, you dont have time to stake";
    } else if(stakeOneBtn == true || stakeTwoBtn == true){
        infoRed.innerHTML = "You are already staking";
    } else{
        stakeOneBtn == true;
        let input = document.getElementById('inputTwoFunction');
        finalBal = JSON.parse(getUser[4]);
        if(input.value > finalBal){
            infoRed.innerHTML = "You cant stake more than you have";
            setTimeout(() => { infoRed.innerHTML = ""}, 10000);
        } else if(input.value == 0){
            infoRed.innerHTML = "You must stake more than zero";
            setTimeout(() => { infoRed.innerHTML = ""}, 10000);
        } else if(input.value > 0){
            info.innerHTML = "You have successfully staked " + JSON.parse(input.value);
            let subBal = finalBal - JSON.parse(input.value);
            balanceResult.innerHTML = "Balance: " + Math.round(subBal);
            setTimeout(() => { info.innerHTML = ""}, 10000);
            setTimeout(() => { 
            let profit = input.value / 100 * 15;
            finalBal = subBal + profit + JSON.parse(input.value);
            balanceResult.innerHTML = "Balance: " + Math.round(finalBal);
            infoGreen.innerHTML = "You have made " + Math.round(profit) + " by staking " + JSON.parse(input.value);
            getUser[4] = [Math.round(finalBal)];
            window.localStorage.setItem(usernameLogin, JSON.stringify(getUser));
            setTimeout(() => { infoGreen.innerHTML = ""}, 10000);
            stakeOneBtn == true;
            }, 10000);
        }
    }
}
