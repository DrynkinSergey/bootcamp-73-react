import Header from './components/Header/Header';
import { List } from './components/List/List';
import Message from './components/Message/Message';
import Modal from './components/Modal/Modal';
import Profile from './components/Profile/Profile';
import userData from './assets/user.json';
const App = () => {
  const isOnline = true;
  const messageData = [
    {
      title: 'Maria',
      text: 'Hello world',
      online: false,
      id: 'asdfadsf',
    },
    {
      title: 'Petro',
      text: 'Реакт крутий!',
      online: true,
      id: 132123,
    },
    {
      title: 'Ivan',
      text: 'Test',
      online: false,
      id: 12,
    },
    {
      title: 'Helen',
      text: 'Hello world',
      online: true,
      id: 1,
    },
  ];

  const filmsData = [
    {
      id: 1,
      title: 'Terminator',
    },
    {
      id: 2,
      title: 'Taxi',
    },
    {
      id: 3,
      title: 'Harry Potter',
    },
    {
      id: 4,
      title: 'GoT',
    },
    {
      id: 5,
      title: 'Batman',
    },
  ];

  const goodsData = [
    {
      id: 5,
      title: 'Tomato',
    },
    {
      id: 1,
      title: 'Apples',
    },
    {
      id: 2,
      title: 'Potatos',
    },
    {
      id: 3,
      title: 'Tablet',
    },
  ];

  return (
    <>
      <Header />

      {/* {isOnline && <h1>Welcome back!</h1>}
      {isOnline || <h1>Offline</h1>} */}

      {isOnline ? <h1 className='title'>Welcome back!</h1> : <h1>Offline</h1>}

      <Modal>
        <List data={filmsData} title='Movies' />
      </Modal>

      <Modal title='Products modal'>
        <List data={goodsData} title='Products' />
        <div>
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </Modal>
      <Profile user={userData} />
      {/* {messageData.map(message => (
        <Message key={message.id} title={message.title} text={message.text} online={message.online} />
      ))} */}
    </>
  );
};
export default App;
