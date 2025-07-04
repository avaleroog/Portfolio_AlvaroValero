# Portfolio de Álvaro Valero

## Instrucciones para personalizar el portfolio

### 🎨 Colores
Los colores están definidos como variables SCSS en `main.component.scss`:
- `$color-background`: #121212 (fondo principal)
- `$color-surface`: #1a1a1a (sidebar y tarjetas)
- `$color-text`: #ffffff (texto)
- `$color-primary`: #00fff0 (verde agua - botones, títulos)
- `$color-accent`: #ff0050 (fucsia - efectos secundarios)

### 📹 Agregar videos a los proyectos
1. Coloca tus videos en la carpeta `src/assets/videos/`
2. Actualiza las rutas en `main.component.html`:
   ```html
   <source src="assets/videos/tu-video.mp4" type="video/mp4">
   ```

### 🔧 Agregar iconos de tecnologías
1. Descarga los iconos SVG de las tecnologías
2. Colócalos en `src/assets/icons/`
3. Actualiza las rutas en `main.component.html`

### 📱 Características del diseño
- **Responsive**: Se adapta a móviles y desktop
- **Sidebar fijo**: Navegación lateral en desktop, horizontal en móvil
- **Videos integrados**: Cada proyecto puede tener un video demo
- **Hover effects**: Efectos suaves en tecnologías y proyectos
- **Scroll personalizado**: Scrollbar con colores del tema

### 🎯 Tarjetas de Tecnologías Mejoradas
Las tarjetas de tecnologías ahora incluyen:
- **Niveles de experiencia**: Principiante (rojo), Intermedio (amarillo), Avanzado (verde agua)
- **Efectos hover**: Elevación, brillo, rotación de glow
- **Animaciones**: Aparición escalonada y efectos de partículas
- **Responsive**: Se adaptan perfectamente a móviles

#### Estructura de cada tarjeta:
- **Icono**: SVG de la tecnología con efectos hover
- **Nombre**: Título de la tecnología
- **Nivel**: Badge con color según experiencia
- **Efectos**: Glow rotativo, brillo en texto, partículas

#### Para personalizar tecnologías:
1. Edita el HTML en `main.component.html` sección `#tecnologias`
2. Cambia los atributos `data-level` (beginner/intermediate/advanced)
3. Actualiza los nombres y iconos según tus habilidades
4. Los iconos SVG están optimizados para el tema oscuro

### 🚀 Para ejecutar el proyecto
```bash
npm start
```

### 📝 Personalización
- Cambia los textos en `main.component.html`
- Ajusta los estilos en `main.component.scss`
- Añade más proyectos siguiendo la estructura existente
