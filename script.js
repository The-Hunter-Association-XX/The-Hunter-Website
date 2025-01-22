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

// Search for Info
function searchInfo() {
    const searchInput = document.getElementById('infoSearch').value.toLowerCase();
    const infoResult = document.getElementById('infoResult');

    if (searchInput === 'nen') {
        infoResult.innerText = 'Nen: The technique that allows hunters to use their life energy.';
    } else if (searchInput === 'hunter exam') {
        infoResult.innerText = 'Hunter Exam: A grueling test to earn a Hunter License.';
    } else {
        infoResult.innerText = 'No information found.';
    }
}

// Search for Bounties
function searchBounties() {
    const searchInput = document.getElementById('bountySearch').value.toLowerCase();
    const bountyResult = document.getElementById('bountyResult');

    if (searchInput === 'phantom troupe') {
        bountyResult.innerText = 'Phantom Troupe: High bounty for each member. Proceed with caution.';
    } else if (searchInput === 'chrollo') {
        bountyResult.innerText = 'Chrollo Lucilfer: Leader of the Phantom Troupe. Extremely dangerous.';
    } else {
        bountyResult.innerText = 'No bounties found for the entered name.';
    }
}

// Search for Active Hunters
function searchHunters() {
    const searchInput = document.getElementById('hunterSearch').value.toLowerCase();
    const hunterResult = document.getElementById('hunterResult');

    if (searchInput === 'gon') {
        hunterResult.innerText = 'Gon: Known for incredible strength and tenacity.';
    } else if (searchInput === 'killua') {
        hunterResult.innerText = 'Killua: Skilled in assassination and electricity techniques.';
    } else if (searchInput === 'jaston') { // Adding Jaston
        hunterResult.innerText = 'Jaston: Leader of the Hunter Association, 3-Star Hunter. Little is known about his techniques.';
    } else {
        hunterResult.innerText = 'No matching hunter found.';
    }
}
