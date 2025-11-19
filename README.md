# Wallpaper Gallery

A stunning, modern wallpaper gallery website featuring 85 beautiful wallpapers with a dark theme, glassmorphism effects, and masonry grid layout.

![Gallery Preview](https://via.placeholder.com/800x400/0f172a/38bdf8?text=Wallpaper+Gallery)

## ✨ Features

- 🎨 **Modern Dark UI** with glassmorphism effects
- 📱 **Fully Responsive** masonry grid layout
- 🖼️ **Lightbox Viewer** with keyboard navigation
- ⬇️ **Download Functionality** for all wallpapers
- ⚡ **Fast Performance** with lazy loading
- 🚀 **GitHub Pages Ready** - no backend required

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Index wallpapers (scan and copy to public folder)
npm run index

# Start dev server
npm run dev
```

Visit http://localhost:5173

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

1. **Update `vite.config.js`** with your repository name:
   ```javascript
   base: '/your-repo-name/'
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy** using GitHub Actions (see `.github/workflows/deploy.yml`) or manually push the `dist` folder to `gh-pages` branch.

## 📁 Project Structure

```
├── public/wallpapers/    # All wallpapers (auto-copied)
├── scripts/              # Build scripts
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main app
│   ├── index.css        # Tailwind styles
│   └── wallpapers.json  # Auto-generated index
└── dist/                # Production build
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Masonry CSS** - Grid layout

## 📝 Adding New Wallpapers

1. Add images to the `Wallpapers/` folder
2. Run `npm run index`
3. Rebuild with `npm run build`

## 📄 License

All credits go to the owners of the images. This is just a collection.

---

Built with ❤️ using React & Vite
