import CountryGrid from "./components/CountryGrid";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className="p-6 bg-slate-200">
      <CountryDetail code="usa"/>
      {/* <CountryGrid /> */}
    </div>
  );
}

export default App;
