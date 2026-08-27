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

/*Menu Dinámico */
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
        enlace.getAttribute("href") === `#${idActiva}`,
      );
    });
  }

  window.addEventListener("scroll", marcarSeccionActiva);
  marcarSeccionActiva(); // marca la correcta al cargar la página
}

/* Formulario, validación y envío sumulado */
function esCorreoValido(correo) {
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patronCorreo.test(correo);
}
function validarFormulario(evento) {
  // evita que la página se recargue al enviar
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    mostrarMensajeFormulario(
      "Por favor completa todos los campos antes de enviar.",
      "error",
    );
  } else if (!esCorreoValido(correo)) {
    mostrarMensajeFormulario("El correo ingresado no tiene un formato válido. Ejemplo: nombre@dominio.com", "error");
  } else { 
    guardarMensaje(nombre, correo, mensaje);
    usuarioVisitante();
    mostrarMensajeFormulario(
      "Gracias, " + nombre + "! tu mensaje fue enviado correctamente",
      "exito",
    );
    document.getElementById("formulario-contacto").reset();
  }
}

function mostrarMensajeFormulario(texto, tipo) {
  const contenedor = document.getElementById("mensaje-formulario");
  contenedor.textContent = texto;
  contenedor.classList.remove("error", "exito");
  contenedor.classList.add(tipo)
}

function guardarMensaje(nombre, correo, mensaje) {
  const mensajeGuardados = JSON.parse(localStorage.getItem("mensajeContacto")) || [];

  mensajeGuardados.push({
    nombre: nombre,
    correo: correo,
    mensaje: mensaje,
    fecha: new Date().toLocaleString()
  });

  localStorage.setItem("mensajeContacto", JSON.stringify(mensajeGuardados));
  localStorage.setItem("nombreVisitante", nombre);
  console.log("Nombre form: ", nombre)
}

/*Usuario visitante */
function usuarioVisitante() {
  const nombreGuardado = localStorage.getItem("nombreVisitante");
  const saludo = document.getElementById("saludo-visitante");

  if ( nombreGuardado !== null && nombreGuardado !== "" ) {
    saludo.textContent = "¡Hola, " + nombreGuardado + "!";
    saludo.classList.add("visible")
  } 
}

// INICIO — se ejecuta cuando el HTML ya está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarModoOscuro();
  inicializarMenuActivo();
  usuarioVisitante();

  const botonModoOscuro = document.getElementById("btn-modo-oscuro");
  botonModoOscuro.addEventListener("click", alternarModoOscuro);

  // Formulario de contacto
  const formularioContacto = document.getElementById("formulario-contacto");
  formularioContacto.addEventListener("submit", validarFormulario);
});
