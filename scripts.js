// Create the heart popup animation
window.onload = function() {
    const heart = document.querySelector('.heart');
    
    // Show the heart animation after a short delay
    setTimeout(() => {
        heart.style.animation = 'heartPopup 3s ease-out infinite';
    }, 500);
};
