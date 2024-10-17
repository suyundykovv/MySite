document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let currentIndex = 0;

    // Set focus on the first menu item by default
    navLinks[currentIndex].focus();

    // Function to handle navigation with arrow keys
    function handleKeyDown(event) {
        // Check for left or right arrow key press
        if (event.key === 'ArrowRight') {
            // Move to the next menu item
            currentIndex = (currentIndex + 1) % navLinks.length;
            navLinks[currentIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            // Move to the previous menu item
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[currentIndex].focus();
        }
    }

    // Attach keydown event listener to the document
    document.addEventListener('keydown', handleKeyDown);
});
