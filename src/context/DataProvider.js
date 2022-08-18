import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import DataContext from './DataContext';
import getSWApi from '../services/SWApi';

function DataProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const requestPlanets = async () => {
    const response = await getSWApi();
    const data = response.results;
    data.forEach((_planet, index) => {
      delete data[index].residents;
    });
    setPlanets(data);
  };

  const handleFilterByName = (value) => {
    setFilterByName({ name: value });
  };

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <DataContext.Provider value={ { planets, filterByName, handleFilterByName } }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: node.isRequired,
};

export default DataProvider;
