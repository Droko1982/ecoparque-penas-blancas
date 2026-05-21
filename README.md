# Ecoparque Peñas Blancas

Sitio web del **Ecoparque Peñas Blancas**, reserva natural y ecoparque de aventura en el Corregimiento de La Virginia, Calarcá, Quindío.

**Demo (6 idiomas):**
- 🇪🇸 ES — https://droko1982.github.io/ecoparque-penas-blancas/
- 🇺🇸 EN — https://droko1982.github.io/ecoparque-penas-blancas/en/
- 🇧🇷 PT — https://droko1982.github.io/ecoparque-penas-blancas/pt/
- 🇫🇷 FR — https://droko1982.github.io/ecoparque-penas-blancas/fr/
- 🇩🇪 DE — https://droko1982.github.io/ecoparque-penas-blancas/de/
- 🇮🇹 IT — https://droko1982.github.io/ecoparque-penas-blancas/it/

## ¿Qué incluye?

- One-page con secciones: hero, "Plan tu visita desde…", sobre, actividades, precios, hospedaje, leyenda del Cacique Calarcá, galería, cómo llegar, horarios, ubicación, FAQ y contacto.
- **6 idiomas** (ES default · EN · PT-BR · FR · DE · IT) con dropdown de idiomas en el nav, `hreflang` completo y `JSON-LD` (`TouristAttraction` + `LocalBusiness` + `FAQPage` + `TouristTrip` + `BreadcrumbList`).
- **Dark/light** automático según el sistema, con toggle persistente en `localStorage`.
- **SEO local + internacional** para el Quindío, Eje Cafetero y los principales mercados turísticos (US, BR, FR, DE, IT).
- **OG image JPG** (1200×630) para previsualizaciones en redes sociales.
- **Responsive** móvil-first con sticky bottom bar y CTA flotante de WhatsApp.
- Coordenadas GPS reales de OpenStreetMap (4.4824, -75.6322).
- Sin frameworks: HTML + CSS + JS vanilla.

## Información clave (resumen)

| Campo | Valor |
|------|------|
| Ubicación | Corregimiento La Virginia, Calarcá, Quindío |
| Altitud | 2.430 m s.n.m. |
| Entrada | desde $7.000 COP (incluye bebida) |
| Horario | Mié–Lun 9:00 AM – 3:00 PM (cerrado martes) |
| Teléfono | 310 396 7951 · 300 658 7163 |
| Correo | ecoparquepenasblancas@gmail.com |
| Instagram | [@ecoparquepenasblancas](https://www.instagram.com/ecoparquepenasblancas/) |
| Facebook | [Ecoparque Peñas Blancas](https://www.facebook.com/ecoparquepenasblancascolombia/) |
| Sitio oficial | http://www.ecoparquepenasblancas.com/ |

## Actividades

Escalada en roca (paredes hasta 280 m), rappel UIAA (80 m), espeleología (cuevas del Cacique Calarcá), tirolina (40 m), sendero ecológico (3,2 km), observación de aves, fútbol 8, voleibol, juegos infantiles.

## Hospedaje

- Cabaña para hasta 10 personas
- Zona de camping con cocineta, baterías sanitarias y duchas
- Restaurante con cocina típica del Quindío

## Estructura

```
ecoparque-penas-blancas/
├── index.html          # ES (default)
├── en/index.html       # English
├── pt/index.html       # Português (BR)
├── fr/index.html       # Français
├── de/index.html       # Deutsch
├── it/index.html       # Italiano
├── styles.css          # Estilos compartidos
├── script.js           # Tema, scroll reveals, status pill, lang dropdown
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── assets/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.svg
│   └── og-image.jpg    # 1200x630 social preview
└── README.md
```

## Fotos y video

- **Imágenes:** [Unsplash](https://unsplash.com) (uso libre) como placeholder. **Reemplazar por fotos reales del parque** apenas el cliente las suministre.
- **Video de fondo del hero:** drone del Valle del Cocora (Quindío), por **Danilo Arenas** vía [Pexels](https://www.pexels.com/video/16263003/) — licencia gratuita. Archivo: `assets/hero-cocora-sd.mp4` (540p, ~7,6 MB). Pausa cuando está fuera de pantalla y respeta `prefers-reduced-motion`.
- **Video embebido "Vive la experiencia":** YouTube ID `Ehikm4-QxTk` del canal Mosquera Music, cargado con _facade_ (click para reproducir) usando `youtube-nocookie.com` para no afectar el rendimiento inicial.

## Despliegue

GitHub Pages, rama `main` raíz del repo.

## Stack

HTML5 · CSS3 (custom properties, grid, flex, dark/light themes) · JavaScript vanilla (IntersectionObserver, theme toggle, status pill en tiempo real).
