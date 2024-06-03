import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bu uygulama Web Chapter etkinliğimiz için oluşturulmuştur
        </p>
        <a
          className="App-link"
          href="https://vercel.com/ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Vercel AI For React Deployment Process
        </a>
      </header>
    </div>
  );
}

export default App;
