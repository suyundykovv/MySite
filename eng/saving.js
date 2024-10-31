// saving.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const updateForm = document.getElementById("updateForm");
    const usernameInput = document.getElementById("username");
    const newUsernameInput = document.getElementById("newUsername");
    const userControls = document.getElementById("userControls");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const changeUsernameBtn = document.getElementById("changeUsernameBtn");

    const loadSession = () => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            welcomeMessage.textContent = `Welcome, ${savedUsername}!`;
            userControls.classList.remove("d-none");
            loginForm.classList.add("d-none");
            updateForm.classList.add("d-none");

            // Load and apply the filter for the logged-in user
            loadUserFilter();
        } else {
            loginForm.classList.remove("d-none");
            userControls.classList.add("d-none");
            updateForm.classList.add("d-none");
        }
    };

    const saveUsername = (username) => {
        localStorage.setItem("username", username);
        welcomeMessage.textContent = `Welcome, ${username}!`;
        window.location.href = "news.html"; 
    };

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        if (username) {
            saveUsername(username);
        }
    });

    updateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newUsername = newUsernameInput.value.trim();
        if (newUsername) {
            // Clear the previous user's filter before changing username
            const currentUsername = localStorage.getItem("username");
            if (currentUsername) {
                localStorage.removeItem(`${currentUsername}_filter`); // Remove previous filter
            }
            saveUsername(newUsername);
            newUsernameInput.value = ""; // Clear input field
        }
    });

    logoutBtn.addEventListener("click", () => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            // Optionally, you can keep the filter on logout if needed
            // localStorage.removeItem(`${savedUsername}_filter`); // Clear user-specific filter
        }
        localStorage.removeItem("username"); // Clear user session
        window.location.href = 'open.html';
    });

    changeUsernameBtn.addEventListener("click", () => {
        updateForm.classList.remove("d-none");
        loginForm.classList.add("d-none");
        userControls.classList.add("d-none");
    });

    loadSession();
});
