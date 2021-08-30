import { Divider } from 'antd';
import React from 'react';
import './App.css';
import DecimalToRomanConverter from './DecimalToRoman';
import RomanToDecimalConverter from './RomanToDecimal';

function App() {
  return (
    <div className="app">
      <DecimalToRomanConverter />
      <Divider />
      <RomanToDecimalConverter />
    </div>
  );
}

export default App;
