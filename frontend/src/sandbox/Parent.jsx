import Child from './Child';

function Parent() {

  function handleSearch(s) {
    console.log(s);
    return;
  }

  return (
    <div>
      Parent
      <Child onSearch={s => console.log(s)} />
    </div>
  )
}

export default Parent;