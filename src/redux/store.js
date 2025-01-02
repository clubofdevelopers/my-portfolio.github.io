import { configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers'; // Import your reducers

// Create the Redux store
const store = configureStore({
    reducer: {
        navigation: navReducer, // Combine reducers here
    },
});

export default store;