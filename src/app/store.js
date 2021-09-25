import { configureStore } from '@reduxjs/toolkit';
import themedReducer from 'features/theme/themeSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        themed: themedReducer,
        counter: counterReducer,
    },
});
