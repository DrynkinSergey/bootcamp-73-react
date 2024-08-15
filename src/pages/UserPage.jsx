import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchUserById } from '../services/api';

const UserPage = () => {
  const { userId } = useParams();
  console.log(userId);
  const [user, setUser] = useState();
  // Запуститься тільки після рендеру розмітки
  useEffect(() => {
    fetchUserById(userId).then(data => setUser(data));
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img src={user.image} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Address: {user.address.state} {user.address.city} {user.address.address}
      </p>
      <ul className='flex gap-4 bg-red-500 justify-center'>
        <li>
          <NavLink to='info'>Info</NavLink>
        </li>
        <li>
          <NavLink to='posts'>Posts</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default UserPage;
