import axios from 'axios';

export function get_lima() {
  return axios.get('http://127.0.0.1:8000/api/lima/')
  .then(response => {
    return response.data;
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
}