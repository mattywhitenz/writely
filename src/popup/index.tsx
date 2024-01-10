import { createRoot } from 'react-dom/client';
import { App } from './app';

// This function will be called to render the App after a delay
function renderApp() {
    const container = document.getElementById('app');
    const root = createRoot(container!); // the '!' is a non-null assertion telling TypeScript that 'container' will not be null
    root.render(<App />);
}

// Wait for 5 seconds before rendering the App
setTimeout(renderApp, 5000);
