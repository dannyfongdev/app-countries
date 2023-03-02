import { useState, useEffect } from 'react'
import { get_lima } from '../modules/countries'

function Country () {
  const [countries, setCountries] = useState();

  const x = {name: 'you'};
  console.log(x.name)

  useEffect(() => {
    get_lima()
    .then (data => {
      setCountries(data[0]);
    });
  }, []);


  return (
    <h1>Country:</h1>
  )
}

export default Country;