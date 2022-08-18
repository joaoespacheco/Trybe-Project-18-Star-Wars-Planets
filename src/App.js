import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <main>
      <Filters />
      <Table />
    </main>
  );
}

export default App;
