// Password validation
function checkPassword() {
    const password = document.getElementById('password').value;

    if (password === 'hunterx') { // Updated password
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        navigateTo('home'); // Go to home after successful login
        return false; // Prevent form submission
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password.';
        return false; // Prevent form submission
    }
}

// Navigation between sections
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to sort items alphabetically
function sortList(listId) {
    const list = document.getElementById(listId);
    const items = Array.from(list.getElementsByTagName('li'));
    items.sort((a, b) => a.innerText.localeCompare(b.innerText)); // Sort alphabetically
    list.innerHTML = ''; // Clear the list
    items.forEach(item => list.appendChild(item)); // Append sorted items
}

// Function to filter Info section
function searchInfo() {
    const searchInput = document.getElementById('infoSearch').value.toLowerCase();
    const infoList = document.getElementById('infoList');
    const items = Array.from(infoList.getElementsByClassName('infoItem'));
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? 'list-item' : 'none';
    });
}

// Function to filter Bounties section
function searchBounties() {
    const searchInput = document.getElementById('bountySearch').value.toLowerCase();
    const bountyList = document.getElementById('bountyList');
    const items = Array.from(bountyList.getElementsByClassName('bountyItem'));
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? 'list-item' : 'none';
    });
}

// Function to filter Active Hunters section
function searchHunters() {
    const searchInput = document.getElementById('hunterSearch').value.toLowerCase();
    const hunterList = document.getElementById('hunterList');
    const items = Array.from(hunterList.getElementsByClassName('hunterItem'));
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? 'list-item' : 'none';
    });
}

// Sort items when the page loads
window.onload = function() {
    sortList('infoList');
    sortList('bountyList');
    sortList('hunterList');
};
