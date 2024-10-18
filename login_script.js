const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
localStorage.user = JSON.stringify({ name: "aryan@gmail.com", password: "12345" });
let user = JSON.parse(localStorage.user);
function validate() {
    let u = document.loginform.uname.value;
    let p = document.loginform.pwd.value;
    if (u === user.name && p === user.password) {
        alert("Login Successful");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
        return false;
    } else {
        document.getElementById("error").textContent = "Invalid Username or Password";
        return false;
    }
}

