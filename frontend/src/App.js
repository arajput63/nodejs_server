
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ displayText, setDisplayText] = useState("DISPLAY TEXT...")



  const fetchAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setDisplayText(res))
  };

  useEffect(() => {
    fetchAPI();
  }, []);


  return (
    <div className="App">
      <h1> {displayText} </h1>
    </div>
  );
}

export default App;
