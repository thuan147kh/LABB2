// Function to update the width and height values
function updateWindowSize() {
    const widthSpan = document.querySelector('#width');
    const heightSpan = document.querySelector('#height');

    // Get window's width and height
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Set the width and height values to the spans
    widthSpan.textContent = width + 'px';
    heightSpan.textContent = height + 'px';
}

// Initial call to set the values
updateWindowSize();

// Add event listener to window resize
window.addEventListener('resize', updateWindowSize);
