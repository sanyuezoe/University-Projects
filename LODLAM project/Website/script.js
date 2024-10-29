//fade in effect

const fadeInElements = document.querySelectorAll('.fade-in');

function handleScroll() {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

//item card length

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.parentElement;
        const fullText = description.querySelector('.full-text');
        const shortText = description.querySelector('.short-text');

        if (fullText.style.display === 'none' || fullText.style.display === '') {
            // Expand the text
            fullText.style.display = 'inline';
            description.classList.add('expanded');
            shortText.style.display = 'none';
            button.textContent = 'Read Less';
        } else {
            // Collapse the text
            fullText.style.display = 'none';
            description.classList.remove('expanded');
            shortText.style.display = 'inline';
            button.textContent = 'Read More';
        }
    });
});


function toggleSidebar() {
    const sidebar = document.getElementById("side-navbar");
    sidebar.classList.toggle("expanded");
    sidebar.classList.toggle("collapsed");
}