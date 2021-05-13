import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services/Services';
import AskUs from './components/AskUs/AskUs';
import Footer from './components/Footer/Footer';

function App() {

  return (


    <div className="App">
      <Navigation />
      <AskUs />
      <Home />
      <Services />

      <Footer />

    </div>




  );
}

export default App;
