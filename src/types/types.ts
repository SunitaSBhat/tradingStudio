export interface Condition {
    indicator: string;
    operator: string;
    value: number;
  }
  
  export interface Strategy {
    name: string;
    buyConditions: Condition[];
    sellConditions: Condition[];
  }