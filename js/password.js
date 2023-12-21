var passwordField = document.getElementById("password");

passwordField.addEventListener("mouseover", function() {
    showPassword();
});

passwordField.addEventListener("mouseout", function() {
    hidePassword();
});

function showPassword() {
    passwordField.type = "text";
}

function hidePassword() {
    passwordField.type = "password";
}
