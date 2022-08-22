import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

export default function Filters() {
  const {
    filterByName,
    handleFilterByName,
    handleFilterByNumericValues,
    filterByNumericValues,
    resetFilterByNumericValues,
  } = useContext(DataContext);

  const [localFilterValues, setlocalFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  const allFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const filtersUsed = filterByNumericValues.map(({ column }) => column);

  const filterAvaible = allFilters.filter(
    (columnFilter) => !filtersUsed.includes(columnFilter),
  );

  const handleLocalFilter = ({ target }) => {
    const { id, value } = target;
    setlocalFilterValues({ ...localFilterValues, [id]: value });
  };

  const activeNewFilters = () => {
    handleFilterByNumericValues(localFilterValues);
    setlocalFilterValues({
      column: filterAvaible[0],
      comparison: 'maior que',
      value: 0,
    });
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
            onChange={ handleLocalFilter }
          >
            {filterAvaible.map((filter) => (
              <option
                key={ filter }
                value={ filter }
              >
                {filter}
              </option>
            ))}
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
          onClick={ activeNewFilters }
        >
          Adicionar filtro
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ resetFilterByNumericValues }
        >
          Remover Filtros
        </button>
      </div>
    </section>
  );
}
