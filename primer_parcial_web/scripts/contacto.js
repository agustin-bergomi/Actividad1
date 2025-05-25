    const form = document.getElementById('contactoForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensajeTexto = document.getElementById('mensajeTexto');
    const mensaje = document.getElementById('mensaje');

    function validarEmail(correo) {
        const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return regex.test(correo);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let errores = [];

        // Limpiar estilos y mensaje previo
        [nombre, email, asunto, mensajeTexto].forEach(input => input.classList.remove('error'));
        mensaje.innerHTML = '';
        mensaje.classList.remove('success', 'error-text');

        // Validaciones
        if (nombre.value.trim() === '') {
            errores.push('El nombre es obligatorio.');
            nombre.classList.add('error');
        }

        if (!validarEmail(email.value.trim())) {
            errores.push('Debe ingresar un email válido.');
            email.classList.add('error');
        }

        if (asunto.value.trim() === '') {
            errores.push('Debe ingresar un asunto.');
            asunto.classList.add('error');
        }

        if (mensajeTexto.value.trim() === '') {
            errores.push('Debe ingresar un mensaje.');
            mensajeTexto.classList.add('error');
        }

        if (errores.length > 0) {
            mensaje.classList.add('error-text');
            mensaje.innerHTML = errores.join('<br>');
        } else {
            mensaje.classList.add('success');
            mensaje.innerHTML = `Gracias por su contacto, ${nombre.value.trim()}.<br>En breve le estaré respondiendo.`;
        }
    });
