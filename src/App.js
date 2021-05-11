import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services/Services';
import AskUs from './components/AskUs/AskUs';

function App() {

  return (


    <div className="App">
      <Navigation />
      <AskUs />
      <Home />
      <Services />
    </div>




  );
}

export default App;
