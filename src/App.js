import React, { useState} from "react";
import "./App.css";

function App() {
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState(null);

  const apiKey = "7533d32c7006f2a9988d7669126dd0ef";

  async function buscarClima() {
    if (!cidade) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`;
    const resposta = await fetch(url)
    const json = await resposta.json();
    setDados(json);
  }

  return (
    <div className="container">
      <h1>☁️App do Clima</h1>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <button onClick={buscarClima}>Buscar</button>

      {dados && dados.main && (
        <div className= "resultado">
          <h2>{dados.name}</h2>
          <p>{Math.round(dados.main.temp)}°C</p>
          <p>{dados.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
