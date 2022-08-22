import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

export default function Filters() {
  const {
    filterByName,
    handleFilterByName,
    handleFilterByNumericValues,
  } = useContext(DataContext);

  const [localFilterValues, setlocalFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  const handleLocalFilter = ({ target }) => {
    const { id, value } = target;
    setlocalFilterValues({ ...localFilterValues, [id]: value });
  };

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
      <div>
        <label htmlFor="column">
          Coluna
          <select
            id="column"
            data-testid="column-filter"
            value={ localFilterValues.column }
            onChange={ handleLocalFilter }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          Operador
          <select
            id="comparison"
            data-testid="comparison-filter"
            value={ localFilterValues.comparison }
            onChange={ handleLocalFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            id="value"
            type="number"
            value={ localFilterValues.value }
            onChange={ handleLocalFilter }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleFilterByNumericValues(localFilterValues) }
        >
          Adicionar filtro
        </button>
      </div>
    </section>
  );
}
