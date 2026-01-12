// Birthday countdown for Amna - January 25th
const birthdayDate = new Date(new Date().getFullYear(), 0, 25); // January 25th (month is 0-indexed)

// If birthday has passed this year, set it for next year
const today = new Date();
if (today > birthdayDate) {
    birthdayDate.setFullYear(today.getFullYear() + 1);
}

// Get countdown elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date();
    const timeLeft = birthdayDate - now;
    
    if (timeLeft <= 0) {
        // Birthday has arrived!
        daysElement.textContent = '0';
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        secondsElement.textContent = '0';
        
        // Show birthday message
        const messageSection = document.querySelector('.message-section');
        if (messageSection) {
            messageSection.innerHTML = `
                <div class="message-paper">
                    <div class="paper-line"></div>
                    <div class="message-content">
                        <h2>🎉 Happy Birthday Amna! 🎉</h2>
                        <p>Your special day has finally arrived! Wishing you the most amazing birthday filled with joy, love, and happiness!</p>
                        <div class="excitement-text">
                            <p>🎂 Today is YOUR day! 🎂</p>
                        </div>
                    </div>
                </div>
            `;
        }
        return;
    }
    
    // Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update with animation
    updateTimeUnit(daysElement, days);
    updateTimeUnit(hoursElement, hours);
    updateTimeUnit(minutesElement, minutes);
    updateTimeUnit(secondsElement, seconds);
}

function updateTimeUnit(element, value) {
    const currentValue = parseInt(element.textContent);
    if (currentValue !== value) {
        element.classList.add('updating');
        element.textContent = value.toString().padStart(2, '0');
        
        setTimeout(() => {
            element.classList.remove('updating');
        }, 300);
    } else {
        element.textContent = value.toString().padStart(2, '0');
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
