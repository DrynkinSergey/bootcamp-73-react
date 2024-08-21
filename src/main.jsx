import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
