import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(DataContext);
  const {
    column,
    comparison,
    value,
  } = filterByNumericValues;

  const keys = planets.length === 0 ? [] : Object.keys(planets[0]);
  const planetsFilteredByName = planets.filter(
    ({ name }) => name.includes(filterByName.name),
  );

  const filterByValuesFunc = (coluna, metodo, valor) => {
    if (metodo === 'menor que') {
      return (planetsFilteredByName.filter(
        (planet) => Number(planet[coluna]) < Number(valor),
      ));
    } if (metodo === 'igual a') {
      return (planetsFilteredByName.filter(
        (planet) => Number(planet[coluna]) === Number(valor),
      ));
    }
    return (planetsFilteredByName.filter(
      (planet) => Number(planet[coluna]) > Number(valor),
    ));
  };

  const planetFilteredByValue = filterByValuesFunc(column, comparison, value);

  return (
    <section>
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
          {planetFilteredByValue.map((planet, index) => (
            <tr key={ `${planet.name}-${index}` }>
              <td>{planet.name}</td>
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
