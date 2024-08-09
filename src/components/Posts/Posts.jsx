import { useEffect, useState } from 'react';
import AddPost from './AddPost';
import List from './List';
import SearchBar from './SearchBar';
import { nanoid } from 'nanoid';
import Modal from '../Modal/Modal';
import { EditPost } from './EditPost';

export const Posts = () => {
  // Використовуємо стейт для стану і витягуємо з локал сторейдж збережений (якщо є)
  const [posts, setPosts] = useState(() =>
    JSON.parse(window.localStorage.getItem('posts') ?? [{ id: 1, title: 'How to learn REACT', body: 'Easy' }])
  );
  // Слугує для пошуку по тайтлу
  const [searchStr, setSearchStr] = useState('');
  // Відкриття модального вікна
  const [isOpen, setIsOpen] = useState(false);
  // Тимчасовий пост, котрий я отримую після натискання на едіт
  const [tempPost, setTempPost] = useState();

  // Еффект для запису в локал сторейдж постів
  useEffect(() => {
    window.localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Видалення поста
  const handleDeletePost = id => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  // Додавання поста
  const handleAddPost = post => {
    setPosts(prev => [...prev, { ...post, id: nanoid() }]);
  };

  // Відкриття модалки
  const openModal = () => setIsOpen(true);
  // Закриття модалки та очистка тимчасового поста
  const closeModal = () => {
    setIsOpen(false);
    setTempPost();
  };

  // Відкриває ця функція модальне вікно для редагування і в цей час передає пост як тимчасовий для подальшої роботи з ним
  const changePost = post => {
    console.log(post);
    openModal();
    setTempPost(post);
  };

  // Сабміт передається пропсами до форми. Бо ми хочемо юзати стейт прям тут
  const handleSubmit = (values, options) => {
    setPosts(prev => prev.map(item => (item.id === tempPost.id ? { ...item, title: values.title, body: values.body } : item)));
    options.resetForm();
    closeModal();
  };

  // Фільтр по заданому слову
  const filteredData = posts.filter(item => item.title.toLowerCase().includes(searchStr.toLowerCase()));

  return (
    <div>
      <AddPost handleAddPost={handleAddPost} />
      <SearchBar searchStr={searchStr} setSearchStr={setSearchStr} />
      <List changePost={changePost} posts={filteredData} handleDeletePost={handleDeletePost} />

      {isOpen && (
        <Modal onClose={closeModal}>
          {/* Передача пропсів вниз до форми */}
          <EditPost handleSubmit={handleSubmit} initialValues={tempPost} />
        </Modal>
      )}
    </div>
  );
};
