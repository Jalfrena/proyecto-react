import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from './utils/supabaseClient';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Rankings from './pages/Rankings/Rankings';
import Banks from './pages/Banks/Banks';
import BankDetail from './components/BankDetail/BankDetail';
import Guide from './pages/Guide/Guide';
import NivelGuias from './pages/NivelGuias/NivelGuias';
import GuideDetail from './pages/GuideDetail/GuideDetail';
import Calculator from './pages/Calculator/Calculator';
import Survey from './pages/Survey/Survey';
import Assistant from './pages/Assistant/Assistant';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/bancos" element={<Banks />} />
          <Route path="/banco/:id" element={<BankDetail />} />
          <Route path="/guias" element={<Guide />} />
          <Route path="/guias/:nivelId" element={<NivelGuias />} />
          <Route path="/guia/:id" element={<GuideDetail />} />
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/encuesta" element={<Survey />} />
          <Route path="/asistente" element={<Assistant />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;