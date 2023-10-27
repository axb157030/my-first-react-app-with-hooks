import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [theLogo, setImage] = useState(logo);
  return (
    <div className="App">
      <header className="App-header">
        <img src={theLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={() => setImage("https://images.photocase.com/p/pppg7bql/tro9hhuy/photocasetro9hhuy3.jpg?1679419423")}
        >
          Click me to change image to something else
        </a>
      </header>

      
    </div>
  );
}

export default App;
