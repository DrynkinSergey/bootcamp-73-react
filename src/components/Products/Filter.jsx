import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeSearchFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <input value={filter} placeholder='Search' onChange={e => dispatch(changeSearchFilter(e.target.value))} />
    </div>
  );
};
export default Filter;
