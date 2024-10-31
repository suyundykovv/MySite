// filterPlayers.js

function filterPlayers() {
    const filter = document.getElementById("player-type-filter").value;
    const playerRows = document.querySelectorAll(".player-list .col-md-4");
    const playerTitles = document.querySelectorAll(".section-title");
    
    // Get the current username from local storage
    const currentUsername = localStorage.getItem("username");
    
    // Save the filter in local storage specific to the current user
    if (currentUsername) {
        localStorage.setItem(`${currentUsername}_filter`, filter);
    }

    // Filter player rows
    playerRows.forEach(player => {
        const type = player.getAttribute("data-type");
        player.style.display = (filter === "all" || filter === type) ? "block" : "none";
    });
    
    // Filter player titles
    playerTitles.forEach(title => {
        const type = title.getAttribute("data-type");
        title.style.display = (filter === "all" || filter === type) ? "block" : "none";
    });
}

// Function to load the saved filter when the user logs in
function loadUserFilter() {
    const currentUsername = localStorage.getItem("username");
    if (currentUsername) {
        const savedFilter = localStorage.getItem(`${currentUsername}_filter`);
        if (savedFilter) {
            document.getElementById("player-type-filter").value = savedFilter; // Set the filter to the saved value
            filterPlayers(); // Apply the filter
        }
    }
}

// Call this function when the document is ready
document.addEventListener("DOMContentLoaded", loadUserFilter);
