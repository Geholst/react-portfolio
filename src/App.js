import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Nav />
      </header> 
      </BrowserRouter>
    </div>
  );
}

export default App;
