import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (!height || !weight) return;
    const heightInMeters = height/100;
    const bmi = weight / (heightInMeters * heightInMeters)
    setBmi(bmi.toFixed(2));
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="height">Height (cm): </label>
        <input 
          type="number"
          id="height"
          value={height}
          onChange={(e)=> setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI is: {bmi}</h2>
        </div>
      )}
    </div>
  );
}

export default App;