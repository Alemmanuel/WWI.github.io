# Registro de Gaseosas

Este proyecto es una aplicación web para registrar y gestionar la venta de gaseosas. Utiliza Tailwind CSS para el diseño y proporciona una interfaz de usuario intuitiva para registrar, filtrar y gestionar las ventas de gaseosas.

## Características

- Registro de ventas de gaseosas con detalles como sabor, cantidad, tamaño, valor total, estado, modo de pago y nombre de la persona.
- Filtrado de registros por fecha, modo de pago, tamaño, cantidad y estado.
- Edición y eliminación de registros existentes.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- HTML5
- Tailwind CSS
- JavaScript
- Font Awesome

## Estructura del Proyecto

```
/c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── tailwind.config.js
└── README.md
```

## Instalación

1. Clona el repositorio en tu máquina local.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto.
   ```bash
   cd /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2
   ```
3. Instala las dependencias de Tailwind CSS.
   ```bash
   npm install
   ```

## Configuración de Tailwind CSS

El archivo `tailwind.config.js` contiene la configuración de Tailwind CSS. Aquí puedes personalizar los colores, fuentes y otros aspectos del diseño.

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  // ...existing code...
}
```

## Uso

### Registro de Gaseosas

1. Abre el archivo `index.html` en tu navegador.
2. Completa el formulario de registro con los detalles de la gaseosa.
3. Haz clic en el botón "Registrar Gaseosa" para abrir el modal de confirmación.
4. Confirma el registro para agregar la gaseosa a la lista.

### Filtrado de Registros

1. Utiliza los campos de filtro para seleccionar los criterios deseados.
2. Haz clic en "Aplicar Filtros" para ver los registros que coinciden con los criterios.
3. Haz clic en "Eliminar Filtros" para restablecer los filtros y ver todos los registros.

### Edición y Eliminación de Registros

1. Haz clic en el icono de edición junto al registro que deseas editar.
2. Completa los campos en el modal de edición y haz clic en "Guardar".
3. Haz clic en el icono de eliminación junto al registro que deseas eliminar.
4. Confirma la eliminación en el modal de confirmación.

## Diseño Responsivo

El diseño de la aplicación es responsivo y se adapta a diferentes tamaños de pantalla. En pantallas pequeñas, las celdas del formulario se muestran una debajo de otra. En pantallas medianas y grandes, las celdas se muestran en dos columnas.

```html
<!-- filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/index.html -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200">
  <!-- ...existing code... -->
</div>
```

## Modales

La aplicación utiliza modales para confirmar el registro, editar y eliminar registros. Los modales tienen un fondo blanco y se centran en la pantalla.

```html
<!-- filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/index.html -->
<div id="confirmModal" class="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center hidden">
  <div class="bg-white p-6 rounded-lg shadow-lg w-80">
    <!-- ...existing code... -->
  </div>
</div>
```

## Scroll en la Tabla de Registros

La tabla de registros tiene un contenedor con scroll horizontal para manejar registros largos.

```html
<!-- filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/index.html -->
<div id="gaseosasList" class="bg-gray-200 p-6 rounded-lg shadow-md overflow-x-auto">
  <table class="min-w-full divide-y divide-neutral-300">
    <!-- ...existing code... -->
  </table>
</div>
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
