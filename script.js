// Real Data for Active Hunters
const activeHunters = [
    { name: "Jaston", role: "Leader of the Hunter Association", rank: "3-Star Hunter", description: "Little is known about his techniques.", region: "USA" },
    { name: "Duane 'Dog' Chapman", role: "Bounty Hunter", rank: "Experienced", description: "Known for capturing high-profile fugitives.", region: "USA" },
    { name: "Leroy 'The Bulldog' Patterson", role: "Bounty Hunter", rank: "Expert", description: "Specializes in apprehending fugitive criminals.", region: "USA" }
];

// Real Data for Current Bounties
const currentBounties = [
    { name: "Ralph 'The Butcher' Brown", wantedFor: "Murder, Kidnapping", reward: "$100,000", lastSeen: "Mexico, 2022", description: "A dangerous fugitive involved in a string of violent crimes." },
    { name: "Nikki Patterson", wantedFor: "Drug Trafficking, Armed Robbery", reward: "$50,000", lastSeen: "Los Angeles, 2023", description: "A notorious criminal involved in large drug operations." },
    { name: "Robert 'Rob' Jenkins", wantedFor: "Bank Robbery, Assault", reward: "$75,000", lastSeen: "Miami, 2021", description: "Part of a notorious bank robbery crew." }
];

// Real Data for Info Section
const infoSection = [
    { title: "What is Bounty Hunting?", content: "Bounty hunting involves the capture of fugitives in exchange for a reward." },
    { title: "Famous Bounty Hunters", content: "Some of the most famous bounty hunters include Duane 'Dog' Chapman." },
    { title: "Bounty Hunter Laws", content: "Bounty hunters are legally allowed to pursue fugitives under specific conditions." }
];

// Show Home Page after password
const passwordPage = document.getElementById("passwordPage");
const homePage = document.getElementById("homePage");

document.getElementById("passwordButton").addEventListener("click", function() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "hunterx";
    if (password === correctPassword) {
        passwordPage.style.display = "none";
        homePage.style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password. Try again!";
    }
});

// Display Active Hunters
const hunterList = document.getElementById("hunterList");
activeHunters.forEach(hunter => {
    hunterList.innerHTML += `
        <div>
            <h3>${hunter.name}</h3>
            <p>${hunter.role}</p>
            <p>${hunter.rank}</p>
            <p>${hunter.description}</p>
        </div>
    `;
});

// Display Current Bounties
const bountyList = document.getElementById("bountyList");
currentBounties.forEach(bounty => {
    bountyList.innerHTML += `
        <div>
            <h3>${bounty.name}</h3>
            <p>${bounty.wantedFor}</p>
            <p>Reward: ${bounty.reward}</p>
            <p>Last Seen: ${bounty.lastSeen}</p>
            <p>${bounty.description}</p>
        </div>
    `;
});

// Display Info Section
const infoList = document.getElementById("infoList");
infoSection.forEach(info => {
    infoList.innerHTML += `
        <div>
            <h3>${info.title}</h3>
            <p>${info.content}</p>
        </div>
    `;
});

// Implement search functionality for each section
function searchList(sectionId, dataArray, searchField) {
    const section = document.getElementById(sectionId);
    const searchTerm = document.getElementById(searchField).value.toLowerCase();
    const filteredData = dataArray.filter(item => item.name.toLowerCase().includes(searchTerm) || item.title.toLowerCase().includes(searchTerm));

    section.innerHTML = "";
    filteredData.forEach(item => {
        section.innerHTML += `
            <div>
                <h3>${item.name || item.title}</h3>
                <p>${item.role || item.wantedFor || item.content}</p>
            </div>
        `;
    });
}

// Add search event listeners
document.getElementById("hunterSearch").addEventListener("input", function() {
    searchList("hunterList", activeHunters, "hunterSearch");
});
document.getElementById("bountySearch").addEventListener("input", function() {
    searchList("bountyList", currentBounties, "bountySearch");
});
document.getElementById("infoSearch").addEventListener("input", function() {
    searchList("infoList", infoSection, "infoSearch");
});
