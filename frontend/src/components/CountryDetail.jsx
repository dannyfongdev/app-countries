import { useState, useEffect } from "react";

import { getByCode } from "../modules/countries";

function CountryDetail(props) {
  const { code } = props;
  const [country, setCountry] = useState();

  useEffect(() => {
    getByCode(code)
      .then((data) => {
        if (data) {
          setCountry(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <button type="button" className="mb-12 px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800">Back</button>
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
            <div><span className="font-semibold">Borders: </span>{country.borders.join(', ')}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;