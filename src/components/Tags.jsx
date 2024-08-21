export const Tags = ({ tags, query, setQuery }) => {
  return (
    <div className='flex justify-center'>
      <select value={query} onChange={e => setQuery(e.target.value)} className='select select-warning w-full max-w-xs'>
        <option disabled value=''>
          Search by tag
        </option>
        {tags.map(tag => (
          <option key={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
};
