import { createRoot } from 'react-dom/client';
import AppWrapper from './components/App/AppWrapper';
import './styles/global.css';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

createRoot(container).render(<AppWrapper />);
