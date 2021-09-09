import { createSlice } from '@reduxjs/toolkit'

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    isVisible: false,
    message: '',
    color: '#333'
  },
  reducers: {
    showSuccess: (state, action) => {
      state.isVisible = true;
      console.log(action)
      state.message = action.payload;
      state.color = '#689F38'
    },
    showDanger: (state, action) => {
      state.isVisible = true;
      console.log(action)
      state.message = action.payload;
      state.color = '#D32F2F'
    },
    showWarning: (state, action) => {
      state.isVisible = true;
      console.log(action)
      state.message = action.payload;
      state.color = '#9E9E9E'
    },
    hide: (state) => {
      state.isVisible = false;
      state.message = '';
    },
  }
})

export const { showSuccess, showWarning, showDanger, hide } = toastSlice.actions
export const selectToastVisiblity = (state) => [state.toast.isVisible, state.toast.message, state.toast.color];

export default toastSlice.reducer
