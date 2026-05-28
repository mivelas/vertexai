# Vertex AI Systems

Vertex AI Systems is a high-end, professional landing page for an AI consultancy firm specializing in **Strategic Planning** and **Corporate Training**. The application is designed to communicate the value of AI implementation to C-suite executives and SMEs.

## ✨ Features

- **Modern Tech Dark Aesthetic:** Glassmorphism, gradient accents, and a deep navy color palette.
- **Responsive Design:** Optimized for all screen sizes.
- **Service Showcase:** Highlights Strategic Planning and Corporate Training services.
- **Roadmap:** Clear path for AI implementation.
- **Contact Integration:** Easy way for potential clients to reach out.

## 🛠️ Technologies

- **Framework:** [React 19](https://react.dev/) (TypeScript)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Styling:** Vanilla CSS (Custom Properties / CSS Variables)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vertexai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the local development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build

To generate a production-ready bundle in the `dist/` directory:
```bash
npm run build
```

### Local Preview

To preview the production build locally:
```bash
npm run preview
```

## 🏗️ Architecture

The project follows a modular, component-based structure:
- `src/components/`: Reusable UI elements (Navbar, Footer, Logo).
- `src/sections/`: Main landing page sections (Hero, Benefits, Services, Roadmap, Contact).
- `src/styles/`: Centralized styling foundation (`variables.css` and `global.css`).
- `src/assets/`: Static assets and imagery.

## 🎨 Development Conventions

### Styling & Theme
- **Theme:** Always adhere to the "Modern Tech Dark" palette defined in `src/styles/variables.css`.
- **CSS Variables:** Use `--bg-primary`, `--accent-cyan`, etc., instead of hardcoding colors.
- **Glassmorphism:** Use the `.glass-card` class for container elements.
- **Typography:** Headlines should favor high-impact gradient text using the `.gradient-text` class.

### Components
- **TypeScript:** Functional components with proper prop typing.
- **Structure:** Each section or complex component has its own `.tsx` and `.css` file in the same directory.

### Icons
- Use the `lucide-react` library for consistent iconography.
- Default icon size for section headers: `40`.
- Default icon size for benefit cards: `32`.
