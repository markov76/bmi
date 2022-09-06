import './App.css';
import { useState } from 'react'

function App() {
  const [m,setM] = useState (0)
  const [kg,setKg] = useState (0)
  const [bmi,setBmi] = useState(0)
 
  function calculate(e) {
    e.preventDefault()
    const conversion = kg/(m*m)
    setBmi (conversion)
  }

  return (
  <form onSubmit={calculate}>
    <h3>Calculating body mass index</h3>
    <div>
      <label>Height</label>
      <input type="number" value={m} onChange={e => setM(e.target.value)} />
    </div>
    <div>
      <label>Weight</label>
      <input type="number" value={kg} onChange={e => setKg(e.target.value)} />
    </div>
    <div>
      <label>bmi on </label>
      <output>{bmi.toFixed(1)}</output>
    </div>
    <button>Calculate</button>
  </form>
  );
}

export default App;
