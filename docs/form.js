const username = document.getElementById("exampleInputUsername1");
const usernameHelp = document.getElementById("usernameHelp");

const password = document.getElementById("exampleInputPassword1");
const passwordHelp = document.getElementById("passwordHelp");

const validateUsername = () => {
    if (username.value.length < 3 || username.value.length > 20) {
        username.classList.add("is-invalid");
        usernameHelp.classList.add("invalid-feedback");
        usernameHelp.innerText = "Must be between 3 and 20 characters long!";
    } else {
        username.classList.replace("is-invalid", "is-valid");
        usernameHelp.classList.replace("invalid-feedback", "valid-feedback");
        usernameHelp.innerText = "Looks good!";
    }
};

const validatePassword = () => {
    if (password.value.length < 8) {
        password.classList.add("is-invalid");
        passwordHelp.classList.add("invalid-feedback");
        passwordHelp.innerText = "Must be at least 8 characters long!";
    } else if (!/[a-zA-Z0-9]{8,}/.exec(password.value)) {
        password.classList.add("is-invalid");
        passwordHelp.classList.add("invalid-feedback");
        passwordHelp.innerText = "should contain [A-Z a-z 0-9]!";
    } else {
        password.classList.replace("is-invalid", "is-valid");
        passwordHelp.classList.replace("invalid-feedback", "valid-feedback");
        passwordHelp.innerText = "Looks good!";
    }
};

const submitBtn = document.getElementById("exampleSubmit1");
submitBtn.addEventListener("click", event => {
    event.preventDefault();
    validateUsername();
    validatePassword();
});