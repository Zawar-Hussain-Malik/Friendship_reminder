// Friendship reminder countdown for March 28th, 2026
const targetDate = new Date('2026-03-28T00:00:00').getTime();

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
    const current = new Date();
    const timeLeft = targetDate - current.getTime();

    if (timeLeft <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';

        const messageSection = document.querySelector('.message-section');
        if (messageSection) {
            messageSection.innerHTML = `
                <div class="message-paper">
                    <div class="paper-line"></div>
                    <div class="message-content">
                        <h2>Happy Friendship Day!</h2>
                        <p>Today is all about celebrating true friendship and unforgettable memories.</p>
                        <div class="excitement-text">
                            <p>Thank you for being an amazing friend.</p>
                        </div>
                    </div>
                </div>
            `;
        }
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    updateTimeUnit(daysElement, days);
    updateTimeUnit(hoursElement, hours);
    updateTimeUnit(minutesElement, minutes);
    updateTimeUnit(secondsElement, seconds);
}

function updateTimeUnit(element, value) {
    const currentValue = parseInt(element.textContent, 10);
    const nextValue = value.toString().padStart(2, '0');

    if (currentValue !== value) {
        element.classList.add('updating');
        element.textContent = nextValue;

        setTimeout(() => {
            element.classList.remove('updating');
        }, 300);
    } else {
        element.textContent = nextValue;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
