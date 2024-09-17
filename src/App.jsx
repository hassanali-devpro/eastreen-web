import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProgressPage from './pages/ProgressPage';
import Companies from './pages/Companies';
import Verticals from './pages/Verticals';
import About from './pages/about/';
import Footer from './components/Footer/Footer';
import MoveUp from './components/MoveUp/MoveUp';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <MoveUp />
      <Chat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/Verticals" element={<Verticals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ProgressPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
