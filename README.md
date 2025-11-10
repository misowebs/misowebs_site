# Misowebs Website

A modern, responsive portfolio and business website for Misowebs (Miso Solutions LLC) built with React and Vite. This website showcases web development services, portfolio projects, and provides a professional online presence with a sleek, user-friendly design.

## Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth scrolling navigation and animated transitions
- 📱 **Responsive Design**: Mobile-first approach with bottom navigation on mobile and sidebar navigation on desktop
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- 🎯 **Section-Based Layout**: Organized into distinct sections:
  - **Home**: Hero section with company introduction
  - **Services**: Web development services and offerings
  - **Sites & Apps**: Portfolio showcase of completed projects
  - **Contact**: Contact information and inquiry forms
  - **About**: Company story, team information, and values
- 👤 **Personal Portfolio Page**: Dedicated portfolio page accessible via `/YulCastro` route featuring:
  - Professional profile with bio and skills
  - Interactive project showcases with modal previews
  - Social media links and contact options
  - Calendly scheduling integration
  - Location map integration
- 📅 **Calendly Integration**: Inline scheduling widget for booking meetings
- 🗺️ **Interactive Elements**: Project modals with live website previews, smooth animations, and keyboard navigation support

## Tech Stack

- **React 19** - Modern UI library with hooks and component-based architecture
- **Vite 7** - Next-generation build tool and dev server
- **TypeScript** - Type-safe component development (TSX components)
- **Tailwind CSS 4** - Utility-first CSS framework for rapid styling
- **React Icons** - Comprehensive icon library (Font Awesome icons)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

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

The application will automatically reload when you make changes to the code.

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement (HMR)
- `npm run build` - Build the project for production (outputs to `dist/` directory)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality and catch errors

## Routes

The application uses client-side routing:

- `/` - Main website with all sections (Home, Services, Sites & Apps, Contact, About)
- `/YulCastro` - Personal portfolio page featuring profile, projects, and scheduling
- `/portfolio` - Legacy route (backward compatible, redirects to portfolio page)

## Project Structure

```
misowebs_site/
├── public/                      # Static assets
│   ├── Documents/               # PDF resume and VCF contact files
│   ├── SitesLogos/              # Client project logos
│   └── [images]                 # Images, logos, and media files
├── src/
│   ├── components/              # React components
│   │   ├── Navbar.tsx           # Navigation component (mobile/desktop)
│   │   ├── HomeSection.tsx      # Hero/home section
│   │   ├── ServicesSection.tsx  # Services showcase
│   │   ├── SitesAppsSection.tsx # Portfolio projects section
│   │   ├── ContactSection.tsx   # Contact information
│   │   ├── AboutSection.tsx     # About section with team info
│   │   └── PortfolioPage.tsx    # Personal portfolio page component
│   ├── constants/               # Configuration files
│   │   └── siteConfig.js        # Site-wide configuration
│   ├── assets/                  # Local assets (if any)
│   ├── App.jsx                  # Main application component with routing
│   ├── App.css                  # Application-specific styles
│   ├── index.css                # Global styles and Tailwind imports
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── postcss.config.mjs           # PostCSS configuration for Tailwind
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file
```

## Key Components

### PortfolioPage Component
A comprehensive personal portfolio page featuring:
- Profile section with image, bio, and skills
- Interactive link buttons (LinkedIn, Contact, GitHub, Resume, Schedule)
- Calendly scheduling modal integration
- Project showcase with modal previews
- Location map (Norman, Oklahoma)
- Responsive grid layouts

### Navigation
- **Mobile**: Fixed bottom navigation bar with icons
- **Desktop**: Fixed left sidebar navigation
- Smooth scroll-to-section functionality

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

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service (e.g., AWS Amplify, Netlify, Vercel, GitHub Pages).

### Deployment Recommendations

- **AWS Amplify**: Ideal for AWS-based deployments with automatic CI/CD
- **Netlify/Vercel**: Great for quick deployments with Git integration
- **GitHub Pages**: Free hosting for public repositories

## Development

The project uses:
- **ESLint** for code linting and quality assurance
- **Tailwind CSS** for utility-first styling
- **TypeScript** (TSX) for type safety in React components
- **React Hooks** for state management and side effects

### Code Style

- Components are written in TypeScript (`.tsx` files)
- Functional components with React Hooks
- Tailwind CSS for all styling
- Consistent naming conventions (PascalCase for components)

## Features in Detail

### Portfolio Page Features
- **Profile Display**: Professional headshot, name, title, and bio
- **Skills Tags**: Visual representation of technical skills
- **Social Links**: Quick access to LinkedIn, GitHub, and contact methods
- **Resume Download**: Direct PDF download functionality
- **VCF Contact**: Downloadable contact card
- **Calendly Scheduling**: Modal-based meeting scheduler
- **Project Showcase**: Interactive grid of projects with detailed modals
- **Location Map**: Embedded Google Maps showing location

### Main Website Features
- **Smooth Scrolling**: Section-based navigation with smooth scroll behavior
- **Responsive Navigation**: Adaptive navigation based on screen size
- **Project Previews**: Interactive project showcases with descriptions
- **Contact Forms**: Multiple ways to get in touch
- **Company Information**: About section with team and values

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Miso Solutions LLC. Developed by Yul Castro.

## Contact

For inquiries, visit the website or contact:
- **Email**: info@misowebs.com
- **Website**: [Misowebs](https://misowebs.com)
- **Portfolio**: `/YulCastro` route on the website

## Contributing

This is a private project for Miso Solutions LLC. For any suggestions or issues, please contact the development team.

---

**Built with ❤️ by Yul Castro**
