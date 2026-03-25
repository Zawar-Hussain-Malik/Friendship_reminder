// Create floating friendship icons
const friendshipIcons = ['ðŸ¤', 'ðŸ’™', 'ðŸŒŸ', 'âœ¨', 'ðŸ’«', 'ðŸ˜Š', 'ðŸŽˆ', 'ðŸŽ‰', 'ðŸ«¶', 'ðŸ’Œ'];
const floatingContainer = document.getElementById('floatingElements');

for (let i = 0; i < 18; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = friendshipIcons[Math.floor(Math.random() * friendshipIcons.length)];
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 0.8 + 1.2) + 'rem';
    floatingContainer.appendChild(element);
}

setInterval(() => {
    const elements = floatingContainer.querySelectorAll('.floating-element');
    if (elements.length < 18) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = friendshipIcons[Math.floor(Math.random() * friendshipIcons.length)];
        element.style.left = Math.random() * 100 + '%';
        element.style.fontSize = (Math.random() * 0.8 + 1.2) + 'rem';
        element.style.animationDelay = '0s';
        element.style.animationDuration = (Math.random() * 5 + 18) + 's';
        floatingContainer.appendChild(element);
    }
}, 2000);
