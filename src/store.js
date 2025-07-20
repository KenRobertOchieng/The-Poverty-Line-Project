import { configureStore } from '@reduxjs/toolkit';
import userListingReducer from './features/users/userListingSlice';

const store = configureStore({
  reducer: {
    userListing: userListingReducer,
  },
});

export default store;
