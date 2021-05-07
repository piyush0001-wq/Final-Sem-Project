import './App.css';
import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
