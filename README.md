# Portafolio Personal - Juan Cristóbal Mera Vásquez

Portafolio web personal desarrollado como Actividad Integradora de la materia de Programación de Sistemas Web. 
Presenta información personal, habilidades técnicas, proyectos desarrollados y un formulario de contacto, construido con HTML, CSS y JavaScript puro (sin frameworks), aplicando etiquetas semánticas, variables CSS, Flexbox, buenas prácticas, manipulación del DOM y persistencia de datos con localStorage.

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — variables personalizadas en `:root`, Flexbox, pseudoclases (`:hover`, `:focus`), transiciones y diseño responsivo con `@media`
- **JavaScript (ES6+)** — manipulación del DOM, eventos con `addEventListener()`, `fetch` para carga de datos, y `localStorage` para persistencia
- **JSON** — archivo de datos externo con la información de los proyectos
- **Google Fonts** — Inter y Poppins
- **Font Awesome** (CDN) — iconografía de la sección Habilidades

No se usa ningún framework de CSS ni JavaScript de terceros: todo el diseño y comportamiento visual está escrito a mano como parte del aprendizaje del curso.

## Funcionalidades implementadas con JavaScript

### Modo oscuro con persistencia
Botón que alterna entre tema claro y oscuro modificando clases del `<body>`. La preferencia se guarda en `localStorage` y se restaura automáticamente al recargar o volver a abrir la página.

### Carga dinámica de proyectos
Los proyectos se cargan desde un archivo externo `data/proyectos.json` mediante `fetch()`, y las tarjetas se generan dinámicamente en el DOM con `createElement()`, simulando el consumo de una API.

### Filtros por categoría
Botones que permiten filtrar los proyectos por tipo (Todos / Web / Móvil), mostrando u ocultando las tarjetas según la categoría seleccionada. El filtro elegido se guarda en `localStorage` y se mantiene entre visitas.

### Modal de detalle de proyectos
Al hacer clic en una tarjeta se abre una ventana modal con la información ampliada del proyecto: imagen, categoría, descripción completa, tecnologías utilizadas y simula enlace al repositorio. Incluye transiciones CSS de apertura y cierre (botón X).

### Validación del formulario de contacto
Valida que los campos de nombre, correo y mensaje no estén vacíos, y verifica el formato del correo electrónico mediante una expresión regular propia, sin depender de la validación por defecto del navegador. Muestra mensajes de error o confirmación dinámicamente.

### Saludo personalizado al visitante
El nombre ingresado en el formulario se guarda en `localStorage` y se utiliza para personalizar el mensaje de bienvenida de la sección de inicio en las siguientes visitas.

### Menú de navegación activo
Resalta automáticamente el enlace del menú correspondiente a la sección visible durante el desplazamiento.


## Estructura del proyecto

```
portafolio-Juan_Mera/
├── index.html
├── css/
│   └── styles.css
├── js/
│ └── script.js
├── data/
│ └── proyectos.json
├── img/
│   └── avatar.jpeg
│   └── RAD.jpeg
│   └── GPS.jpeg
│   └── FUM.jpeg
└── README.md
```

## Secciones del sitio

| Sección | Descripción |
|---------|-------------|
| Inicio  | Presentación principal con nombre, eslogan y foto |
| Sobre mí | Trayectoria profesional y académica |
| Habilidades | Competencias técnicas con íconos descriptivos |
| Proyectos | Proyectos desarrollados, cargados dinámicamente, con filtros por categoría y modal de detalle |
| Contacto | Información de contacto y formulario (nombre, correo, mensaje), validado con JavaScript |

## Cómo visualizar el proyecto

1. Clona este repositorio o descarga el ZIP:
   ```bash
   git clone https://github.com/juancmera/portafolio-Juan_Mera.git
   ```
2. Abre el archivo `index.html` directamente en tu navegador.

No requiere instalación ni dependencias. Las fuentes tipográficas y los íconos se cargan desde CDN, por lo que se necesita conexión a internet para verlos con su estilo final.

3. También puede verse publicado en GitHub Pages en:
`https://juancmera.github.io/portafolio-Juan_Mera/`


## Captura de pantalla

<img width="1567" height="857" alt="image" src="https://github.com/user-attachments/assets/e303ea16-4483-4a6e-9ec2-b464071e304f" />



## Autor

**Juan Cristóbal Mera Vásquez**
Estudiante de Ingeniería en Sistemas Inteligentes — Universidad ECOTEC

[GitHub](https://github.com/juancmera)
[LinkedIn](https://linkedin.com/in/juanmmera)
