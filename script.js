// Licznik odwiedzin
document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById('counter');
    let visitCount = localStorage.getItem('visitCount');
    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10);
    }
    visitCount += 1;
    counterElement.textContent = visitCount;
    localStorage.setItem('visitCount', visitCount);
});

// Wykrywanie urządzenia mobilnego i przekierowanie
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth <= 700;
}

function redirectToMobile() {
    if (isMobile()) {
        const currentPath = window.location.pathname;
        if (!currentPath.includes('-mobile')) {
            const mobilePath = currentPath.replace('.html', '-mobile.html');
            window.location.href = mobilePath;
        }
    }
}

// Wywołaj przekierowanie gdy strona się załaduje
window.addEventListener('load', redirectToMobile);
