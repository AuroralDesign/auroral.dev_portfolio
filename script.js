document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');
    let currentActiveSection = document.querySelector('.content-section.active');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetSection = document.getElementById(targetId);

            if (targetSection === currentActiveSection) {
                return;
            }

            if (currentActiveSection) {
                currentActiveSection.classList.remove('active');
            }

            targetSection.classList.add('active');
            currentActiveSection = targetSection;
        });
    });
});