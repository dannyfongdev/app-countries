
function CountryCard(props) {
  const { flag, name, population, region, capital } = props;

  return (
    <div>
      <img src={flag} alt="country flag" />
      <div className="my-4 text-2xl font-bold">{name}</div>
      <div><span className="font-semibold">Population: </span>{population}</div>
      <div><span className="font-semibold">Region: </span>{region}</div>
      <div><span className="font-semibold">Capital: </span>{capital}</div>
    </div>
  )
}

export default CountryCard;