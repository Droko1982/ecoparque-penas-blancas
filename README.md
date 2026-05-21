# Ecoparque Peñas Blancas

Sitio web del **Ecoparque Peñas Blancas**, reserva natural y ecoparque de aventura en el Corregimiento de La Virginia, Calarcá, Quindío.

**Demo:** https://droko1982.github.io/ecoparque-penas-blancas/
**EN:** https://droko1982.github.io/ecoparque-penas-blancas/en/

## ¿Qué incluye?

- Página única (one-page) con secciones: hero, sobre, actividades, precios, hospedaje, leyenda del Cacique Calarcá, galería, cómo llegar, horarios, ubicación, FAQ y contacto.
- **Bilingüe** ES (`/`) + EN (`/en/`) con `hreflang` y `JSON-LD` (`TouristAttraction` + `LocalBusiness` + `FAQPage`).
- **Dark/light** automático según el sistema, con toggle persistente en `localStorage`.
- **SEO local** para el Quindío y el Eje Cafetero.
- **Responsive** móvil-first con sticky bottom bar y CTA flotante de WhatsApp.
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
├── index.html          # Versión español (default)
├── en/index.html       # Versión inglés
├── styles.css          # Estilos compartidos
├── script.js           # Tema, scroll reveals, status pill
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── assets/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-image.svg
└── README.md
```

## Fotos

Las imágenes son de [Unsplash](https://unsplash.com) (uso libre) como placeholder. **Reemplazar por fotos reales del parque** apenas el cliente las suministre — los `srcset` y `alt` ya están en su lugar.

## Despliegue

GitHub Pages, rama `main` raíz del repo.

## Stack

HTML5 · CSS3 (custom properties, grid, flex, dark/light themes) · JavaScript vanilla (IntersectionObserver, theme toggle, status pill en tiempo real).
