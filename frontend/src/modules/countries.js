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


export function getCountry(name) {
  return getJson('http://127.0.0.1:8000/api/name/'+name)
}

export function getRegion(region) {
  return getJson('http://127.0.0.1:8000/api/region/'+region)
}

export function getByCode(code) {
  return getJson('http://127.0.0.1:8000/api/alpha/'+code)
}

export function getCountryCodes() {
  return getJson('http://127.0.0.1:8000/api/codes/')
}


// for testing
export function getLima() {
  return getJson('http://127.0.0.1:8000/api/lima/')
}