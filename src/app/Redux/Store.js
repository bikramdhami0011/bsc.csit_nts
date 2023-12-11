// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice'; // Import your slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add your slice to the root reducer
    // Add other slices if needed
  },
});

export default store;
