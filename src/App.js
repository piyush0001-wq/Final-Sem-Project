import './App.css';
import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import { useAuthState } from 'react-firebase-hooks/auth';
import Services from './components/Services/Services';
function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Services />
    </div>
  );
}

export default App;
