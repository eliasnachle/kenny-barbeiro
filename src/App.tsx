import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import About from './pages/about/About';
import Home from './pages/home/Home';
import './style.css';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-kenny" element={<About />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
