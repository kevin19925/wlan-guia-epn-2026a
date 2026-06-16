# Guía WLAN EPN 2026-A — Tramas Prueba 3

Sitio estático para estudio: teoría PDF 1–10, ejercicios resueltos con **¿Por qué?**, simulacro Prueba 3.

## Despliegue en Render

1. [Render Dashboard](https://dashboard.render.com/) → **New** → **Static Site**
2. Conectar repo `kevin19925/wlan-guia-tramas-epn`
3. **Build command:** (vacío o `echo ok`)
4. **Publish directory:** `.` (raíz)
5. Deploy

Render detecta `render.yaml` automáticamente si usas Blueprint.

## Actualizar contenido

Desde la carpeta del proyecto WLAN:

```powershell
python estudio\TRAMAS\build_guia_maestra.py
Copy-Item estudio\TRAMAS\GUIA_COMPLETA_TRAMAS.html render-deploy\index.html -Force
cd render-deploy
git add index.html
git commit -m "docs: actualizar guia tramas"
git push
```

## Contenido

- 12 temas (Intro → Chuleta)
- 45+ ejercicios resueltos paso a paso
- Simulacro Prueba 3 (completar, V/F, opción múltiple, numéricos)
- Fórmulas KaTeX · Tramas interactivas · Quiz

Materia WLAN — EPN 2026-A · PhD. Soraya Sinche
