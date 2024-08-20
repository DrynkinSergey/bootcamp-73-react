import { createReducer } from '@reduxjs/toolkit';
import { addTodo, changeFilter, changeSearch, deleteTodo } from './actions';

const initialState = {
  items: [{ id: 1, todo: 'Learn Redux', completed: true }],
  filter: '',
  search: '',
};

export const todosReducer = createReducer(initialState, builder => {
  builder
    .addCase(deleteTodo, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    })
    .addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(changeSearch, (state, action) => {
      state.search = action.payload;
    })
    .addCase(changeFilter, (state, action) => {
      state.filter = action.payload;
    });
});

// export const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_TODO: {
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     }
//     case ADD_TODO: {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }
//     case CHANGE_SEARCH:
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case CHANGE_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };
