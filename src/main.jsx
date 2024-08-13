import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <App />
    </AuthProvider>
    <Toaster />
  </>
);
