import React from 'react';
import './App.css';
import Title from './components/Title.js'
import Todo_part from './components/Todo_part';
function App() {
  return (
    <div className="App">
      <Title />
      <Todo_part/>
    </div>
  );
}

export default App;
