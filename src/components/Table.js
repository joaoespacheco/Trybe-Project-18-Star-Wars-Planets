import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Table() {
  const {
    planets,
    filterByName,
    filterByNumericValues,
    removeFilterByNumericValues,
    ordenationValues,
  } = useContext(DataContext);

  const keys = planets.length === 0 ? [] : Object.keys(planets[0]);
  const planetsFilteredByName = planets.filter(
    ({ name }) => name.includes(filterByName.name),
  );

  let planetsFiltered = planetsFilteredByName;

  const filterByValuesFunc = (coluna, metodo, valor) => {
    if (metodo === 'menor que') {
      return (planetsFiltered.filter(
        (planet) => Number(planet[coluna]) < Number(valor),
      ));
    } if (metodo === 'igual a') {
      return (planetsFiltered.filter(
        (planet) => Number(planet[coluna]) === Number(valor),
      ));
    }
    if (metodo === 'maior que') {
      return (planetsFiltered.filter(
        (planet) => Number(planet[coluna]) > Number(valor),
      ));
    }
    return (planetsFiltered.filter(
      (planet) => Number(planet.population) > 0,
    ));
  };

  filterByNumericValues.forEach(({ column = '', comparison = '', value = '' }) => {
    planetsFiltered = filterByValuesFunc(column, comparison, value);
  });

  const orderAsc = (a, b) => {
    const negativeResponse = -1;
    if (b[ordenationValues.column] === 'unknown') {
      return negativeResponse;
    }
    const result = a[ordenationValues.column] - b[ordenationValues.column];
    return result;
  };

  const orderDesc = (a, b) => {
    const negativeResponse = -1;
    if (b[ordenationValues.column] === 'unknown') {
      return negativeResponse;
    }
    const result = b[ordenationValues.column] - a[ordenationValues.column];
    return result;
  };

  planetsFiltered.sort(ordenationValues.sort === 'DESC' ? orderDesc : orderAsc);

  return (
    <section>
      {filterByNumericValues.length > 0 ? (
        filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <span>{`${column} ${comparison} ${value}`}</span>
            <button
              id={ column }
              type="button"
              onClick={ removeFilterByNumericValues }
            >
              deletar
            </button>
          </div>
        ))
      ) : (
        ''
      )}
      <table>
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={ `${key}-${index}` }>
                {(key.split('')[0].toUpperCase() + key.split(
                  '',
                ).splice(1).join('')).replace('_', ' ')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetsFiltered.map((planet, index) => (
            <tr
              key={ `${planet.name}-${index}` }
              data-testid={ `${planet.name}-${index}` }
            >
              <td
                data-testid="planet-name"
              >
                {planet.name}
              </td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
