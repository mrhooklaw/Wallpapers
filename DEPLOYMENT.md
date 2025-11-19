# GitHub Pages Deployment Guide

## 🚀 Quick Setup Steps

### 1. Push Your Code to GitHub

If you haven't already created a GitHub repository:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Wallpaper Gallery"

# Create a new repository on GitHub named "Wallpapers"
# Then link it to your local repo:
git remote add origin https://github.com/YOUR_USERNAME/Wallpapers.git

# Push to GitHub
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

---

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/Wallpapers`
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - (The workflow file we created will handle the rest automatically)

---

### 3. Deploy!

Once you've enabled GitHub Pages:

1. The GitHub Actions workflow will automatically run when you push to the `main` branch
2. You can monitor the deployment progress:
   - Go to the **Actions** tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
3. Once complete (usually 1-2 minutes), your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/Wallpapers/
   ```

---

## 📝 What Was Configured

### ✅ Vite Config (`vite.config.js`)
- Set `base: '/Wallpapers/'` so all assets load correctly on GitHub Pages

### ✅ GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically builds your site when you push to `main`
- Deploys the built files to GitHub Pages
- No manual build steps needed!

---

## 🔄 Updating Your Site

To update your wallpaper gallery:

```bash
# Make your changes to the code

# Commit the changes
git add .
git commit -m "Updated wallpapers"

# Push to GitHub
git push
```

The site will automatically rebuild and redeploy! 🎉

---

## 🛠️ Manual Build (Optional)

If you want to test the production build locally:

```bash
# Build the site
npm run build

# Preview the built site locally
npm run preview
```

---

## 📂 Repository Structure

```
Wallpapers/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deployment workflow
├── src/                     # Your React source code
├── public/                  # Static assets
├── Wallpapers/             # Your wallpaper images
├── vite.config.js          # Vite configuration (with base path)
└── package.json            # Project dependencies
```

---

## ⚠️ Important Notes

1. **Repository Name**: The repository must be named `Wallpapers` (or update the `base` path in `vite.config.js` to match)
2. **Branch Name**: The workflow deploys from the `main` branch. If your default branch is `master`, update line 6 in `.github/workflows/deploy.yml`
3. **First Deployment**: The first deployment may take a few minutes. Subsequent deployments are faster.
4. **Custom Domain** (Optional): You can add a custom domain in the GitHub Pages settings

---

## 🐛 Troubleshooting

### Site shows 404 or blank page
- Check that the `base` path in `vite.config.js` matches your repository name
- Ensure GitHub Pages source is set to "GitHub Actions"

### Images not loading
- Make sure your wallpaper images are in the `public/Wallpapers/` directory
- Check that `wallpapers.json` has the correct paths

### Workflow fails
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Make sure `package-lock.json` is committed to the repository

---

## 🎉 You're All Set!

Your wallpaper gallery is now configured for automatic deployment to GitHub Pages. Every time you push changes to GitHub, your site will automatically update!

**Your site URL**: `https://YOUR_USERNAME.github.io/Wallpapers/`

Enjoy sharing your beautiful wallpaper collection! 🖼️✨
