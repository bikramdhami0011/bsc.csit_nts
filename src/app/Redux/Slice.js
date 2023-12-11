// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData:[]
    // other user-related properties
  },
  reducers: {
    setUser: (state, action) => {
            console.log(action);
    },
    // clearUser: (state) => {
    //   return { name: '', email: '' }; // Reset user data
    // },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
