import { useState, useEffect } from "react"

import { getRegion, getCountry } from './modules/countries'
import CountryGrid from "./components/CountryGrid";
import CountryDetail from "./components/CountryDetail";
import SearchBar from "./components/SearchBar";


function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [showGrid, setShowGrid] = useState(true);
  const [countries, setCountries] = useState();
  const [detailCountry, setDetailCountry] = useState();

  // on load, default to region = 'Americas'
  useEffect(() => {
      getRegion('Americas')
      .then (data => {
        setCountries(data);
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
    getCountry(s)
      .then (data => {
        setCountries(data);
      })
      .catch (error => {
        console.log(error);
      });
  }

  return (
    <div className="p-6 bg-slate-200">
      {showGrid && <SearchBar onSearch={s => handleSearch(s)} onSelectRegion={r => console.log('App', r)} />}
      {showGrid && searchTerm && <div className="mb-4 font-bold">Searching for "{searchTerm}"</div>}
      {!showGrid && <CountryDetail code={detailCountry} onBack={() => setShowGrid(true)} />}
      {showGrid && <CountryGrid onShow={cca3 => showCountryDetail(cca3)} countries={countries}/>}
    </div>
  );
}

export default App;
