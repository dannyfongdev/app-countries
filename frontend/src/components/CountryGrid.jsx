import { useState, useEffect } from 'react'

import CountryCard from './CountryCard';
import { getRegion } from '../modules/countries'


function CountryGrid (props) {
  const { onShow } = props;

  const [countries, setCountries] = useState();

  useEffect(() => {
    getRegion('Americas')
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
        onShow={c => onShow(c)}
        cca3={country.cca3}
      />
    ))}
  
    </div>
  )
}

export default CountryGrid;