const link = document.getElementById('highlightLink');
const boldElements = document.querySelectorAll('strong');

link.addEventListener('mouseover', function() {
    boldElements.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
});

link.addEventListener('mouseout', function() {
    boldElements.forEach(element => {
        element.style.backgroundColor = 'transparent';
    });
});
