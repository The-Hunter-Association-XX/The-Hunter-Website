// Hashing function using SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

// Precomputed hash of "" using SHA-256
const storedHash = "e9e62c6314be45571c7481b2aa6692b12b105a0ffb6841880bbfc27fd7f805a1";

async function checkPassword() {
    const userInput = document.getElementById('password').value.trim();
    const inputHash = await hashPassword(userInput);

    if (inputHash === storedHash) {
        alert("Access granted");
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        return false; // Prevent form submission
    } else {
        alert("Access denied");
        return false; // Prevent form submission
    }
}

// Navigation function
function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
