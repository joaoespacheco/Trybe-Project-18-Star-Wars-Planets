import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

export default function Filters() {
  const {
    filterByName,
    handleFilterByName,
    handleFilterByNumericValues,
    filterByNumericValues,
    resetFilterByNumericValues,
    handleOrdenationValues,
  } = useContext(DataContext);

  const [localFilterValues, setlocalFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  const [localOrdenationValues, setlocalOrdenationValues] = useState({
    column: 'population',
    sort: 'ASC' });

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

  const handleLocalOrder = ({ target }) => {
    const { name, value } = target;
    setlocalOrdenationValues({ ...localOrdenationValues, [name]: value });
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
        <label htmlFor="order-columns">
          Ordenar
          <select
            id="order-columns"
            name="column"
            data-testid="column-sort"
            onChange={ handleLocalOrder }
          >
            {allFilters.map((column) => (
              <option key={ column }>{column}</option>
            ))}
          </select>
        </label>
        <label htmlFor="asc-radio">
          <input
            id="asc-radio"
            name="sort"
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            checked={ localOrdenationValues.sort === 'ASC' }
            onChange={ handleLocalOrder }
          />
          Ascendente
        </label>
        <label htmlFor="desc-radio">
          <input
            id="desc-radio"
            name="sort"
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            checked={ localOrdenationValues.sort === 'DESC' }
            onChange={ handleLocalOrder }
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => handleOrdenationValues(localOrdenationValues) }
        >
          Ordenar
        </button>
      </div>
    </section>
  );
}
