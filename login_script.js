const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Store user data in localStorage
localStorage.user = JSON.stringify({ name: "aryan@gmail.com", password: "12345" });
let user = JSON.parse(localStorage.user);

// Validate function for form submission
function validate() {
	let u = document.loginform.uname.value; // Get username from form
	let p = document.loginform.pwd.value;   // Get password from form

	// Check if username and password match stored credentials
	if (u === user.name && p === user.password) {
		alert("Login Successful");
		return true;
	} else {
		// Display error message if credentials are incorrect
		document.getElementById("error").textContent = "Invalid Username or Password";
		return false; // Prevent form submission
	}
}