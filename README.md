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

- Al pasar a Dark Mode el formulario cambia de colores para que sea facil de leer por los usuarios.
El tema (oscuro o claro) persiste a traves de la navegacion por las distintas paginas del sitio.
Se adecuaron los estilos para que el diseño este alineado con ambos temas considerando, por ejemplo, los contrastes y la paleta de colores.
  
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

---


# Portfolio Estudiantil - README

## Descripción
Este proyecto es un portfolio estudiantil desarrollado en HTML, CSS (con Tailwind CSS) y JavaScript. Incluye una interfaz de usuario accesible y personalizable con funcionalidades modernas para mejorar la experiencia del usuario.

## Características Implementadas

### 1. Modo Claro y Oscuro
- **Descripción**: Se implementó un sistema de alternancia entre modo claro y oscuro para mejorar la legibilidad y adaptarse a las preferencias del usuario.
- **Detalles**:
  - Botones dedicados para cambiar entre modos (☀️ Claro / 🌙 Oscuro).
  - Los colores de fondo, texto y componentes se ajustan dinámicamente según el modo seleccionado.
  - Persistencia de la selección utilizando almacenamiento local (`localStorage`) para mantener la preferencia del usuario entre sesiones.

### 2. Modo Daltónico
- **Descripción**: Se agregó un modo daltónico para mejorar la accesibilidad para personas con daltonismo.
- **Detalles**:
  - Botón para activar/desactivar el modo daltónico, que ajusta los colores a una paleta optimizada para mejor contraste y diferenciación.
  - La paleta de colores fue diseñada para ser compatible con diferentes tipos de daltonismo (protanopía, deuteranopía, tritanopía).
  - Persistencia de la selección mediante `localStorage`.

### 3. Ajuste de Tamaño de Letra
- **Descripción**: Se incluyó una funcionalidad para aumentar o disminuir el tamaño de la fuente, mejorando la accesibilidad para usuarios con dificultades visuales.
- **Detalles**:
  - Botones para incrementar (`+`) o decrementar (`-`) el tamaño de la fuente.
  - Cambios aplicados dinámicamente al contenido de la página.
  - Persistencia del tamaño seleccionado mediante `localStorage`.

### 4. Mejora de Colores para Cada Tema
- **Descripción**: Se optimizaron las paletas de colores para cada modo (claro, oscuro y daltónico).
- **Detalles**:
  - En modo claro: Uso de tonos suaves y alto contraste para facilitar la lectura.
  - En modo oscuro: Colores oscuros con tonos de texto claros para reducir la fatiga visual.
  - En modo daltónico: Selección de colores con alto contraste y diferenciación para garantizar accesibilidad.
  - Los colores fueron probados para cumplir con estándares de accesibilidad (WCAG).

### 5. Persistencia de Configuraciones
- **Descripción**: Todas las configuraciones del usuario (modo claro/oscuro, modo daltónico, tamaño de letra) se guardan en `localStorage`.
- **Detalles**:
  - Al recargar la página, se aplican automáticamente las preferencias previas del usuario.
  - Mejora la experiencia al mantener la consistencia entre sesiones.

### 6. Pruebas Manuales
- **Descripción**: Se realizaron pruebas manuales exhaustivas para verificar el correcto funcionamiento de todas las funcionalidades.
- **Detalles**:
  - **Modo Claro/Oscuro**: Verificación de cambios de colores en todos los elementos (fondo, texto, botones, navbar, footer).
  - **Modo Daltónico**:  Verificación de cambios de colores en todos los elementos (fondo, texto, botones, navbar, footer).
  - **Tamaño de Letra**: Comprobación de incrementos/decrementos en diferentes secciones de la página.
  - **Persistencia**: Confirmación de que las configuraciones se mantienen tras navegar entre las páginas.
  - **Compatibilidad**: Pruebas en diferentes navegadores (Chrome, Firefox) para asegurar consistencia.

## Estructura del Proyecto
- **index.html**: Página principal con controles de interfaz (modo claro/oscuro, tamaño de letra, modo daltónico) y contenido dinámico.
- **estilos/styles.css**: Estilos personalizados complementados con Tailwind CSS.
- **scripts/**:
  - `dark_mode.js`: Lógica para el modo claro/oscuro.
  - `tamano_letra.js`: Lógica para el ajuste de tamaño de fuente.
  - `daltonismo.js`: Lógica para el modo daltónico.
- **Páginas adicionales**: `avisos.html`, `sobre-mi.html`, `materias-2025.html`, `contacto.html`.

## Tecnologías Utilizadas
- **HTML5**: Estructura de la página.
- **Tailwind CSS**: Estilizado responsivo y moderno.
- **JavaScript**: Lógica para funcionalidades dinámicas y persistencia.
- **LocalStorage**: Almacenamiento de preferencias del usuario.

## Autor
Agustín Bergomi - 2025

