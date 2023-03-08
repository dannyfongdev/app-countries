import CountryCard from './CountryCard';

function CountryGrid (props) {
  const { onShow, countries } = props;

  
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