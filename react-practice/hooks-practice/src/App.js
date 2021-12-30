import { useState, useEffect } from 'react';
import { useForm } from './useForm';
import './App.css';
import useFetch from './useFetch';

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  // Custom API hook
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div>
      <div>
        {!data ? 'loading...' : data}
        <div>count: {count}</div>
        <button onClick={(() => setCount(c => c + 1))}>increment</button>
      </div>
      <input name="email" value={values.email} onChange={handleChange}></input>
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default App;
