
# Portfolio Estudiantil - README

## Descripción
Este proyecto es un portfolio estudiantil desarrollado en HTML, CSS (con Tailwind CSS) y JavaScript. Ofrece una interfaz accesible y personalizable con funcionalidades modernas para mejorar la experiencia del usuario, incluyendo un formulario de contacto con validaciones y retroalimentación.

## Características Implementadas

### 1. Modo Claro y Oscuro
- **Descripción**: Sistema de alternancia entre modo claro y oscuro para mejorar la legibilidad y adaptarse a las preferencias del usuario.
- **Detalles**:
  - Botones dedicados (☀️ Claro / 🌙 Oscuro) para cambiar entre modos.
  - Ajuste dinámico de colores de fondo, texto, botones, navbar, footer y formulario.
  - Paleta de colores optimizada para alto contraste y alineada con cada tema.
  - Persistencia de la selección mediante `localStorage` para mantener la preferencia entre sesiones y páginas.

### 2. Modo Daltónico
- **Descripción**: Modo para mejorar la accesibilidad para personas con daltonismo.
- **Detalles**:
  - Botón para activar/desactivar el modo, ajustando colores a una paleta optimizada para protanopía, deuteranopía y tritanopía.
  - Colores diseñados para alto contraste y diferenciación, cumpliendo con estándares WCAG.
  - Persistencia de la selección mediante `localStorage`.

### 3. Ajuste de Tamaño de Letra
- **Descripción**: Funcionalidad para aumentar o disminuir el tamaño de la fuente, mejorando la accesibilidad.
- **Detalles**:
  - Botones para incrementar (`+`) o decrementar (`-`) el tamaño de la fuente.
  - Cambios aplicados dinámicamente a todo el contenido.
  - Persistencia del tamaño seleccionado mediante `localStorage`.

### 4. Formulario de Contacto
- **Descripción**: Formulario en `contacto.html` para que los visitantes dejen mensajes.
- **Detalles**:
  - Campos: Nombre (`input type="text"`), Correo Electrónico (`input type="text"`), Asunto (`input type="text"`), Mensaje (`textarea`), Botón Enviar.
  - Validaciones en `scripts/contacto.js`:
    - Todos los campos son obligatorios.
    - El email debe seguir un formato válido (ej: `usuario@dominio.com`).
    - Retroalimentación: Campos con errores se marcan con la clase `.error` y se muestra una lista de mensajes. En caso de éxito, se muestra un mensaje personalizado con el nombre del usuario.
  - Estilos en `estilos/styles.css` con la clase `.form-input` para inputs, y clases `.error`, `.error-text`, `.success` para retroalimentación visual.
  - Adaptación de colores al modo claro, oscuro y daltónico.

### 5. Mejora de Colores para Cada Tema
- **Descripción**: Optimización de paletas de colores para todos los modos.
- **Detalles**:
  - **Modo Claro**: Tonos suaves con alto contraste para facilitar la lectura.
  - **Modo Oscuro**: Colores oscuros con texto claro para reducir fatiga visual.
  - **Modo Daltónico**: Colores de alto contraste y diferenciación para accesibilidad.
  - Estilos responsivos con pseudoclases como `:focus` para inputs del formulario.
  - Cumplimiento con estándares de accesibilidad WCAG.

### 6. Persistencia de Configuraciones
- **Descripción**: Configuraciones de modo claro/oscuro, modo daltónico y tamaño de letra se guardan en `localStorage`.
- **Detalles**: Las preferencias se mantienen al recargar la página o navegar entre secciones, asegurando una experiencia consistente.

### 7. Pruebas Manuales
- **Descripción**: Pruebas exhaustivas para verificar el funcionamiento de todas las funcionalidades.
- **Detalles**:
  - **Modo Claro/Oscuro y Daltónico**: Verificación de cambios de colores en todos los elementos (fondo, texto, botones, navbar, footer, formulario).
  - **Tamaño de Letra**: Comprobación de incrementos/decrementos en todas las secciones.
  - **Formulario**: Validación de campos, manejo de errores y mensajes de éxito.
  - **Persistencia**: Confirmación de que las configuraciones se mantienen al navegar entre páginas.
  - **Compatibilidad**: Pruebas en navegadores (Chrome, Firefox, Edge) para consistencia.

## Estructura del Proyecto
- **index.html**: Página principal con controles de interfaz y contenido dinámico.
- **Páginas adicionales**: `avisos.html`, `sobre-mi.html`, `materias-2025.html`, `contacto.html`.
- **estilos/styles.css**: Estilos personalizados con Tailwind CSS, incluyendo `.form-input`, `.error`, `.error-text`, `.success`.
- **scripts/**:
  - `dark_mode.js`: Lógica para modo claro/oscuro.
  - `tamano_letra.js`: Lógica para ajuste de tamaño de fuente.
  - `daltonismo.js`: Lógica para modo daltónico.
  - `contacto.js`: Lógica de validación del formulario.
- **Recursos**: Imagen de validaciones del formulario disponible en el repositorio.

## Instalación y Uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/agustin-bergomi/Actividad1.git
   ```
2. Abre `index.html` en un navegador web.
3. Usa los controles de interfaz para personalizar la experiencia y el formulario en `contacto.html` para enviar mensajes.

## Tecnologías Utilizadas
- **HTML5**: Estructura de las páginas.
- **Tailwind CSS**: Estilizado responsivo y moderno.
- **CSS**: Estilos personalizados en `styles.css`.
- **JavaScript**: Lógica para funcionalidades dinámicas y validaciones.
- **LocalStorage**: Persistencia de preferencias del usuario.

## Contribuciones
¡Las contribuciones son bienvenidas! Crea un *issue* o *pull request* con tus sugerencias o mejoras.

## Autor
Agustín Bergomi - 2025

