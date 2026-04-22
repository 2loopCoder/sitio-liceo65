/* ================================= */
/* MENÚ ACTIVO */
/* ================================= */

const enlacesMenu = document.querySelectorAll("nav a");
const urlActual = window.location.pathname;

enlacesMenu.forEach(enlace => {
  const href = enlace.getAttribute("href");
  if (urlActual.includes(href)) {
    enlace.classList.add("activo");
  }
});

/* ================================= */
/* VALIDACIÓN FORMULARIO CONTACTO */
/* ================================= */

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    const nombre = form.querySelector("#nombre").value.trim();
    const email = form.querySelector("#email").value.trim();
    const mensaje = form.querySelector("#mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor complete todos los campos.");
      e.preventDefault();
    }
  });
}

// Mostrar el botón al hacer scroll
window.onscroll = function() {
  let boton = document.getElementById("arriba");

  if (document.documentElement.scrollTop > 100) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
};

// Volver arriba al hacer clic
document.getElementById("arriba").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};