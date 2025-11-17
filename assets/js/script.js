// Seleccionar elementos del DOM
const botonModal = document.getElementById("btn-modal");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar-modal");

//click izquierdo=mostrar modal
botonModal.addEventListener("click", () => {
    modal.classList.remove("oculto");
    modal.classList.add("mostrar");
});

//click derecho=mostrar modal (evitando menú)
botonModal.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // evita menú del clic derecho
    modal.classList.remove("oculto");
    modal.classList.add("mostrar");
});

// Cerrar modal
cerrar.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    modal.classList.add("oculto");
});

