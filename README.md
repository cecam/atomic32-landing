
# Landing page Atomic

Prueba técnica para frontend engineer en Atomic32

## Instalation

Posterior a clonar el repositorio e instalar dependencias 

>npm install

será necesario agregar la carpeta de imágenes (que va adjunta en el correo) dentro de /public
## Correr el proyecto

Para correr el proyecto, es necesario desde command prompt, acceder a la carpeta del proyecto y correr el siguiente comando 

> npm run dev

Posteriormente, desde el navegador deberá acceder a la ruta y comenzar a testearlo

> http://localhost:3000/

## Notas del proyecto

Debido a que se dieron 72 horas para terminar el proyecto, tuve que dcidir entre terminar el proyecto completo o hacer componentes reusables para mostrar conocimientos y habilidades; partiendo de elegir la segunda opción, me enfoqué en hacer lo mejor posible la sección del formulario.

Para esto, se creó un componente "Form.tsx" el cual recibe una configuración y a partir de ahí genera en automático cada sección del formulario, de igual forma, el layout (el cual está memoizado para evitar su constante renderización) funciona de manera geneérica

### Puntos a mejorar

Cuestiones en las que trabajaría de tener más tiempo:

1. Tests de la aplicación
2. Corregir la validación del botón en el formulario para impedir el avance si los campos están vacíos
3. Responsive
4. Landing page
