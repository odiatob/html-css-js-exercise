document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanks for contacting us!');
    });

    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            document.getElementById('portfolio').style.backgroundColor = '#f0f0f0';
        });
    });
});

