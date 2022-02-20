import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Footer from './Footer.js';
import Live from './Live.js';
import MainNav from './MainNav.js';

function App() {
  return (
    <div className="Main" style={{
      backgroundAttachment: 'scroll',
      width: '100%',
    }}>
      <Live />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
