# Trivium React Application

A modern, responsive React application for Trivium - Building a Better Future. This project has been converted from a vanilla HTML/CSS/JavaScript website to a React application using the latest stable version of React.

## Features

- **Modern React Architecture**: Built with React 18+ and Vite for optimal performance
- **Responsive Design**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for smooth, performant animations
- **Service Carousel**: Interactive hero section with automatic service rotation
- **Routing**: React Router for seamless navigation
- **Performance Optimized**: Lazy loading, memoization, and optimized bundle size
- **Modern CSS**: Clean, maintainable CSS with CSS custom properties
- **Context API**: Centralized content management using React Context

## Tech Stack

- **React 18+**: Latest stable version of React
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Framer Motion**: Animation library for React
- **GSAP**: Advanced animations (for complex effects)
- **CSS3**: Modern CSS with custom properties and animations

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with service carousel
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services grid
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form and map
│   ├── Footer.jsx      # Footer with links
│   └── Loading.jsx     # Loading screen
├── pages/              # Page components
│   └── ServicesPage.jsx # Dedicated services page
├── context/            # React Context
│   └── ContentContext.jsx # Content data management
├── styles/             # Global styles
│   └── globals.css     # Global CSS variables and styles
└── assets/             # Static assets
    ├── images/         # Image assets
    └── icons/          # Icon assets
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trivium-react
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features

### Hero Section with Service Carousel
- Automatic rotation between three services (Construction, Trading, Manufacturing)
- Interactive pause/play controls
- Smooth transitions with Framer Motion
- Progress indicators for each service

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Performance optimized for mobile devices

### Modern Animations
- Scroll-triggered animations
- Hover effects and micro-interactions
- Smooth page transitions
- Loading animations

### Content Management
- Centralized content data using React Context
- Easy to update content without code changes
- Structured data format for scalability

## Performance Optimizations

- **Lazy Loading**: Services page is lazy-loaded for better initial load time
- **Code Splitting**: Automatic code splitting with Vite
- **Memoization**: Components are optimized to prevent unnecessary re-renders
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Optimization**: Tree shaking and minification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The application can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

### Recommended Hosting Services
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the Trivium team.

---

**Trivium - Building a Better Future**# Trivium-SA
