# 🌹 Web Flores — Ramo Buchón Digital

> Un ramo buchón interactivo hecho con HTML, CSS y JavaScript puro. Flores animadas, estrellas, corazones flotantes y una dedicatoria especial. 💕

---

## 👤 Autor

**Dirkoayudame** — [github.com/Dirkoayudame](https://github.com/Dirkoayudame)

---

## 🌐 Demo en vivo

🔗 [Ver proyecto](https://github.com/Dirkoayudame/Web-Flores)

---

## 📁 Estructura del proyecto

```
Web-Flores/
│
├── Index.html              ← Página de inicio (pantalla de bienvenida)
│
└── DATOS/
    ├── FLORES.html         ← Página principal con el ramo buchón
    ├── main.js             ← Lógica: estrellas, corazones flotantes, tarjeta
    │
    ├── css/
    │   ├── style.css       ← Estilos de la página de inicio
    │   ├── main.css        ← Estilos del ramo buchón y animaciones
    │   └── main.css.map    ← Mapa del SCSS (no editar)
    │
    ├── scss/
    │   └── main.scss       ← Fuente SCSS (opcional, ya compilado)
    │
    └── img/
        ├── flowers.png     ← Ícono de la pestaña
        └── Floricienta.mp3 ← Música de fondo
```

---

## 🚀 Cómo ejecutar el proyecto

### Opción 1 — Abrir directo en el navegador (la más fácil)

1. Descarga o clona este repositorio:
   ```bash
   git clone https://github.com/Dirkoayudame/Web-Flores.git
   ```

2. Entra a la carpeta del proyecto:
   ```bash
   cd Web-Flores
   ```

3. Abre el archivo `Index.html` directamente en tu navegador:
   - En **Windows**: doble clic sobre `Index.html`
   - En **Mac**: clic derecho → *Abrir con* → tu navegador favorito
   - En **Linux**: `xdg-open Index.html`

4. ¡Listo! Verás la pantalla de bienvenida. Dale clic al botón y aparece el ramo. 🌹

---

### Opción 2 — Con Live Server en VS Code (recomendado para desarrollo)

> Esto permite ver los cambios en tiempo real sin recargar manualmente.

1. Instala [Visual Studio Code](https://code.visualstudio.com/)

2. Instala la extensión **Live Server**:
   - Abre VS Code
   - Ve a Extensiones (`Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Busca `Live Server` de *Ritwick Dey*
   - Clic en **Install**

3. Abre la carpeta del proyecto en VS Code:
   ```bash
   code Web-Flores
   ```

4. Clic derecho sobre `Index.html` → **Open with Live Server**

5. Se abrirá automáticamente en `http://127.0.0.1:5500/Index.html`

---

### Opción 3 — Con servidor HTTP de Python (sin instalar nada extra)

> Útil si ya tienes Python instalado.

1. Abre una terminal en la carpeta del proyecto

2. Corre el servidor:
   ```bash
   # Python 3
   python3 -m http.server 8080

   # Python 2
   python -m SimpleHTTPServer 8080
   ```

3. Abre tu navegador en:
   ```
   http://localhost:8080
   ```

---

## ✏️ Cómo personalizar

| Qué cambiar | Dónde hacerlo |
|---|---|
| Texto de bienvenida ("HOLA") | `Index.html` |
| Subtítulo ("para mi elfa especial") | `Index.html` |
| Mensaje de la tarjeta romántica | `DATOS/FLORES.html` |
| Colores de las flores | `DATOS/css/main.css` |
| Fondo y botón de inicio | `DATOS/css/style.css` |
| Música de fondo | Reemplaza `DATOS/img/Floricienta.mp3` |
| Tiempo en que aparece la tarjeta | `DATOS/main.js` → `setTimeout(..., 6000)` (en ms) |

---

## ✨ Características

- 🌸 **4 flores animadas** en CSS puro (2 amarillas, 2 rosas)
- ⭐ **Estrellas parpadeantes** generadas dinámicamente
- 🐻 **Osos buchones** animados en los costados del ramo
- 🎀 **Celofán brillante** con reflejo y lazo animado
- 💎 **Objetos buchones flotantes**: rosas, diamantes, osos, chocolates
- 💌 **Tarjeta de dedicatoria** que aparece automáticamente
- 🎵 **Música de fondo** en loop
- 📱 **Responsive** — funciona en celular y computadora

---

## 📜 Créditos

- Animación original de flores basada en [CodePen de Nilver TI](https://codepen.io/Nilver-TI/pen/PoroWJa)
- Mejoras, ramo buchón y dedicatoria por **Dirkoayudame**
