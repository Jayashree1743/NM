document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const hamIcon = hamburger.querySelector('.hamburger-icon');
    const crossIcon = hamburger.querySelector('.cross-icon');

    // Set initial state
    menu.style.display = '';
    hamIcon.style.display = 'inline-block';
    crossIcon.style.display = 'none';

    hamburger.addEventListener('click', () => {
        const menuVisible = menu.style.display === 'block';
        menu.style.display = menuVisible ? 'none' : 'block';
        hamIcon.style.display = menuVisible ? 'inline-block' : 'none';
        crossIcon.style.display = menuVisible ? 'none' : 'inline-block';
    });
});
