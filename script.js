// Password validation (Password == Quitcheating)
function checkPassword() {
    const password = document.getElementById('password').value;

    if (password === 'YorkNew251') {
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

// Search functions
function searchInfo() {
    const searchInput = document.getElementById('infoSearch').value.toLowerCase();
    const infoList = document.getElementById('infoList');
    const items = Array.from(infoList.getElementsByClassName('infoItem'));
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? 'list-item' : 'none';
    });
}

function searchBounties() {
    const searchInput = document.getElementById('bountySearch').value.toLowerCase();
    const bountyList = document.getElementById('bountyList');
    const items = Array.from(bountyList.getElementsByClassName('bountyItem'));
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? 'list-item' : 'none';
    });
}

function searchHunters() {
    const searchInput = document.getElementById('hunterSearch').value.toLowerCase();
    const hunterList = document.getElementById('hunterList');
    const items = Array.from(hunterList.getElementsByClassName('hunterItem'));
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? 'list-item' : 'none';
    });
}

// Show details for clicked item
function showInfoDetails(item) {
    const fullInfo = item.querySelector('.fullInfo');  // Use querySelector instead of nextElementSibling
    fullInfo.style.display = fullInfo.style.display === 'block' ? 'none' : 'block';
}

function showBountyDetails(item) {
    const fullInfo = item.querySelector('.fullInfo');  // Same here for bounties
    fullInfo.style.display = fullInfo.style.display === 'block' ? 'none' : 'block';
}

function showHunterDetails(item) {
    const fullInfo = item.querySelector('.fullInfo');  // And for hunters
    fullInfo.style.display = fullInfo.style.display === 'block' ? 'none' : 'block';
}

// Sort items when the page loads
window.onload = function() {
    sortList('infoList');
    sortList('bountyList');
    sortList('hunterList');
};
