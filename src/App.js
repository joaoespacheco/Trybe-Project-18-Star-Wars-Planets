import React from 'react';
import './styles/main.scss';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <main>
      <div className="stars" />
      <div className="home-container">
        <Filters />
        <Table />
      </div>
    </main>
  );
}

export default App;
