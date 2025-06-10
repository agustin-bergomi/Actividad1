function setModo(modo) {
    const body = document.body;

    if (modo === 'oscuro') {
      body.classList.remove('bg-gray-100', 'text-gray-900');
      body.classList.add('bg-gray-900', 'text-gray-100');
      localStorage.setItem('modo', 'oscuro');
    } else {
      body.classList.remove('bg-gray-900', 'text-gray-100');
      body.classList.add('bg-gray-100', 'text-gray-900');
      localStorage.setItem('modo', 'claro');
    }
  }

  // Aplicar el modo guardado al cargar la página
  window.onload = function () {
    const modoGuardado = localStorage.getItem('modo');
    if (modoGuardado) {
      setModo(modoGuardado);
    }
  };