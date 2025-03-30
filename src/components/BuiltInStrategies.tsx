import React from "react";
import "./BuiltInStrategies.css";
interface Condition {
  id: number;
  indicator: string;
  word:string,
  operator: string;
  value: number;
}

interface Strategy {
  name: string;
  buyConditions: Condition[];
  sellConditions: Condition[];
}

// **Built-in Strategies List**
const builtInStrategies: Strategy[] = [
  {
    name: "RSI & MACD Strategy",
    buyConditions: [
      { id: 1, indicator: "RSI", word: "must be", operator: ">", value: 30 },
      { id: 2, indicator: "MACD",  word: "must be", operator: ">", value: 0 },
    ],
    sellConditions: [
      { id: 3, indicator: "RSI",  word: "must be", operator: "<", value: 70 },
      { id: 4, indicator: "MACD",  word: "must be", operator: "<", value: 0 },
    ],
  },
  {
    name: "Moving Average Crossover",
    buyConditions: [
      { id: 5, indicator: "SMA",  word: "must be", operator: ">", value: 50 },
      { id: 6, indicator: "EMA",  word: "must be", operator: ">", value: 100 },
    ],
    sellConditions: [
      { id: 7, indicator: "SMA",  word: "must be", operator: "<", value: 50 },
      { id: 8, indicator: "EMA",  word: "must be", operator: "<", value: 100 },
    ],
  },
];

const BuiltInStrategies: React.FC = () => {
  return (
    <div className="built-in-strategies">
      <h2>Built-in Strategies</h2>
      <ul>
        {builtInStrategies.map((strategy, index) => (
          <li key={index} className="strategy-cards">
            <h3>{strategy.name}</h3>
            <div className="cond">
              <div className="innerCondition">
            <p><strong>Buy Conditions:</strong></p>
            <ul>
              {strategy.buyConditions.map((cond) => (
                <li key={cond.id}>
                  {cond.indicator} {cond.word} {cond.operator} {cond.value}
                </li>
              ))}
            </ul>
            </div>
            <div className="innerCondition">
            <p><strong>Sell Conditions:</strong></p>
            <ul>
              {strategy.sellConditions.map((cond) => (
                <li key={cond.id}>
                  {cond.indicator} {cond.word} {cond.operator} {cond.value}
                </li>
              ))}
            </ul>
            </div>
            </div>
          </li>
         
        ))}
        
      </ul>
    </div>
  );
};

export default BuiltInStrategies;
