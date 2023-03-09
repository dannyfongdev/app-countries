import { useState, useEffect } from "react"

import { getRegion, getCountry, getCountryCodes } from './modules/countries'
import CountryGrid from "./components/CountryGrid";
import CountryDetail from "./components/CountryDetail";
import SearchBar from "./components/SearchBar";


function App() {
  const [countryNames, setCountryNames] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [regionTerm, setRegionTerm] = useState();
  const [showGrid, setShowGrid] = useState(true);
  const [countries, setCountries] = useState(); // list of country objects passed to CountryGrid component
  const [detailCountry, setDetailCountry] = useState(); // country code passed to CountryDetail component

  // on load, default to region = 'Americas'
  // also load objects for looking up country names by code: {PER: 'Peru'}
  useEffect(() => {
      getRegion('Americas')
      .then (data => {
        setCountries(data);
      })
      .catch (error => {
        console.log(error);
      });

      getCountryCodes()
      .then (data => {
        setCountryNames(data);
      })
      .catch (error => {
        console.log(error);
      });
  }, []);

  function showCountryDetail(code) {
    setDetailCountry(code);
    setShowGrid(false);
  }

  function handleSearch(s) {
    setSearchTerm(s);
    setRegionTerm('');
    getCountry(s)
      .then (data => {
        setCountries(data);
      })
      .catch (error => {
        console.log(error);
      });
  }

  function handleRegion(r) {
    setSearchTerm('');
    setRegionTerm(r);
    getRegion(r)
      .then (data => {
        setCountries(data);
      })
      .catch (error => {
        console.log(error);
      });
  }

  return (
    <div className="p-6 bg-slate-200">
      {showGrid && <SearchBar onSearch={handleSearch} onSelectRegion={handleRegion} />}
      {showGrid && searchTerm && <div className="mb-4 font-bold">Search: "{searchTerm}"</div>}
      {showGrid && regionTerm && <div className="mb-4 font-bold">Region: "{regionTerm}"</div>}
      {!showGrid && <CountryDetail code={detailCountry} onBack={() => setShowGrid(true)} countryNames={countryNames} onGotoBorderCountry={showCountryDetail} />}
      {showGrid && <CountryGrid onShow={showCountryDetail} countries={countries}/>}
    </div>
  );
}

export default App;
