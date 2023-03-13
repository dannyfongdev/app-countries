import axios from 'axios';

function getJson(url) {
  return axios.get(url)
  .then(response => {
    return response.data.list;
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
}

// const BASE_URL = 'http://127.0.0.1:8000'
// const BASE_URL = 'https://djg-countries.vercel.app/'
const BASE_URL = 'https://djg-countries-git-main-dannyfongdev.vercel.app'
// @todo I think the reason why production url djg-countries.vercel.app does not allow requests is because production environment only allows hosts 'vercel.app'

export function getCountry(name) {
  return getJson(BASE_URL + '/api/name/' + name)
}

export function getRegion(region) {
  return getJson(BASE_URL + '/api/region/'+ region)
}

export function getByCode(code) {
  return getJson(BASE_URL + '/api/alpha/'+ code)
}

export function getCountryCodes() {
  return getJson(BASE_URL + '/api/codes/')
}


// for testing
export function getLima() {
  return getJson(BASE_URL + '/api/lima/')
}