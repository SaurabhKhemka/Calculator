import React, { useState } from "react";
import "./index.css";

function Calculator() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [selectedOperation, setSelectedOperation] = useState('+');
  const [result, setResult] = useState('');
  const [totalOperations, setTotalOperations] = useState(0);

  const performCalculation = {
    '+': (x, y) => {
      return x + y;
    },
    '-': (x, y) => {
      return x - y;
    },
    '*': (x, y) => {
      return x * y;
    },
    '/': (x, y) => {
      return x / y;
    }
  }

  const performOperation = (type) => {
    if (input1 !== '' && input2 !== '') {
      setResult(performCalculation[type](+input1, +input2));
      setSelectedOperation(type);
      setTotalOperations((prevState) => +prevState + 1);
    }
  }

  const performReset = () => {
    setInput1('');
    setInput2('');
    setSelectedOperation('+');
    setResult('');
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total Operations performed: {totalOperations}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1" value={input1} onChange={e => setInput1(e.target.value)}
              name="input1" />
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{selectedOperation}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
              placeholder="Eg: 2" value={input2} onChange={e => setInput2(e.target.value)} />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={() => performOperation('+')}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={() => performOperation('-')}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => performOperation('*')}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => performOperation('/')}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={performReset}>Reset</button>
            {
              result !== '' &&
              <div className="layout-row justify-content-center align-items-center result-container">
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>
              </div>
            }
          </div>
        </section>

      </div>
    </div>
  );
}



export default Calculator;  