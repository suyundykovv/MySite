function toggleAccordion(collapseId) {
    const content = document.getElementById(collapseId);
    const isCollapsed = content.style.display === 'none' || content.style.display === '';

    const allContents = document.querySelectorAll('.card-body');
    allContents.forEach((el) => {
        el.style.display = 'none';
    });
    // if (isCollapsed) {
    //     content.style.display = 'block';
    // }
}

document.addEventListener('DOMContentLoaded', () => {
    const allContents = document.querySelectorAll('.card-body');
    allContents.forEach((el) => {
        el.style.display = 'none';
    });
});
