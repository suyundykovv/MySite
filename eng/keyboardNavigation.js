document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let currentIndex = 0;

    navLinks[currentIndex].focus();
    function handleKeyDown(event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % navLinks.length;
            navLinks[currentIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[currentIndex].focus();
        }
    }

    document.addEventListener('keydown', handleKeyDown);
});
