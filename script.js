function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "hunterx";  // You can set this to any password
    if (password === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Incorrect password.";
    }
}
