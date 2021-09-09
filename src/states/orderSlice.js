import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderItems: [],
    orderItemCount: 0
  },
  reducers: {
    addOrderItem: (state, action) => {
      state.orderItems = [...state.orderItems, action.payload];
      state.orderItemCount += 1;
    },
    removeOrderItem: (state, action)  => {
      state.orderItems.filter(item => item.id !== action.payload) 
      state.orderItemCount -= 1;
    },
  }
})

export const { addOrderItem, removeOrderItem } = orderSlice.actions
export const orderCountSelect = (state) => state.order.orderItemCount;


export default orderSlice.reducer
