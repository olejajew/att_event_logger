import React from 'react';
import './App.css';
import DatePickerRow from './ui/components/DatePickerRow';

function App() {
  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <h1>Date Range Picker with Download Button</h1>
        <DatePickerRow />
      </div>
    </div>
  );
}

export default App;
