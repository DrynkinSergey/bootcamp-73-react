import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import List from '../components/List';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className='text-center font-bold '>Users page</h1>
      <List users={users} />
    </div>
  );
};
export default Users;
