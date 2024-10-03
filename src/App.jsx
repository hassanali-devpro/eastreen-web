import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Progress from './pages/ProgressPage';
import Companies from './pages/Companies';
import Verticals from './pages/Verticals';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import MoveUp from './components/MoveUp/MoveUp';
import Chat from './components/Chat/Chat';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <MoveUp />
      <Chat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/verticals" element={<Verticals />} />
        <Route path="/about" element={<About />} />
        <Route path="/investor" element={<Progress />} />
        <Route path="/careers" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
