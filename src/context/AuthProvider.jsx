import { createContext, useState } from 'react';

// 1. Створення контекста. буде юзатись в усіх компонентах як значення для хука useContext()
export const authContext = createContext();

// 2. Створення обгортки, яка приймає чілдрен - Апп. Може містити будь-яку логіку і хуки

export const AuthProvider = ({ children }) => {
  // 3. Стейт для користувача
  const [user, setUser] = useState('Alex');
  // 4. Логінізація
  const login = username => setUser(username);
  // 5. Логаут - вихід
  const logout = () => setUser('');

  // 6. Даємо всі значення, котрі буде приймати App. Ми в подальшому з будь-якого місця можемо до них звернутись
  const contextValue = {
    login: login,
    logout: logout,
    user: user,
    isLoggedIn: !!user,
    test: 'asdfasf',
    token: 'afsfsfghgkdkasjdjfkgkhjdlsd;fd',
  };

  // 7. Створення і надавання провайдера чілдренам
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};
