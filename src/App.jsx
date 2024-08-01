import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';

const App = () => {
  return (
    <>
      <Header />

      <Message title='Maria' text='Hello world' />
      <Message title='Helen' text='Куплю холодильник!' />
      <Message title='Ivan' text='Супер товар!' />

      <Footer />
    </>
  );
};
export default App;
