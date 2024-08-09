const SearchBar = ({ searchStr, setSearchStr }) => {
  return (
    <div>
      <input value={searchStr} onChange={e => setSearchStr(e.target.value)} placeholder='Enter search value...' />
    </div>
  );
};
export default SearchBar;
