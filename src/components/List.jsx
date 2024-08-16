import { Link, useLocation } from 'react-router-dom';

const List = ({ users }) => {
  const location = useLocation();
  return (
    <ul className='flex flex-col gap-2'>
      {users.map(user => (
        <li key={user.id}>
          <Link to={user.id.toString()} state={location}>
            {user.lastName} {user.firstName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default List;
