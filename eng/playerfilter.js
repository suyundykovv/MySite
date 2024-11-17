
function filterPlayers() {
    const filter = document.getElementById("player-type-filter").value;
    const playerRows = document.querySelectorAll(".player-list .col-md-4");
    const playerTitles = document.querySelectorAll(".section-title");
    
    const currentUsername = localStorage.getItem("loggedInUserName");
    
    if (currentUsername) {
        localStorage.setItem(`${currentUsername}_filter`, filter);
    }

    playerRows.forEach(player => {
        const type = player.getAttribute("data-type");
        player.style.display = (filter === "all" || filter === type) ? "block" : "none";
    });
    
    playerTitles.forEach(title => {
        const type = title.getAttribute("data-type");
        title.style.display = (filter === "all" || filter === type) ? "block" : "none";
    });
}

function loadUserFilter() {
    const currentUsername = localStorage.getItem("loggedInUserName");
    if (currentUsername) {
        const savedFilter = localStorage.getItem(`${currentUsername}_filter`);
        if (savedFilter) {
            document.getElementById("player-type-filter").value = savedFilter; 
            filterPlayers(); 
        }
    }
}

document.addEventListener("DOMContentLoaded", loadUserFilter);
