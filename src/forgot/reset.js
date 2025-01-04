const stageEmail = document.getElementById("stage-email");
const stageCode = document.getElementById("stage-code");
const stagePassword = document.getElementById("stage-password");

const emailNext = document.getElementById("create");
const codeNext = document.getElementById("code-next");
const passwordNext = document.getElementById("password-submit");
const codeBack = document.getElementById("codeback");
const passwordBack = document.getElementById("passwordback");

const emailInput = document.getElementById("email");
const codeInput = document.getElementById("otp-code");
const newPassword = document.getElementById("password");
const confirmPassword = document.getElementById("passwordSecond");

const emailError = document.getElementById("email-error");
const otp = document.getElementById("otp");
const result = document.getElementById("result");
const codeError = document.getElementById("code-error");
const passwordError = document.getElementById("password-error");
const passwordResult = document.getElementById("password-result");

function showStage(stage){
    stageEmail.classList.remove("active");
    stagePassword.classList.remove("active");
    stageCode.classList.remove("active");
    stage.classList.add("active");
}

emailNext.onclick = function(){
    if (emailInput.value.trim()===""){
        emailError.textContent = "Email is required";

    }else{
        emailError.textContent=""
        showStage(stageCode);
    }
};

codeNext.onclick=function(){
    if (codeInput.value.trim()===""){
        codeError.textContent = "OTP is required";
    }else if(codeInput.value.length>4){
        codeError.textContent = "Incorrect OTP code";
    }else{
        codeError.textContent = "";
        showStage(stagePassword);
    }
};

codeBack.onclick = function(){
    showStage(stageEmail)
    emailInput.value=""
}

passwordNext.onclick = function(){
    if (newPassword.value.trim()==="" || confirmPassword.value.trim()===""){
        passwordError.textContent = "Password is required";
    }else if( newPassword.value !== confirmPassword.value.trim ){
        passwordError.textContent = "Password does not match";
    }else{
        passwordError.textContent = "";
        alert("Password Successfully Changed");
        emailInput.value="";
        codeInput.value="";
        newPassword.value="";
        confirmPassword.value="";
        showStage(stageEmail);
    }
}

passwordBack.onclick= function(){
    showStage(stageCode);
    codeInput.value=""
}
