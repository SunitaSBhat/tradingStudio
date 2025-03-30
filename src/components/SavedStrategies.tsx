import React, { useState, useEffect } from "react";
import "./SavedStrategies.css";

interface Condition {
  
  value: string;
}

interface Strategy {
  name: string;
  buyConditions?: string[];  // Change to string[]
  sellConditions?: string[]; // Change to string[]
}

const SavedStrategies: React.FC = () => {
  const [savedStrategies, setSavedStrategies] = useState<Strategy[]>([]);

  useEffect(() => {
    const storedStrategies = localStorage.getItem("strategies");
    
    if (storedStrategies) {
      try {
        const parsedStrategies: Strategy[] = JSON.parse(storedStrategies);
        setSavedStrategies(parsedStrategies);
      } catch (error) {
        console.error("Error parsing strategies from localStorage", error);
      }
    }
  }, []);

  return (
    <div className="saved-strategies-container">
      <h2>Saved Strategies</h2>
      {savedStrategies.length === 0 ? (
        <p>No saved strategies found.</p>
      ) : (
        <ul>
          {savedStrategies.map((strategy, index) => (
            <li key={index} className="strategy-card">
              <h3>{strategy.name}</h3>
              <div className="cards">
              <div className="conditions">
                <h4> Buy Conditions:</h4>
                {strategy.buyConditions && strategy.buyConditions.length > 0 ? (
                    <ul>
                      {strategy.buyConditions.map((condition, idx) => (
                       <li key={idx}>{condition}</li> // Directly display the string
                       ))}
                          </ul>
                       ) : (
                    <p>No buy conditions added.</p>
                       )}

              </div>
              <hr className='divider' />
              <div className="conditions">
                <h4> Sell Conditions:</h4>
                {strategy.sellConditions && strategy.sellConditions.length > 0 ? (
               <ul>
             {strategy.sellConditions.map((condition, idx) => (
      <li key={idx}>{condition}</li> // Directly display the string
    ))}
  </ul>
                ) : (
  <p>No sell conditions added.</p>
         )}

              </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedStrategies;


