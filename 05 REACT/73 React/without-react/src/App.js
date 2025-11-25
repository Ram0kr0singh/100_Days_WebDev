import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [value, setvalue] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className="value">{value}</div>
      <button onClick={() => { setvalue(value + 1) }}>Click</button>
    </div>
  );
}

export default App;
