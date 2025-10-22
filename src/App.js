import "./styles.css";
import { useState } from "react";

function Plant({ name, watered }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Status: {watered ? "Watered" : "Needs water"}</p>
    </div>
  );
}

function WelcomeMessage(props) {
  return (
    <div>
      <h2>Welcome {props.name}</h2>
    </div>
  );
}

export default function App() {
  const [plants, setPlants] = useState([
    { name: "Monstera", watered: true },
    { name: "Snake Plant", watered: false },
  ]);

  return (
    <div className="App">
      <h1>Home</h1>
      <WelcomeMessage name="Chloe" />
      <h2>My Plants:</h2>
      {plants.map((p, i) => (
        <Plant key={i} name={p.name} watered={p.watered} />
      ))}
    </div>
  );
}
