import { node } from 'prop-types';
import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';
import getSWApi from '../services/SWApi';

function DataProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const requestPlanets = async () => {
    try {
      const response = await getSWApi();
      const data = response.results;
      data.forEach((_planet, index) => {
        delete data[index].residents;
      });
      setPlanets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <DataContext.Provider value={ { planets } }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: node.isRequired,
};

export default DataProvider;
