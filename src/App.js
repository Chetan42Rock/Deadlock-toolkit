import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import About from './pages/About';
import HowToUse from './pages/HowToUse';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-to-use" element={<HowToUse />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
