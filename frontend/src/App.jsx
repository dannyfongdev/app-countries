import { useState } from "react"

import CountryGrid from "./components/CountryGrid";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [currentCountry, setCurrentCountry] = useState('');
  const [showDetail, setShowDetail] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  function showCountryDetail(code) {
    setCurrentCountry(code);
    setShowDetail(true);
    setShowGrid(false);
  }

  function showCountryGrid() {
    setShowDetail(false);
    setShowGrid(true);
  }

  return (
    <div className="p-6 bg-slate-200">
      {showDetail && <CountryDetail code={currentCountry} onBack={showCountryGrid} />}
      {showGrid && <CountryGrid onShow={cca3 => showCountryDetail(cca3)} />}
    </div>
  );
}

export default App;
