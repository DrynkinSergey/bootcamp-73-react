import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  tempProduct: null,
  isEdited: false,
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setEditedTempProduct: (state, action) => {
      state.tempProduct = action.payload;
      state.isEdited = true;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    editProduct: (state, action) => {
      // payload :{ id: '123sada', title:'new value'}
      // const product = state.products.find(product => product.id === action.payload.id);
      // product.title = action.payload.title;

      state.products = state.products.map(item =>
        item.id === action.payload.id ? { ...item, title: action.payload.title, price: action.payload.price } : item
      );
      state.isEdited = false;
      state.tempProduct = null;
    },
  },
});

export const productsReducer = slice.reducer;
export const { addProduct, deleteProduct, editProduct, setEditedTempProduct } = slice.actions;
