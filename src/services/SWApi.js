const BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getSWApi = async () => {
  try {
    const response = await fetch(BASE_API);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export default getSWApi;
