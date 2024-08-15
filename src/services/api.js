import axios from 'axios';

export const fetchUsers = async () => {
  const { data } = await axios.get('https://dummyjson.com/users');
  return data.users;
};
