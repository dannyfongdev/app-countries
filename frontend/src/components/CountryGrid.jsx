import { useState, useEffect } from 'react'

import CountryCard from './CountryCard';
import { getLima, getRegion } from '../modules/countries'


function CountryGrid () {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getRegion('asia')
    .then (data => {
      setCountries(data);
    })
    .catch (error => {
      console.log(error);
    });
  }, []);


  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {countries && countries.map(country => (
      <CountryCard 
        key={country.cca3}
        name={country.name}
        flag={country.flag}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    ))}
  
    </div>
  )
}

export default CountryGrid;