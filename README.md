# 🥤 Registro de Gaseosas

Este proyecto es una aplicación web para registrar y gestionar la venta de gaseosas. Utiliza Tailwind CSS para el diseño y proporciona una interfaz de usuario intuitiva para registrar, filtrar y gestionar las ventas de gaseosas.

## ✨ Características

- Registro de ventas de gaseosas con detalles como sabor, cantidad, tamaño, valor total, estado, modo de pago y nombre de la persona.
- Filtrado de registros por fecha, modo de pago, tamaño, cantidad y estado.
- Edición y eliminación de registros existentes.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.

## 🛠️ Tecnologías Utilizadas

- HTML5
- Tailwind CSS
- JavaScript
- Font Awesome
- Express
- Neon
- PostgreSQL
- CORS

## 📁 Estructura del Proyecto

```
/c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── server/
│   ├── server.js
│   ├── controllers/
│   │   └── gaseosasController.js
│   ├── models/
│   │   └── gaseosa.js
│   └── routes/
│       └── gaseosasRoutes.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Instalación

1. Clona el repositorio en tu máquina local.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto.
   ```bash
   cd /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2
   ```
3. Instala las dependencias de Node.js.
   ```bash
   npm install
   ```

## 🎨 Configuración de Tailwind CSS

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

## 🚀 Uso

### 📝 Registro de Gaseosas

1. Abre el archivo `index.html` en tu navegador.
2. Completa el formulario de registro con los detalles de la gaseosa.
3. Haz clic en el botón "Registrar Gaseosa" para abrir el modal de confirmación.
4. Confirma el registro para agregar la gaseosa a la lista.

### 🔍 Filtrado de Registros

1. Utiliza los campos de filtro para seleccionar los criterios deseados.
2. Haz clic en "Aplicar Filtros" para ver los registros que coinciden con los criterios.
3. Haz clic en "Eliminar Filtros" para restablecer los filtros y ver todos los registros.

### ✏️🗑️ Edición y Eliminación de Registros

1. Haz clic en el icono de edición junto al registro que deseas editar.
2. Completa los campos en el modal de edición y haz clic en "Guardar".
3. Haz clic en el icono de eliminación junto al registro que deseas eliminar.
4. Confirma la eliminación en el modal de confirmación.

## 📱💻 Diseño Responsivo

El diseño de la aplicación es responsivo y se adapta a diferentes tamaños de pantalla. En pantallas pequeñas, las celdas del formulario se muestran una debajo de otra. En pantallas medianas y grandes, las celdas se muestran en dos columnas.

```html
<!-- filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/index.html -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200">
  <!-- ...existing code... -->
</div>
```

## 📋 Modales

La aplicación utiliza modales para confirmar el registro, editar y eliminar registros. Los modales tienen un fondo blanco y se centran en la pantalla.

```html
<!-- filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/index.html -->
<div id="confirmModal" class="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center hidden">
  <div class="bg-white p-6 rounded-lg shadow-lg w-80">
    <!-- ...existing code... -->
  </div>
</div>
```

## 📜 Scroll en la Tabla de Registros

La tabla de registros tiene un contenedor con scroll horizontal para manejar registros largos.

```html
<!-- filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/index.html -->
<div id="gaseosasList" class="bg-gray-200 p-6 rounded-lg shadow-md overflow-x-auto">
  <table class="min-w-full divide-y divide-neutral-300">
    <!-- ...existing code... -->
  </table>
