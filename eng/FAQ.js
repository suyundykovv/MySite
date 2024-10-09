// FAQ.js
function toggleAccordion(collapseId) {
    const content = document.getElementById(collapseId);
    const isCollapsed = content.style.display === 'none' || content.style.display === '';

    // Hide all content sections
    const allContents = document.querySelectorAll('.card-body');
    allContents.forEach((el) => {
        el.style.display = 'none';
    });

    // Show the selected content if it was previously hidden
    if (isCollapsed) {
        content.style.display = 'block';
    }
}

// Set initial state of all content sections to hidden
document.addEventListener('DOMContentLoaded', () => {
    const allContents = document.querySelectorAll('.card-body');
    allContents.forEach((el) => {
        el.style.display = 'none';
    });
});
