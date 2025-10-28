# Portfolio Website - Next Steps

## ✅ What's Done
- Jekyll portfolio website with Projects, Experience, and About pages
- Clean, simple design without excessive colors
- Original footer with social media icons restored
- Mobile responsive design
- All content from CV added

## 📸 Adding Project Images

The website is currently using placeholder images. To add real project screenshots:

### Option 1: Manual Copy (Recommended)
```bash
# Make the script executable
chmod +x copy-images.sh

# Create the projects folder
mkdir -p images/projects

# Copy images from your projects manually
# Example:
cp ~/Music/'Github Projects'/medico-chatbot/screenshots/* images/projects/
cp ~/Music/'Github Projects'/clothes-fitting-app/images/* images/projects/
cp ~/Music/'Github Projects'/mine-satellite-segformer/demo/* images/projects/
```

### Option 2: Direct Copy Commands
```bash
# Navigate to images/projects folder
cd /home/k7alid/Music/k7alid.github.io/images/projects

# Copy from your project repos (adjust paths as needed)
cp /home/k7alid/Music/'Github Projects'/*/screenshots/* .
cp /home/k7alid/Music/'Github Projects'/*/images/* .
cp /home/k7alid/Music/'Github Projects'/*/demo/* .
```

### Recommended Image Names
After copying, rename images to match projects:
- `medico-chatbot.jpg` - MedicoBot screenshot
- `mine-segmentation.jpg` - Mining Segmentation
- `clothes-fitting.jpg` - Virtual Try-On
- `video-colorization.jpg` - Video Colorization
- `multi-agent.jpg` - Multi-Agent System
- `ellista.jpg` - Ellista app
- `hr-system.jpg` - HRSystem app
- `hetet-sukar.jpg` - HetetSukar app
- `tubegpt.jpg` - TubeGPT

## 🖼️ Updating Image Paths

After adding images, update the paths in:
- `index.html` (Featured Projects section)
- `projects.md` (All Projects page)
- `experience.md` (Experience projects)

Change from:
```html
<img src="/images/placeholder.png" alt="Project">
```

To:
```html
<img src="/images/projects/project-name.jpg" alt="Project">
```

## 🚀 Running the Site

```bash
# Start Jekyll server
cd /home/k7alid/Music/k7alid.github.io
bundle exec jekyll serve --livereload

# Open in browser: http://127.0.0.1:4000/
```

## 📝 Making Changes

### Update Projects
Edit `projects.md` to add/modify projects

### Update Experience
Edit `experience.md` to add/modify work experience

### Update About
Edit `about.md` to modify your bio and skills

### Update Homepage
Edit `index.html` to change the hero section or featured projects

### Update Styles
Edit `style.scss` for CSS changes

## 🌐 Publishing to GitHub Pages

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Updated portfolio with projects and images"

# Push to GitHub
git push origin main

# Site will be live at: https://k7alid.github.io
```

## ⚡ Tips

1. **Image Size**: Keep images under 500KB for faster loading
2. **Image Format**: Use JPG for photos, PNG for screenshots
3. **Aspect Ratio**: Try to keep images around 16:9 or 4:3 ratio
4. **Alt Text**: Always add descriptive alt text for accessibility
5. **Git LFS**: For many large images, consider using Git Large File Storage

## 🐛 Common Issues

### Images Not Showing
- Check file path is correct (case-sensitive)
- Verify image is in `/images/projects/` folder
- Clear browser cache (Ctrl+Shift+R)

### Jekyll Server Issues
- Stop and restart the server
- Run `bundle install` if gems are missing
- Check `_config.yml` for syntax errors

## 📞 Contact Links

All configured in `_config.yml`:
- Email: khaledahmedebrzhim@gmail.com
- GitHub: K7alid
- LinkedIn: k7alid
- Telegram: K7_alid
- WhatsApp: 201150105027
- Twitter: K7alooda

---

**Made with ❤️ using Jekyll**
