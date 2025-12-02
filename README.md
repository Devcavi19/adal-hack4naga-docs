# ADAL Smart Naga Documentation

This directory contains the static documentation website for ADAL Smart Naga, built with HTML, CSS, and JavaScript.

## 📚 Documentation Site

The documentation is deployed via GitHub Pages and covers:

- **Introduction**: Problem statement, solution overview, and value proposition
- **Getting Started**: Installation and quick start guide
- **User Guide**: User roles, chat interface, and authentication
- **Admin Guide**: Dashboard features, analytics, and query logs
- **Configuration**: Environment setup, API keys, and deployment
- **Technical**: Tech stack and system architecture

## 🚀 Local Development

To view the documentation locally:

```bash
# Option 1: Python HTTP server
cd docs
python -m http.server 8000
# Visit http://localhost:8000

# Option 2: Node.js http-server
npm install -g http-server
cd docs
http-server -p 8000
```

## 📁 Structure

```
docs/
├── index.html              # Landing page
├── introduction.html       # Purpose and vision
├── tech-stack.html         # Technologies used
├── architecture.html       # System design
├── css/
│   └── style.css          # Global styles
├── js/
│   └── main.js            # Navigation and interactivity
├── images/                # Screenshots and diagrams
├── getting-started/
│   ├── installation.html
│   └── quick-start.html
├── user-guide/
│   ├── roles.html
│   ├── chat-interface.html
│   └── authentication.html
├── admin-guide/
│   ├── dashboard.html
│   ├── analytics.html
│   └── query-logs.html
└── configuration/
    ├── setup.html
    ├── api-keys.html
    └── deployment.html
```

## 🎨 Design

The documentation design is inspired by [Ragas Documentation](https://docs.ragas.io/en/stable) with:

- Sidebar navigation for easy browsing
- Responsive mobile-first design
- Code syntax highlighting with copy buttons
- Clean typography and spacing
- Consistent color scheme (Green primary, Blue secondary)

## 🔧 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #10b981;      /* Green */
    --secondary-color: #3b82f6;    /* Blue */
    --sidebar-bg: #1f2937;         /* Dark gray */
}
```

### Navigation

Update sidebar navigation in each HTML file's `<nav class="sidebar-nav">` section.

### Content

Edit individual HTML files to update documentation content.

## 📦 Deployment

### GitHub Pages

1. Push `docs/` folder to GitHub repository
2. Go to Repository Settings → Pages
3. Set Source: "Deploy from a branch"
4. Select Branch: `main`, Folder: `/docs`
5. Click Save
6. Visit `https://[username].github.io/[repo-name]/`

### Custom Domain

Add `CNAME` file in `docs/` with your domain:

```
docs.adal-naga.com
```

Then configure DNS with your domain registrar.

## 🤝 Contributing

To contribute to the documentation:

1. Edit HTML files in `docs/`
2. Test locally with Python HTTP server
3. Commit changes with descriptive messages
4. Push to GitHub (Pages will auto-deploy)

## 📄 License

Documentation is part of the ADAL Smart Naga project, licensed under MIT License.

---

**Team Virgo** - CSPC BSCS-3B
