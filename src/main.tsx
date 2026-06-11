import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Signal to vite-plugin-prerender that the app has fully rendered.
// The prerenderer waits for this event before capturing the HTML snapshot.
document.dispatchEvent(new Event('render-event'))

