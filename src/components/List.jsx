import { Link } from 'react-router-dom';

const List = ({ users }) => {
  return (
    <ul className='flex flex-col gap-2'>
      {users.map(user => (
        <li key={user.id}>
          <Link to={user.id.toString()}>
            {user.lastName} {user.firstName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default List;
