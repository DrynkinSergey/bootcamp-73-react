import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

const initialState = {
  counter: 10,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + state.step,
      };
    }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - state.step,
      };
    case CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case RESET:
      return {
        ...state,
        step: 1,
        counter: 0,
      };
    default:
      return state;
  }
};
