// Check Password Function
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'hunter2023') { // Replace with your actual password
        document.getElementById('login').style.display = 'none';
        document.getElementById('targets').style.display = 'block';
        document.getElementById('hunters').style.display = 'block';
        document.getElementById('search').style.display = 'block';
        document.getElementById('map').style.display = 'block';
        return false; // Prevent form submission
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password.';
        return false;
    }
}

// Search Function
function searchInfo() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    const data = [
        "Target 1: Information goes here...",
        "Target 2: Information goes here...",
        "Hunter A: Information here...",
        "Hunter B: Information here..."
    ];

    // Simple search algorithm
    const matches = data.filter(item => item.toLowerCase().includes(input));

    if (matches.length > 0) {
        results.innerHTML = "Results:<br>" + matches.join("<br>");
    } else {
        results.innerHTML = "No matches found.";
    }
}
