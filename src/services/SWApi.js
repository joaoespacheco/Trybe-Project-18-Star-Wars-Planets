const BASE_API = 'https://swapi.dev/api/planets';

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
