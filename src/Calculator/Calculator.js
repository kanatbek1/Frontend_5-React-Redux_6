import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide } from './calculatorSlice';
import './App.css'; 
const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const handleCalculate = (operator) => {
    if (num1 === '' || num2 === '') {
      alert('Пожалуйста, заполните оба поля!');
      return;
    }
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);
    if (isNaN(num1Value) || isNaN(num2Value)) {
      alert('Пожалуйста, введите числовые значения!');
      return;
    }
    switch (operator) {
      case '+':
        dispatch(add({ num1: num1Value, num2: num2Value }));
        break;
      case '-':
        dispatch(subtract({ num1: num1Value, num2: num2Value }));
        break;
      case '*':
        dispatch(multiply({ num1: num1Value, num2: num2Value }));
        break;
      case '/':
        if (num2Value === 0) {
          alert('На ноль делить нельзя!');
          return;
        }
        dispatch(divide({ num1: num1Value, num2: num2Value }));
        break;
      default:
        break;
    }
  };
  const clearFields = () => {
    setNum1('');
    setNum2('');
  };
  return (
    <div className="calculator-container">
      <input
        type="text"
        className="input-field"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Введите число 1"
      />
      <input
        type="text"
        className="input-field"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Введите число 2"
      />
      <button className="operation-button" onClick={() => handleCalculate('+')}>Сложить</button>
      <button className="operation-button" onClick={() => handleCalculate('-')}>Вычесть</button>
      <button className="operation-button" onClick={() => handleCalculate('*')}>Умножить</button>
      <button className="operation-button" onClick={() => handleCalculate('/')}>Разделить</button>
      <button className="clear-button" onClick={clearFields}>Очистить</button>
      {result !== null && <p className="result-text">Результат: {result}</p>}
    </div>
  );
};
export default Calculator;
