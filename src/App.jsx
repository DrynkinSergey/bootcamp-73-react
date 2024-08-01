import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { List } from './components/List/List';
import Message from './components/Message/Message';

const App = () => {
  const isOnline = true;
  const isLoading = true;
  const isError = false;
  const isOpen = true;
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

      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      {isOpen && <h2>Open modal</h2>}
      {isOnline ? <h1>Welcome back!</h1> : <h1>Offline</h1>}

      <List data={filmsData} title='Movies' />
      <List data={goodsData} title='Products' />

      {/* {messageData.map(message => (
        <Message key={message.id} title={message.title} text={message.text} online={message.online} />
      ))} */}

      {/* <Footer /> */}
    </>
  );
};
export default App;
