const BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getSWApi = async () => {
  const response = await fetch(BASE_API);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getSWApi;
