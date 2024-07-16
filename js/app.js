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
