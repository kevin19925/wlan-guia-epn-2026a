# WLAN EPN 2026-A — Portal de estudio completo

Sitio estático con **todo el material del curso WLAN**:

| Sección | Contenido |
|---------|-----------|
| **Portal** (`index.html`) | Hub con enlaces a guía, fórmulas, P1–P3, mapa material, 16 módulos |
| **Guía interactiva** (`guia/`) | 12 temas PDF 1–10, 45+ ejercicios resueltos, flashcards, simulacro |
| **Páginas** (`pages/`) | Markdown convertido: desde cero, fórmulas, plan estudio, teoría P3, etc. |

## Despliegue en Render

1. [Render Dashboard](https://dashboard.render.com/) → **New** → **Static Site**
2. Conectar repo `kevin19925/wlan-guia-epn-2026a`
3. **Build command:** (vacío)
4. **Publish directory:** `.` (raíz)
5. Deploy

## Actualizar contenido

Desde la carpeta del proyecto WLAN:

```powershell
python estudio\TRAMAS\build_portal_site.py
# o
.\estudio\TRAMAS\publish_render.ps1

cd render-deploy
git add -A
git commit -m "docs: actualizar portal WLAN"
git push
```

## Temario cubierto

- **PDF 2026-A (1–10):** intro, componentes, capas, PMD b/g/n/ac/ax/be, PLCP, MAC, DCF
- **16 módulos 2025-B:** PCF, componentes, seguridad WEP→WPA3, diseño WLAN, QoS/EDCA
- **Por prueba:** P1 fundamentos, P2 física, P3 tramas, preparación P4
- **Práctica:** fórmulas, ejercicios, chuleta, simulacro

Materia WLAN — EPN 2026-A · PhD. Soraya Sinche
