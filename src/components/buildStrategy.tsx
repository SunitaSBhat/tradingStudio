import React, { useState, useEffect } from "react";
import "./StrategyBuilder.css";

interface Strategy {
  name: string;
  buyConditions: string[];
  sellConditions: string[];
}

const StrategyBuilder: React.FC = () => {
  const [strategyName, setStrategyName] = useState<string>("");
  const [buyConditions, setBuyConditions] = useState<string[]>([]);
  const [sellConditions, setSellConditions] = useState<string[]>([]);
  const [savedStrategies, setSavedStrategies] = useState<Strategy[]>([]);
  // const [darkMode, setDarkMode] = useState<boolean>(
  //   localStorage.getItem("darkMode") === "true"
  // );

  // Apply dark mode class
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  //   localStorage.setItem("darkMode", JSON.stringify(darkMode));
  // }, [darkMode]);

  // Load strategies from localStorage on component mount
  useEffect(() => {
    const storedStrategies = localStorage.getItem("strategies");
    if (storedStrategies) {
      setSavedStrategies(JSON.parse(storedStrategies));
    }
  }, []);

  const addCondition = (type: "buy" | "sell") => {
    if (type === "buy") {
      setBuyConditions([...buyConditions, ""]);
    } else {
      setSellConditions([...sellConditions, ""]);
    }
  };

  const updateCondition = (index: number, value: string, type: "buy" | "sell") => {
    const conditions = type === "buy" ? [...buyConditions] : [...sellConditions];
    conditions[index] = value;
    type === "buy" ? setBuyConditions(conditions) : setSellConditions(conditions);
  };

  const saveStrategy = () => {
    if (!strategyName.trim()) {
      alert("Enter a strategy name.");
      return;
    }

    const newStrategy: Strategy = { name: strategyName, buyConditions, sellConditions };
    const updatedStrategies = [...savedStrategies, newStrategy];

    setSavedStrategies(updatedStrategies);
    localStorage.setItem("strategies", JSON.stringify(updatedStrategies));

    setStrategyName("");
    setBuyConditions([]);
    setSellConditions([]);
  };

  return (
    <div className={`containers`}>
      {/* <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button> */}

      <h2>Strategy Builder</h2>
      <input
        type="text"
        value={strategyName}
        onChange={(e) => setStrategyName(e.target.value)}
        placeholder="New Strategy"
      />

      <div className="trigger-section">
        <h3>Buy Trigger Conditions</h3>
        {buyConditions.map((condition, index) => (
          <input
            key={index}
            type="text"
            value={condition}
            onChange={(e) => updateCondition(index, e.target.value, "buy")}
            placeholder="Enter Buy Condition"
          />
        ))}
        <span className="add-condition" onClick={() => addCondition("buy")}>
          + Add Buy Condition
        </span>
      </div>

      <div className="trigger-section">
        <h3>Sell Trigger Conditions</h3>
        {sellConditions.map((condition, index) => (
          <input
            key={index}
            type="text"
            value={condition}
            onChange={(e) => updateCondition(index, e.target.value, "sell")}
            placeholder="Enter Sell Condition"
          />
        ))}
        <span className="add-condition" onClick={() => addCondition("sell")}>
          + Add Sell Condition
        </span>
      </div>

      <button onClick={saveStrategy}> Save Strategy</button>
    </div>
  );
};

export default StrategyBuilder;



