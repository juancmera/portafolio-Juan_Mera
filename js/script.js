/* Modo oscuro */
function inicializarModoOscuro() {

  const preferenciaGuardado = localStorage.getItem("modoOscuro");
  const btnModoOscuro = document.getElementById("btn-modo-oscuro");

  if (preferenciaGuardado === "activado") {
    document.body.classList.add("modo-oscuro");
    actualizarIconoModoOscuro(true);
    btnModoOscuro.setAttribute("aria-pressed", "true");
  }
}

function alternarModoOscuro() {
  const estaActivo = document.body.classList.toggle("modo-oscuro");

  if (estaActivo) {
    localStorage.setItem("modoOscuro", "activado");
  } else {
    localStorage.setItem("modoOscuro", "desactivado");
  }

  actualizarIconoModoOscuro(estaActivo);
  document
    .getElementById("btn-modo-oscuro")
    .setAttribute("aria-pressed", estaActivo);
}

function actualizarIconoModoOscuro(activo) {
  const icono = document.querySelector("#btn-modo-oscuro i");

  if (activo) {
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
  } else {
    icono.classList.remove("fa-sun");
    icono.classList.add("fa-moon");
  }
}

function inicializarMenuActivo() {
  const enlaces = document.querySelectorAll(".ul-menu a");
  const secciones = document.querySelectorAll("main section[id]");

  function marcarSeccionActiva() {
    // La activa: la última sección cuyo inicio ya pasó bajo el nav fijo
    let idActiva = secciones[0].id;

    secciones.forEach((seccion) => {
      if (window.scrollY >= seccion.offsetTop - 80) {
        idActiva = seccion.id;
      }
    });

    // Caso especial: al llegar al final de la página, activa la última
    // (soluciona que "contactos" sea corta y nunca alcance la parte alta)
    const finDePagina =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    if (finDePagina) {
      idActiva = secciones[secciones.length - 1].id;
    }

    // Marca solo el enlace correspondiente
    enlaces.forEach((enlace) => {
      enlace.classList.toggle(
        "activo",
        enlace.getAttribute("href") === `#${idActiva}`
      );
    });
  }

  window.addEventListener("scroll", marcarSeccionActiva);
  marcarSeccionActiva(); // marca la correcta al cargar la página
}

// INICIO — se ejecuta cuando el HTML ya está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarModoOscuro();
  inicializarMenuActivo();
  const botonModoOscuro = document.getElementById("btn-modo-oscuro");
  botonModoOscuro.addEventListener("click", alternarModoOscuro);
});
