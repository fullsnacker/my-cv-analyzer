# 📄 MY-CV-Analyzer

**Analiza tu currículum para sistemas ATS (Applicant Tracking Systems) directamente en tu navegador**

## ✨ Características

✅ **Análisis completo de CVs** en PDF o DOCX  
✅ **Puntaje ATS** (0-100) con métricas detalladas  
✅ **Recomendaciones inteligentes** para mejorar tu currículum  
✅ **100% privado** - Todo se procesa en tu navegador  
✅ **Sin backend** - Fácil despliegue en Vercel/Netlify

## 🚀 Cómo Usar

1. **Sube tu CV** (PDF o Word)
2. **Obtén tu puntaje ATS** al instante
3. **Mejora tu CV** con las recomendaciones

## Ver deploy en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://my-cv-analyzer.vercel.app)

## 🛠 Tecnologías

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **PDF.js** (para análisis de PDFs)
- **Mammoth.js** (para análisis de DOCX)

## 🧑‍💻 Desarrollo

### Requisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
git clone https://github.com/fullsnacker/my-cv-analyzer.git
cd my-cv-analyzer
npm install
npm run dev
```

### Estructura del Proyecto

```markdown
src/
├── components/ # Componentes React
├── lib/ # Lógica de análisis
├── styles/ # Estilos globales
└── pages/ # Rutas de la aplicación
```

## 🤝 Contribuir

¡PRs son bienvenidos! Sigue estos pasos:

1. Haz fork del proyecto
2. Crea tu branch (`git checkout -b feature/awesome-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add awesome feature'`)
4. Haz push al branch (`git push origin feature/awesome-feature`)
5. Abre un Pull Request

## 📄 Licencia

MIT

## 🗺 Roadmap

- [ ] Soporte para imágenes (OCR)
- [ ] Plantillas de CV ATS-friendly
- [ ] Análisis por industria
