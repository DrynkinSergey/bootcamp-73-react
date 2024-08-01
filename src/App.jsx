import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';

const App = () => {
  const isOnline = true;
  const isLoading = true;
  const isError = false;
  const isOpen = true;
  return (
    <>
      <Header />
      {/* {isOnline && <h1>Welcome back!</h1>}
      {isOnline || <h1>Offline</h1>} */}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      {isOpen && <h2>Open modal</h2>}
      {isOnline ? <h1>Welcome back!</h1> : <h1>Offline</h1>}
      <Message title='Maria' text='Hello world' online={true} />
      <Message title='Helen' text='Куплю холодильник!' online={false} />
      <Message title='Ivan' text='Супер товар!' online={false} />

      <Footer />
    </>
  );
};
export default App;
