# 📬 Formulario de Contacto – Portfolio

https://agustin-bergomi.github.io/Actividad1/primer_parcial_web/contacto.html

Este formulario permite a los visitantes del portfolio dejar un mensaje de contacto. Incluye validaciones de los datos ingresados y brinda retroalimentación al usuario según el resultado.

---

## 🧱 Estructura del formulario

El formulario se encuentra en `contacto.html` y contiene los siguientes campos:

- **Nombre** (`input type="text"`)
- **Correo Electrónico** (`input type="text"`)  
- **Asunto** (`input type="text"`)
- **Mensaje** (`textarea`)
- **Botón Enviar**

> Cada campo está estilizado con la clase `form-input` definida en el archivo `styles.css`.

---

## 🎨 Estilos

Los estilos están definidos en el archivo:  
📁 `estilos/styles.css`

Se utiliza una clase común para los inputs (`.form-input`) con estilos responsivos y pseudoclases como `:focus`.  
También se definen clases para errores (`.error`, `.error-text`) y éxito (`.success`).

### Dark Mode:

- Al pasar a Dark Mode el formulario cambia de colores para que sea facil de leer por los usuarios
  
---

## ⚙️ Validación

La lógica de validación está en un script JavaScript ubicado en:  
📁 `scripts/contacto.js`

### Reglas:

- Todos los campos son obligatorios.
- El email debe tener un formato válido (ej: `usuario@dominio.com`).
- Si hay errores, se marcan los campos correspondientes y se muestra una lista de mensajes.
- Si todo está correcto, se muestra un mensaje de agradecimiento personalizado con el nombre del usuario.
  
---

![FormularioValidaciones](https://github.com/user-attachments/assets/faf7902e-e03c-4ad7-80ac-48cc069fa72c)

