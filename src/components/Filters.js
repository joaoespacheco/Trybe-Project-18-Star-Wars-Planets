import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Filters() {
  const { filterByName, handleFilterByName } = useContext(DataContext);

  return (
    <section>
      <div>
        <label htmlFor="text-filter">
          <input
            id="text-filter"
            type="text"
            data-testid="name-filter"
            value={ filterByName.name }
            onChange={ ({ target }) => handleFilterByName(target.value) }
          />
        </label>
      </div>
    </section>
  );
}
