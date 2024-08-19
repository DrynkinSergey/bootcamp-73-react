import { ADD_TODO, CHANGE_FILTER, CHANGE_SEARCH, DELETE_TODO } from './constants';

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const changeSearch = searchValue => {
  return {
    type: CHANGE_SEARCH,
    payload: searchValue,
  };
};

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
};
