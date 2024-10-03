import  { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState([]);
  const [error, setError] = useState('');

  const generateFibonacci = (num) => {
    if (num < 1) return [];
    const series = [0, 1];
    for (let i = 2; i < num; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }
    return series.slice(0, num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedNumber = Number(number);

    if (isNaN(parsedNumber) || parsedNumber <= 0) {
      setError('Por favor, ingrese un número válido mayor que 0.');
      setFibonacciSeries([]);
      return;
    }

    setError('');
    const series = generateFibonacci(parsedNumber);
    setFibonacciSeries(series);
  };

  return (
    <div className="App">
      <h1>Serie de Fibonacci</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Ingresa un número"
        />
        <button type="submit">Generar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Resultado:</h2>
      <p>{fibonacciSeries.join(', ')}</p>
    </div>
  );
}

export default App;
