import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Footer from './components/Footer';

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
        </Routes>
      </main>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
