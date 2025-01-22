// Hunter x Hunter World Data
const activeHunters = [
    { name: "Jaston", role: "Leader of the Hunter Association", rank: "3-Star Hunter", description: "Little is known about his techniques.", region: "G.I." },
    { name: "Gon Freecss", role: "Hunter", rank: "Pro Hunter", description: "Searching for his father, Ging Freecss.", region: "The World" },
    { name: "Killua Zoldyck", role: "Hunter", rank: "Pro Hunter", description: "Former assassin from the Zoldyck family.", region: "Zoldyck Family" }
];

const currentBounties = [
    { name: "Chrollo Lucilfer", wantedFor: "Organized Crime, Murder", reward: "Varies", lastSeen: "Heavens Arena, 2024", description: "Leader of the Phantom Troupe." },
    { name: "Hisoka Morow", wantedFor: "Murder, Terrorism", reward: "Varies", lastSeen: "Greed Island, 2025", description: "Former Hunter and a sadistic combatant." },
    { name: "Illumi Zoldyck", wantedFor: "Assassination", reward: "Varies", lastSeen: "Zoldyck Family Estate, 2025", description: "Assassin and eldest son of the Zoldyck family." }
];

const infoSection = [
    { title: "Hunter Exam", content: "The Hunter Exam is an event held to determine if someone has the skills to become a licensed Hunter." },
    { title: "Phantom Troupe", content: "A criminal group of thieves, including Chrollo Lucilfer and Hisoka Morow." },
    { title: "Zoldyck Family", content: "A family of elite assassins who reside in the Zoldyck mansion on Kukuroo Mountain." }
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
