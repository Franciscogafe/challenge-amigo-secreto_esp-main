<h1 align="center">🎁 Juego del Amigo Secreto</h1>

Este proyecto es una página web interactiva para jugar al **Amigo Secreto**, donde los usuarios pueden añadir nombres a una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto" de cada participante.

## 📋 Descripción

La página permite:
- Ingresar nombres de amigos en un campo de texto.
- Validar que no se ingresen **nombres repetidos**.
- Validar que no se ingresen **espacios vacíos** o solo espacios.
- Mostrar la lista de amigos agregados.
- Realizar un sorteo aleatorio para seleccionar al amigo secreto.
- Mostrar el resultado en pantalla.

## 🚀 Tecnologías utilizadas

- **HTML5** para la estructura de la página.
- **CSS3** para el diseño y estilos visuales.
- **JavaScript** para la lógica del juego y validaciones.

## 🛠️ Funcionalidades

1. **Agregar amigo**  
   - Escribe un nombre en el campo de texto y presiona **Añadir**.
   - El sistema verifica que el nombre:
     - No esté repetido (sin importar mayúsculas o minúsculas).
     - No sea un campo vacío o contenga solo espacios.

2. **Lista de amigos**  
   - Muestra todos los nombres ingresados en formato de lista `<ul>`.

3. **Sorteo**  
   - Al presionar **Sortear amigo**, el sistema elige un nombre al azar de la lista.
   - El resultado se muestra en pantalla.

## 📏 Reglas de validación

- ❌ No se permiten **nombres repetidos** (ej: "Pedro" y "pedro" se consideran iguales).
- ❌ No se permite ingresar **solo espacios en blanco**.
- ✔️ Se ignoran las mayúsculas/minúsculas al validar.
- ✔️ Los nombres se muestran tal como el usuario los escribió (respetando mayúsculas/minúsculas).

## 📸 Capturas de pantalla

<img width="1346" height="597" alt="Captura de pantalla 2025-08-15 101859" src="https://github.com/user-attachments/assets/4c680a42-8940-40c2-ba43-926c9ef9da97" />

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.  
Puedes usarlo, modificarlo y adaptarlo libremente.
