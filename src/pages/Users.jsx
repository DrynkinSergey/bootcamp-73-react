import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import { useLocation, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  // Ініціалізація searchParams та setSearchParams
  // searchParams - об`єкт параметрів юрл. Містить методи set, get, delete
  // setSearchParams - функція для запису нових параметрів в юрл
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  // Отримання квері з юрл параметрів через метод get. Може повернути нам null, тому юзаємо ?? і встановлюємо строку пусту
  const query = searchParams.get('query') ?? '';
  // const selected = searchParams.get('selected') ?? '';
  // console.log(selected, typeof selected);

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

  const handleChangeInput = e => {
    // Можемо встановити в юрл поле query при зміні інпута
    searchParams.set('query', e.target.value);
    // Відправляємо команду на оновлення юрл
    setSearchParams(searchParams);
  };

  const filteredData = users.filter(
    item => item.lastName.toLowerCase().includes(query.toLowerCase().trim()) || item.firstName.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <div>
      <h1 className='text-center font-bold '>Users page</h1>
      <SearchBar query={query} setSearchValue={handleChangeInput} />
      <List users={filteredData} />
    </div>
  );
};
export default Users;
