import { useState } from "react";

import DropdownMenu from "./DropdownMenu";

function Search(props) {
  const { onSearch, onSelectRegion } = props;

  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row">
      <form className="mb-12" onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          className="p-4"
          id="search"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <DropdownMenu onSelectRegion={onSelectRegion}/>
    </div>
  );
}

export default Search;
