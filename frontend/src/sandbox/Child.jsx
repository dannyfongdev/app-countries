import { useState } from 'react'

function Child(props) {
  const { onSearch } = props;

  const [term, setTerm] = useState('Peru');

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(term);
    console.log(term)
  }

  return (
    <form className="mb-12" onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <div>{term}        </div>
      <input id="search" type="text" value={term} onChange={e => setTerm(e.target.value)}/>
      {/* <input id="search" type="text" onChange={e => console.log(e.target.value)}/> */}
    </form>
  )
}

export default Child;