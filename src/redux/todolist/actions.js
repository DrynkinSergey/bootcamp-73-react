import { createAction } from '@reduxjs/toolkit';

// export const deleteTodo = id => {
//   return {
//     type: DELETE_TODO,
//     payload: id,
//   };
// };

// export const addTodo = todo => {
//   return {
//     type: ADD_TODO,
//     payload: todo,
//   };
// };

// export const changeSearch = searchValue => {
//   return {
//     type: CHANGE_SEARCH,
//     payload: searchValue,
//   };
// };

// export const changeFilter = filter => {
//   return {
//     type: CHANGE_FILTER,
//     payload: filter,
//   };
// };

export const deleteTodo = createAction('deleteTodo');
export const addTodo = createAction('addTodo');
export const changeSearch = createAction('changeSearch');
export const changeFilter = createAction('changeFilter');
