import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Bancos from './pages/Bancos';
import Calculadora from './pages/Calculadora';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '15px', padding: '15px', background: '#e2e8f0' }}>
        <Link to="/">Inicio</Link>
        <Link to="/rankings">Rankings</Link>
        <Link to="/bancos">Bancos</Link>
        <Link to="/calculadora">Calculadora</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/bancos" element={<Bancos />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}