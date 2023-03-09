import { useState, useEffect } from "react";

import { getByCode } from "../modules/countries";


// @todo - border countries sometimes breaks. depends on data

function CountryDetail(props) {
  const { code, onBack, countryNames, onGotoBorderCountry} = props;
  const [country, setCountry] = useState();

  useEffect(() => {
    getByCode(code)
      .then((data) => {
        if (data) {
          setCountry(data[0]);
        } else {
          console.log('no data')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [code]);

  return (
    <div>
      <button type="button" className="mb-12 px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800" onClick={onBack}>Back</button>
      {country && (

        <div className="md:flex md:gap-24">
          <div>
            <img src={country.flag} alt="country flag" />
          </div>
          <div>
            <div className="text-2xl font-bold mb-6">{country.name}</div>
            <div className="mb-3 md:grid md:grid-cols-2">
              <div>
                <div><span className="font-semibold">Native Name: </span>{country.nativeName}</div>
                <div><span className="font-semibold">Population: </span>{country.population}</div>
                <div><span className="font-semibold">Region: </span>{country.region}</div>
                <div><span className="font-semibold">Sub Region:</span>{country.subregion}</div>
                <div><span className="font-semibold">Capital: </span>{country.capital}</div>
              </div>
              <div>
                <div><span className="font-semibold">Top Level Domain: </span>{country.tld}</div>
                <div><span className="font-semibold">Currencies: </span>{country.currencies}</div>
                <div><span className="font-semibold">Languages: </span>{country.languages}</div>
              </div>
            </div>
         
            {country.borders && <div className="space-x-3"><span className="font-semibold">Borders: </span>{country.borders.map(bc => <div key={bc} className="inline-block mb-2 py-2 px-6 bg-gray-50 cursor-pointer" onClick={()=>onGotoBorderCountry(bc)}>{countryNames[bc]}</div>)}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
