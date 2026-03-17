import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

const About = () => <section id="about" className="py-20 bg-white flex justify-center"><h2 className="text-2xl">About Section Placeholder</h2></section>;
const Skills = () => <section id="skills" className="py-20 bg-gray-50 flex justify-center"><h2 className="text-2xl">Skills Section Placeholder</h2></section>;
const Journey = () => <section id="journey" className="py-20 bg-white flex justify-center"><h2 className="text-2xl">Journey Section Placeholder</h2></section>;
const Achievements = () => <section id="achievements" className="py-20 bg-gray-50 flex justify-center"><h2 className="text-2xl">Achievements Section Placeholder</h2></section>;
const Certificates = () => <section id="certificates" className="py-20 bg-white flex justify-center"><h2 className="text-2xl">Certificates Section Placeholder</h2></section>;
const Projects = () => <section id="projects" className="py-20 bg-gray-50 flex justify-center"><h2 className="text-2xl">Projects Section Placeholder</h2></section>;
const Contact = () => <section id="contact" className="py-20 bg-white flex justify-center"><h2 className="text-2xl">Contact Section Placeholder</h2></section>;
const Footer = () => <footer className="bg-gray-900 text-white py-12 flex justify-center"><h2>Footer Placeholder</h2></footer>;

const App = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Journey />
        <Achievements />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;