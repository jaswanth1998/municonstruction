# Muni Construction Website

A modern, responsive website for Muni Construction - Halifax's trusted contractor for residential and commercial construction services.

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Helmet Async** - Document head management
- **Lucide React** - Icon library

## Features

- Responsive design (mobile, tablet, desktop)
- Dark/Light theme with system preference detection
- Smooth animations and transitions
- Contact form with N8n webhook integration
- SEO optimized with meta tags
- GitHub Pages deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/muni-construction.git
cd muni-construction
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
/src
  /components
    /common          # Shared components (Header, Footer, Button, Card)
    /home            # Home page sections
    /about           # About page components
    /services        # Services page components
    /projects        # Projects page components
    /contact         # Contact page components
  /pages             # Page components
  /config            # Theme configuration
  /context           # React context providers
  /data              # Static data (services, projects, testimonials)
  /styles            # Global styles
  /assets            # Images and icons
```

## Configuration

### Theme
Edit `src/config/theme.js` to customize:
- Colors (primary, secondary, accent)
- Typography (fonts, sizes)
- Spacing
- Shadows

### Company Information
Update company details in `src/config/theme.js`:
- Phone number
- Email
- Address
- Business hours
- Social media links

### Form Webhook
Update the N8n webhook URL in `src/config/theme.js`:
```javascript
export const formConfig = {
  webhookUrl: 'YOUR_N8N_WEBHOOK_URL_HERE',
  // ...
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/muni-construction"
}
```

2. Update the `base` in `vite.config.js` to match your repository name.

3. Push to main branch - GitHub Actions will automatically build and deploy.

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Customization Guide

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/common/Header.jsx`

### Modifying Services

Edit `src/data/services.js` to add, remove, or modify services.

### Adding Projects

Edit `src/data/projects.js` to add new portfolio projects.

### Adding Testimonials

Edit `src/data/testimonials.js` to add new client testimonials.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary. All rights reserved by Muni Construction.

## Contact

For questions about this project, contact:
- Email: info@municonstruction.ca
- Phone: (902) 555-0123