</div>
```

## 🖥️ Backend y Archivos JavaScript

### app.js

El archivo `app.js` contiene la lógica de la aplicación, incluyendo la gestión de formularios, modales y filtrado de registros.

#### Funcionalidades del archivo `app.js`

- **Registro de Gaseosas**: Maneja la lógica para registrar nuevas gaseosas.
- **Modales**: Controla la apertura y cierre de los modales de confirmación, edición y eliminación.
- **Filtrado de Registros**: Aplica y elimina filtros para mostrar registros específicos.

```javascript
// filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/app.js
document.addEventListener('DOMContentLoaded', () => {
  // Lógica para manejar el registro de gaseosas
  const gaseosaForm = document.getElementById('gaseosaForm');
  const gaseosasList = document.getElementById('gaseosasList');
  const confirmModal = document.getElementById('confirmModal');
  const editModal = document.getElementById('editModal');
  const deleteModal = document.getElementById('deleteModal');

  // Función para abrir el modal de confirmación
  document.getElementById('openConfirmModal').addEventListener('click', () => {
    confirmModal.classList.remove('hidden');
  });

  // Función para cerrar el modal de confirmación
  document.getElementById('cancelRegister').addEventListener('click', () => {
    confirmModal.classList.add('hidden');
  });

  // Función para confirmar el registro
  document.getElementById('confirmRegister').addEventListener('click', () => {
    // Lógica para registrar la gaseosa
    confirmModal.classList.add('hidden');
  });

  // Función para abrir el modal de edición
  gaseosasList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-button')) {
      editModal.classList.remove('hidden');
    }
  });

  // Función para cerrar el modal de edición
  document.getElementById('cancelEdit').addEventListener('click', () => {
    editModal.classList.add('hidden');
  });

  // Función para guardar los cambios de edición
  document.getElementById('saveEdit').addEventListener('click', () => {
    // Lógica para guardar los cambios
    editModal.classList.add('hidden');
  });

  // Función para abrir el modal de eliminación
  gaseosasList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
      deleteModal.classList.remove('hidden');
    }
  });

  // Función para cerrar el modal de eliminación
  document.getElementById('cancelDelete').addEventListener('click', () => {
    deleteModal.classList.add('hidden');
  });

  // Función para confirmar la eliminación
  document.getElementById('confirmDelete').addEventListener('click', () => {
    // Lógica para eliminar el registro
    deleteModal.classList.add('hidden');
  });

  // Función para aplicar filtros
  document.getElementById('applyFilters').addEventListener('click', () => {
    // Lógica para aplicar filtros
  });

  // Función para eliminar filtros
  document.getElementById('clearFilters').addEventListener('click', () => {
    // Lógica para eliminar filtros
  });
});
```

## 🎨 Archivos CSS

### styles.css

El archivo `styles.css` contiene estilos personalizados adicionales que complementan los estilos de Tailwind CSS.

#### Funcionalidades del archivo `styles.css`

- **Estilos Personalizados**: Define estilos adicionales que no están cubiertos por Tailwind CSS.
- **Tipografía**: Configura la fuente principal de la aplicación.

```css
/* filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/public/styles.css */
/* Estilos personalizados */
body {
  font-family: 'Inter', sans-serif;
}
/* ...existing code... */
```

## 📦 Dependencias

### Dependencias de Node.js

Para utilizar las funcionalidades del backend en este proyecto, es necesario instalar las siguientes dependencias:

- **express**: Un framework web para Node.js.
- **neon**: Un cliente para PostgreSQL.
- **pg**: Un cliente de PostgreSQL para Node.js.
- **cors**: Un middleware para habilitar CORS (Cross-Origin Resource Sharing).

Instalación de dependencias:

```bash
npm install express neon pg cors
```

### Configuración del Servidor

El archivo `server.js` contiene la configuración del servidor utilizando Express.

```javascript
// filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/server/server.js
const express = require('express');
const cors = require('cors');
const gaseosasRoutes = require('./routes/gaseosasRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/gaseosas', gaseosasRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Controladores

El archivo `gaseosasController.js` contiene la lógica para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las gaseosas.

```javascript
// filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/server/controllers/gaseosasController.js
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const getGaseosas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gaseosas');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createGaseosa = async (req, res) => {
  const { sabor, cantidad, tamaño, valor_total, estado, modo_pago, nombre_persona } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO gaseosas (sabor, cantidad, tamaño, valor_total, estado, modo_pago, nombre_persona) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [sabor, cantidad, tamaño, valor_total, estado, modo_pago, nombre_persona]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ...other CRUD operations...

module.exports = {
  getGaseosas,
  createGaseosa,
  // ...other exports...
};
```

### Rutas

El archivo `gaseosasRoutes.js` define las rutas para las operaciones CRUD de las gaseosas.

```javascript
// filepath: /c:/Users/cmonroyitos/Documents/Proyectos/Registro_Gaseosas2/server/routes/gaseosasRoutes.js
const express = require('express');
const { getGaseosas, createGaseosa } = require('../controllers/gaseosasController');

const router = express.Router();

router.get('/', getGaseosas);
router.post('/', createGaseosa);
// ...other routes...

module.exports = router;
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## ℹ️ Información Adicional

### Funcionalidades Detalladas

- **Registro de Gaseosas**: Permite registrar una nueva gaseosa con detalles específicos como sabor, cantidad, tamaño, valor total, estado, modo de pago y nombre de la persona.
- **Filtrado de Registros**: Los usuarios pueden filtrar los registros de gaseosas por diferentes criterios como fecha, modo de pago, tamaño, cantidad y estado.
- **Edición de Registros**: Los usuarios pueden editar los detalles de un registro existente.
- **Eliminación de Registros**: Los usuarios pueden eliminar un registro existente después de confirmar la acción.

### Diseño y Estilo

- **Tailwind CSS**: Utiliza Tailwind CSS para un diseño moderno y responsivo.
- **Font Awesome**: Utiliza iconos de Font Awesome para mejorar la interfaz de usuario.

### Scripts y Funcionalidad

- **JavaScript**: Utiliza JavaScript para manejar la lógica de la aplicación, incluyendo la gestión de formularios, modales y filtrado de registros.

### Personalización

- **Configuración de Tailwind CSS**: Puedes personalizar los colores, fuentes y otros aspectos del diseño en el archivo `tailwind.config.js`.
- **Estilos Personalizados**: Puedes agregar estilos personalizados en el archivo `styles.css`.

## 🏆 Mérito del Proyecto

El mérito de este proyecto radica en la modernización de una empresa que gestionaba sus registros en papel, llevándola a una plataforma digital eficiente y accesible. Esta transformación ha permitido una mejor gestión de los datos, mayor accesibilidad y una interfaz de usuario más intuitiva.

## 📸 Pantallazos

A continuación, se presentan algunos pantallazos de la aplicación:


![Screenshot 2025-02-21 144607](https://github.com/user-attachments/assets/3fef7e88-a72e-4df6-9937-cfff72925a51)


![Screenshot 2025-02-21 144622](https://github.com/user-attachments/assets/58694da2-b1df-4969-89b9-e8b2987b0284)


![Screenshot 2025-02-21 144630](https://github.com/user-attachments/assets/4f641cad-511e-4604-bfb2-f9378f4d3e5c)


![Screenshot 2025-02-21 144650](https://github.com/user-attachments/assets/9399192c-7de6-4274-9910-300415039b71)


## 📧 Contacto

Si tienes alguna pregunta o necesitas más información, puedes contactarme a través de mi correo electrónico: [tuemail@example.com](mailto:tuemail@example.com).
