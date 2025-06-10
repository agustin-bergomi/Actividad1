function setModoDaltonico() {
    const body = document.body;
    const boton = document.getElementById("btn-daltonico");

    const activado = body.classList.toggle("daltonico");

    if (activado) {
        localStorage.setItem("modoDaltonico", "true");
        boton.textContent = "Modo Daltónico: ON";
    } else {
        localStorage.removeItem("modoDaltonico");
        boton.textContent = "Modo Daltónico: OFF";
    }
}

// Aplicar al cargar y actualizar botón
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-daltonico");
    if (localStorage.getItem("modoDaltonico") === "true") {
        document.body.classList.add("daltonico");
        if (boton) boton.textContent = "Modo Daltónico: ON";
    }
});
