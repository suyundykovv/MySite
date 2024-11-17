document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const userControls = document.getElementById("userControls");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const changeUsernameBtn = document.getElementById("changeUsernameBtn");

    // Load session data from localStorage
    const loadSession = () => {
        const savedUsername = localStorage.getItem("loggedInUser");
        const savedName = localStorage.getItem("loggedInUserName");

        if (savedUsername && savedName) {
            // Show user controls and welcome message if logged in
            const savedEmail = localStorage.getItem(`user_${savedUsername}_email`);
            welcomeMessage.textContent = `Welcome, ${savedName}!`;
            document.getElementById("userDetails").textContent = `Email: ${savedEmail}`;
            userControls.classList.remove("d-none");
            loginForm.classList.add("d-none");
            signupForm.classList.add("d-none");
        } else {
            loginForm.classList.remove("d-none");
            userControls.classList.add("d-none");
            signupForm.classList.add("d-none");
        }
    };

    // Save user data to localStorage after successful login/signup
    const saveUserData = (username, name, email, password) => {
        localStorage.setItem(`user_${username}_name`, name);
        localStorage.setItem(`user_${username}_email`, email);
        localStorage.setItem(`user_name_${username}_password`, password);
        localStorage.setItem("loggedInUser", username);  
        localStorage.setItem("loggedInUserName", name);  // Store the logged-in user's name
        welcomeMessage.textContent = `Welcome, ${name}!`;
        document.getElementById("userDetails").textContent = `Email: ${email}`;
        userControls.classList.remove("d-none");
        loginForm.classList.add("d-none");
        signupForm.classList.add("d-none");
    };

    // Sign Up functionality
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("signupUsername").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        if (localStorage.getItem(`user_name_${username}_password`)) {
            alert("Username already exists. Please choose a different username.");
            return;
        }

        if (username && email && password) {
            saveUserData(username, username, email, password);
            alert("Account created successfully. You can now log in.");

            // Toggle to login form after signup success
            signupForm.classList.add("d-none");
            userControls.classList.add("d-none");
            loginForm.classList.remove("d-none");
        } else {
            alert("Please fill out all fields.");
        }
    });

    // Log In functionality
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("loginPassword").value;
        const storedPassword = localStorage.getItem(`user_name_${username}_password`);
        const storedName = localStorage.getItem(`user_${username}_name`);
        const storedEmail = localStorage.getItem(`user_${username}_email`);

        if (storedPassword && storedPassword === password) {
            saveUserData(username, storedName, storedEmail, password);
            loginForm.classList.remove("d-none");
            userControls.classList.add("d-none");
            window.location.href = 'open.html';  // Redirect to user control page
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });

    // Toggle between login and sign-up forms
    document.getElementById("showSignupForm").addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.remove("d-none");
        loginForm.classList.add("d-none");
    });

    document.getElementById("showLoginForm").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("d-none");
        signupForm.classList.add("d-none");
    });

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");      // Remove session data
        localStorage.removeItem("loggedInUserName");  // Remove logged-in user's name
        window.location.href = 'open.html';           // Redirect to sign-in page (open.html or login page)
    });

    // "Go In" button functionality (redirect to index.html)
    changeUsernameBtn.addEventListener("click", () => {
        window.location.href = 'index.html';  // Redirect to index.html
    });

    const toggleForms = (showSignup) => {
        signupForm.classList.toggle("d-none", !showSignup);
        loginForm.classList.toggle("d-none", showSignup);
    };

    document.getElementById("showSignupForm").addEventListener("click", (e) => {
        e.preventDefault();
        toggleForms(true);
    });

    document.getElementById("showLoginForm").addEventListener("click", (e) => {
        e.preventDefault();
        toggleForms(false);
    });

    loadSession();
});
