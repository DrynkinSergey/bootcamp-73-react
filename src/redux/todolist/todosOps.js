import axios from 'axios';
import { fetchingSuccess, setIsError, setIsLoading } from './slice';

axios.defaults.baseURL = 'https://66c6dfaa8b2c10445bc80176.mockapi.io1/';

export const fetchTodosThunk = () => async dispatch => {
  try {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    const { data } = await axios.get('/todos');
    dispatch(fetchingSuccess(data));
  } catch (error) {
    dispatch(setIsError(true));
  }
};
