document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById('counter');
    
    // Pobierz aktualną wartość licznika z localStorage
    let visitCount = localStorage.getItem('visitCount');

    // Jeśli brak wartości, ustaw na 0
    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10);
    }

    // Zwiększ licznik o 1
    visitCount += 1;

    // Zaktualizuj licznik na stronie
    counterElement.textContent = visitCount;

    // Zapisz nową wartość licznika w localStorage
    localStorage.setItem('visitCount', visitCount);
});
