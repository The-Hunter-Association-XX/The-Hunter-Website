// Password validation
function checkPassword() {
    const password = document.getElementById('password').value;

    if (password === 'hunter2023') { // Replace 'hunter2023' with your password
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        return false; // Prevent form submission
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password.';
        return false; // Prevent form submission
    }
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResult = document.getElementById('searchResult');

    if (searchInput === 'kurapika') {
        searchResult.innerText = 'Kurapika: Specialist in chain techniques.';
    } else if (searchInput === 'gon') {
        searchResult.innerText = 'Gon: Known for his incredible strength and tenacity.';
    } else {
        searchResult.innerText = 'No information found.';
    }
}
