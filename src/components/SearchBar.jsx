const SearchBar = ({ query, setSearchValue }) => {
  return (
    <div className='my-4  '>
      <input
        value={query}
        onChange={setSearchValue}
        className='input input-bordered input-primary w-full max-w-xs'
        placeholder='Enter search value...'
      />
    </div>
  );
};
export default SearchBar;
