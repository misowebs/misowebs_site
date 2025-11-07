# Misowebs Website

A modern, responsive portfolio website for Misowebs (Miso Solutions LLC) built with React and Vite. This website showcases services, portfolio projects, and contact information with a sleek, professional design.

## Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth scrolling navigation
- 📱 **Responsive Design**: Mobile-first approach with bottom navigation on mobile and sidebar navigation on desktop
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- 🎯 **Section-Based Layout**: Organized into distinct sections:
  - Home
  - Services
  - Sites & Apps (Portfolio)
  - Contact
  - About

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type-safe component development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd misowebs_site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
misowebs_site/
├── public/                 # Static assets (images, logos)
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx      # Navigation component (mobile/desktop)
│   │   ├── HomeSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SitesAppsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── AboutSection.tsx
│   ├── constants/          # Configuration files
│   │   └── siteConfig.js   # Site-wide configuration
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## Configuration

Site-wide configuration can be found in `src/constants/siteConfig.js`, including:
- Site title and description
- Social media links
- CDN configuration

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Development

The project uses:
- **ESLint** for code linting
- **Tailwind CSS** for styling
- **TypeScript** for type safety in components

## License

© 2024 Miso Solutions LLC. Developed by Yul Castro.

## Contact

For inquiries, visit the website or contact:
- Email: info@misowebs.com