// --- Seleccionar elementos del DOM ---
const botonModal = document.getElementById("btn-modal");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar-modal");

// --- Evento: click izquierdo ---
botonModal.addEventListener("click", () => {
    modal.classList.remove("oculto");
    modal.classList.add("mostrar", "animar");
});

// --- Evento: click derecho ---
botonModal.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // evita menú del clic derecho
    modal.classList.remove("oculto");
    modal.classList.add("mostrar", "animar", "resaltar");
});

// --- Cerrar modal ---
cerrar.addEventListener("click", () => {
    modal.classList.remove("mostrar", "resaltar", "animar");
    modal.classList.add("oculto");
});
