import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Nav />
      </header> 

      <main className='main'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Projects' element={<Projects />} />
        
        </Routes>
      </main>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
