document.addEventListener('DOMContentLoaded', () => {
    const increaseButton = document.getElementById('increase-font');
    const decreaseButton = document.getElementById('decrease-font');
    const mainContent = document.getElementById('main-content');
    
    // Si no existe el contenido principal en la página, no hacemos nada.
    if (!mainContent) {
        return;
    }

    const storageKey = 'preferredFontSize'; // Clave para guardar en localStorage
    const step = 2; // Cantidad de píxeles a cambiar

    // APLICAR TAMAÑO GUARDADO AL CARGAR LA PÁGINA ---
    const savedSize = localStorage.getItem(storageKey);
    if (savedSize) {
        mainContent.style.fontSize = savedSize;
    }

    // FUNCIÓN PARA CAMBIAR Y GUARDAR EL TAMAÑO ---
    const changeAndStoreFontSize = (amount) => {
        const currentSize = parseFloat(window.getComputedStyle(mainContent).fontSize);
        const newSize = currentSize + amount;

        if (newSize >= 12 && newSize <= 28) {
            const newSizePx = newSize + 'px';
            // Aplicar el nuevo tamaño
            mainContent.style.fontSize = newSizePx;
            // Guardar el nuevo tamaño en localStorage
            localStorage.setItem(storageKey, newSizePx);
        }
    };

    // Asignar la función a los botones
    increaseButton.addEventListener('click', () => {
        changeAndStoreFontSize(step);
    });

    decreaseButton.addEventListener('click', () => {
        changeAndStoreFontSize(-step);
    });
});
