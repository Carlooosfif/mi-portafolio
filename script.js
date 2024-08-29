document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.carousel-item');
    let dots = document.querySelectorAll('.dot');
    let currentItem = 0;
    const itemCount = items.length;

    function showItem(index) {
        items[currentItem].classList.remove('active');
        dots[currentItem].classList.remove('active');
        currentItem = index;
        items[currentItem].classList.add('active');
        dots[currentItem].classList.add('active');
    }

    function showNextItem() {
        let nextItem = (currentItem + 1) % itemCount;
        showItem(nextItem);
    }

    function showPrevItem() {
        let prevItem = (currentItem - 1 + itemCount) % itemCount;
        showItem(prevItem);
    }

    // Inicializa el primer ítem como activo
    items[currentItem].classList.add('active');
    dots[currentItem].classList.add('active');

    // Cambia de ítem cada 5 segundos automáticamente
    setInterval(showNextItem, 5000);

    // Event listeners para las flechas
    document.querySelector('.prev').addEventListener('click', showPrevItem);
    document.querySelector('.next').addEventListener('click', showNextItem);

    // Event listeners para los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showItem(index));
    });
});
