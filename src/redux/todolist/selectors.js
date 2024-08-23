import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todolist.items;
export const selectSearch = state => state.todolist.search;
export const selectFilter = state => state.todolist.filter;
export const selectIsError = state => state.todolist.isError;
export const selectIsLoading = state => state.todolist.isLoading;

// export const selectUncompletedTodos = state => {
//   const todos = selectTodos(state);
//   console.log('Count uncompleted');

//   return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
// };

// export const selectFilteredTodos = state => {
//   const filter = selectFilter(state);
//   const search = selectSearch(state);
//   const todos = selectTodos(state).filter(item => item.todo.toLowerCase().includes(search.toLowerCase()));
//   console.log('Filter todos');

//   switch (filter) {
//     case 'all':
//       return todos;
//     case 'active':
//       return todos.filter(item => !item.completed);
//     case 'completed':
//       return todos.filter(item => item.completed);
//     default:
//       return todos;
//   }
// };

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
  console.log('Count uncompleted');
  return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
});

export const selectFilteredTodosMemo = createSelector([selectFilter, selectSearch, selectTodos], (filter, search, todos) => {
  const filtered = todos.filter(item => item.todo.toLowerCase().includes(search.toLowerCase()));
  console.log('Filter todos memo');

  switch (filter) {
    case 'all':
      return filtered;
    case 'active':
      return filtered.filter(item => !item.completed);
    case 'completed':
      return filtered.filter(item => item.completed);
    default:
      return filtered;
  }
});
