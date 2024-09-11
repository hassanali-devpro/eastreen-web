import './App.css';
import Header from "./components/Header/Header";
import Counter from './components/Counter/Counter';
import AboutUs from './components/AboutUs/AboutUs';
// import Skills from "./components/Skills/Skills";
// import Work from "./components/Work/Work";
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from "./components/Services/Services";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import Chat from './components/Chat/Chat';
import MoveUp from './components/MoveUp/MoveUp';

function App() {
  return (
    <div className="holder">
      <Header />
      <MoveUp />
      <Chat />
      <AboutUs />
      {/* <Skills /> */}
      {/* <Work /> */}
      <Counter />
      <WorkProcess />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
