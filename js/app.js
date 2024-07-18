import Swal from 'sweetalert2'






// EMPIEZA TODO LO DE ENVIAR MAIL DE CONSULTAS ↓
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const mail = document.getElementById('email').value;





    // Crear el objeto del correo electrónico
    const templateParams = {
        from_name: name,
        to_name: 'Mauricio Ariel Buda',
        cellphone: phone,
        message: message,
        from_email: mail,
    };






    // Enviar el correo electrónico
    emailjs.send('service_5y2quzg', 'template_7c5puch', templateParams)
        .then(function(response) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Correo enviado!",
                text: "Muchas gracias, te responderemos a la brevedad 🤘",
                showConfirmButton: false,
                timer: 1500
              });

              setTimeout(() => {
                location.reload();
              }, 1400);

        }, function(error) {
            console.log('FAILED...', error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "¡Algo falló!",
                text: "Por favor, revisá tu conexión y volvé a intentar",
                showConfirmButton: false,
                timer: 2500
              });
        });
});
// TERMINA TODO LO DE ENVIAR MAIL DE CONSULTAS ↑









// DECLARACIÓN DE VARIABLES Y ASIGNACIÓN DE EVENTOS
let botonMiCUenta = document.getElementById("boton-mi-cuenta");
botonMiCUenta.addEventListener("click", mostrarOcultarSeccionCuenta);

let sectionCuenta = document.getElementById("section-mi-cuenta");

let buttonXCuenta = document.getElementById("button-x-cuenta");
buttonXCuenta.addEventListener("click", mostrarOcultarSeccionCuenta )


let navbar = document.getElementById("navbar");
let videoBg = document.getElementById("video-bg");
let cursos = document.getElementById("cursos");
let sobreNosotros = document.getElementById("sobre-nosotros");
let contacto = document.getElementById("contacto");

let botonMiCuenta = document.getElementById("boton-mi-cuenta");

let botonConsulta = document.getElementById("boton-consulta");
botonConsulta.addEventListener("click", mostrarOcultarSeccionFormularioConsulta);
let formularioConsulta = document.getElementById("formulario-consulta");

let botonXForm = document.getElementById("button-x-fomrulario");
botonXForm.addEventListener("click", mostrarOcultarSeccionFormularioConsulta);





// Función para mostrar la sección de cuenta
function mostrarOcultarSeccionCuenta () {
  sectionCuenta.classList.toggle("aplicar-display-none");

  navbar.classList.toggle("aplicar-borroso");
  videoBg.classList.toggle("aplicar-borroso");
  cursos.classList.toggle("aplicar-borroso");
  sobreNosotros.classList.toggle("aplicar-borroso");
  contacto.classList.toggle("aplicar-borroso");

  botonMiCuenta.disabled = !botonMiCUenta.disabled;
}

// Función para mostrar la sección de cuenta
function mostrarOcultarSeccionFormularioConsulta () {

  formularioConsulta.classList.toggle("aplicar-display-none");

  navbar.classList.toggle("aplicar-borroso");
  videoBg.classList.toggle("aplicar-borroso");
  cursos.classList.toggle("aplicar-borroso");
  sobreNosotros.classList.toggle("aplicar-borroso");
  contacto.classList.toggle("aplicar-borroso");

  botonMiCuenta.disabled = !botonMiCUenta.disabled;
}