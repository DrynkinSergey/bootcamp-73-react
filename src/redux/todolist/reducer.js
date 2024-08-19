import { ADD_TODO, CHANGE_FILTER, CHANGE_SEARCH, DELETE_TODO } from './constants';

const initialState = {
  items: [{ id: 1, todo: 'Learn Redux', completed: true }],
  filter: '',
  search: '',
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
