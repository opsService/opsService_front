import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  selectedMenu: number;
}

const initialState: CommonState = {
  selectedMenu: 0,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const { setMenu } = commonSlice.actions;
export default commonSlice.reducer;
