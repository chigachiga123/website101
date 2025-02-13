// This script adds a little fun effect
window.onload = () => {
    const heart = document.querySelector('.heart');
    setInterval(() => {
        heart.style.animation = 'pulse 1.5s ease-in-out infinite';
    }, 1000);
};
