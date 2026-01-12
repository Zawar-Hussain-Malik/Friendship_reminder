// Create floating hearts and flowers animation
const heartsAndFlowers = ['💖', '💕', '💗', '💝', '💞', '🌹', '🌸', '🌺', '🌻', '🌷', '🌼', '💐', '✨', '⭐', '🎉', '🎂', '🎈', '🎁'];
const floatingContainer = document.getElementById('floatingElements');

// Create 18 floating elements
for (let i = 0; i < 18; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = heartsAndFlowers[Math.floor(Math.random() * heartsAndFlowers.length)];
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 0.8 + 1.2) + 'rem';
    floatingContainer.appendChild(element);
}

// Continuously add new elements as old ones disappear
setInterval(() => {
    const elements = floatingContainer.querySelectorAll('.floating-element');
    if (elements.length < 18) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = heartsAndFlowers[Math.floor(Math.random() * heartsAndFlowers.length)];
        element.style.left = Math.random() * 100 + '%';
        element.style.fontSize = (Math.random() * 0.8 + 1.2) + 'rem';
        element.style.animationDelay = '0s';
        element.style.animationDuration = (Math.random() * 5 + 18) + 's';
        floatingContainer.appendChild(element);
    }
}, 2000);
