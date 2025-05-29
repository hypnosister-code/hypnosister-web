Escape// Licznik odwiedzin
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

// Usunięto kod przekierowania mobilnego
