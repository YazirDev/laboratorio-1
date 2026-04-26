
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        // Expresión regular para validar el formato del correo electrónico
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });

    /*comentario prueba*/
